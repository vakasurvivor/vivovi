class GridCellAnimator {
  // --- 開発環境では HTMLCanvasElement。本番環境では OffscreenCanvas を優先する ---
  private canvas: HTMLCanvasElement | OffscreenCanvas | null = null;
  private ctx:
    | CanvasRenderingContext2D
    | OffscreenCanvasRenderingContext2D
    | null = null;

  // --- Device Pixel Ratio ---
  public dpr: number = 1;
  // --- Cell Colors ---
  public colors: string[] = ['240, 7%, 97%'];

  // --- Cell ---
  private readonly SQUARE_SIZE_PX: number = 1; //（CSS Pixel）
  private readonly SPACING_PX: number = this.SQUARE_SIZE_PX * 3; //（CSS Pixel）
  private readonly CELL_TOTAL_SIZE_PX: number =
    this.SQUARE_SIZE_PX + this.SPACING_PX; //（CSS Pixel）

  // --- Grid Cols / Grid Rows ---
  private cols: number = 0;
  private rows: number = 0;

  // --- Animation Opacity ---
  private readonly MIN_ALPHA: number = 0.1;
  private readonly MAX_ALPHA: number = 0.65;
  private readonly ALPHA_PULSE_RANGE: number = this.MAX_ALPHA - this.MIN_ALPHA; // 不透明度アニメーションの変動幅
  private readonly ALPHA_PULSE_OFFSET: number =
    this.MIN_ALPHA + this.ALPHA_PULSE_RANGE / 2; // 不透明度アニメーションの中央値

  // --- Animation Opacity Timing ---
  private readonly PULSE_SPEED: number = 1; // 不透明度アニメーションの位相変化速度
  private readonly TOGGLE_CHANCE_PER_SEC: number = 0.2; // CELLのアクティブ状態を切り替える確率/秒

  /**
   * グリッドの各セルの状態を保持する配列
   * - active: 現在アクティブ状態か（true: 点灯、false: 消灯）
   * - alpha: 現在の描画に適用される不透明度（0〜1）
   * - pulsePhase: 不透明度アニメーションの現在の位相
   * - colorIndex: 使用する色のインデックス（colors 配列内の位置）
   */
  private grid: {
    active: boolean;
    alpha: number;
    pulsePhase: number;
    colorIndex: number;
  }[][] = [];

  // --- アニメーションループ関連のプロパティ ---
  private animationFrameId: number = 0; // requestAnimationFrame ID
  private lastUpdateTime: DOMHighResTimeStamp = 0; // 前回フレームが描画されたタイムスタンプ

  /**
   * 描画コンテキストを初期化
   * @param offscreenCanvas 描画対象の OffscreenCanvas
   */
  constructor(canvasElOrOffscreenCanvas: HTMLCanvasElement | OffscreenCanvas) {
    this.canvas = canvasElOrOffscreenCanvas;
    this.ctx = this.canvas.getContext('2d') as
      | CanvasRenderingContext2D
      | OffscreenCanvasRenderingContext2D
      | null;
  }

  /**
   * グリッドとキャンバスの初期設定を行います。
   * ウィンドウのリサイズ時にも呼び出されます。
   * @param width キャンバスのCSS幅（ピクセル）
   * @param height キャンバスのCSS高さ（ピクセル）
   * @param dpr デバイスピクセル比
   * @param colors 使用する色の配列（HSL形式）
   */
  public init = (
    width: number,
    height: number,
    dpr: number,
    colors?: string[],
  ): void => {
    if (!this.canvas || !this.ctx) {
      console.error('Canvas or context is not initialized.');
      return;
    }

    // 物理ピクセルサイズを設定 (高DPI対応)
    this.dpr = dpr;
    this.canvas.width = width * this.dpr;
    this.canvas.height = height * this.dpr;

    // 列数・行数を計算
    this.cols = Math.floor(this.canvas.width / this.CELL_TOTAL_SIZE_PX);
    this.rows = Math.floor(this.canvas.height / this.CELL_TOTAL_SIZE_PX);

    // colors が提供されている場合のみ更新。これにより、resize 時に色がリセットされるのを防ぐ。
    if (colors && Array.isArray(colors) && colors.length > 0) {
      this.colors = colors.map(color => {
        const match = color.match(/hsl[a]?\(([^)]+)\)/);
        return match ? match[1] : color;
      });
    } else if (this.colors.length === 0 || this.colors[0] === '240, 7%, 97%') {
      // 初回呼び出しで色が指定されない場合、または既存の色がデフォルトの場合にデフォルトを設定
      this.colors = ['240, 7%, 97%'];
    }

    // 色インデックスを均等に割り当ててシャッフル
    const total = this.cols * this.rows;
    const colorIndices = Array.from(
      { length: total },
      (_, i) => i % this.colors.length,
    );
    for (let i = colorIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colorIndices[i], colorIndices[j]] = [colorIndices[j], colorIndices[i]];
    }
    let idx = 0;
    this.grid = Array.from({ length: this.cols }, () =>
      Array.from({ length: this.rows }, () => {
        const colorIndex = colorIndices[idx++];
        return {
          active: Math.random() < 0.5,
          alpha: this.MIN_ALPHA,
          pulsePhase: Math.random() * Math.PI * 2, // 非同期的なアニメーションのために
          colorIndex,
        };
      }),
    );

    // 初期描画
    this.drawGrid();
  };

  /**
   * 脈動アニメーションに基づくセルの目標アルファ値を計算します。
   * @param pulsePhase セルの脈動位相
   * @returns 計算された目標アルファ値（MIN_ALPHAとMAX_ALPHAの間にクランプされる）
   */
  private calculatePulseAlpha = (pulsePhase: number): number => {
    const targetAlpha =
      this.ALPHA_PULSE_OFFSET +
      (this.ALPHA_PULSE_RANGE / 2) * Math.sin(pulsePhase);
    // アルファ値を最小値と最大値の間にクランプ
    return Math.max(this.MIN_ALPHA, Math.min(this.MAX_ALPHA, targetAlpha));
  };

  /**
   * グリッド内の各セルの状態を更新します。
   * これには、アクティブ状態の切り替え、フェードアニメーション、脈動アニメーションが含まれます。
   * @param deltaTime 前のフレームからの経過時間（秒）
   */
  private updateGridLogic = (deltaTime: number): void => {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        const cell = this.grid[i][j];
        // 一定確率でactiveを反転（TOGGLE_CHANCE_PER_SECは1秒あたりの確率）
        if (Math.random() < this.TOGGLE_CHANCE_PER_SEC * deltaTime) {
          cell.active = !cell.active;
        }
        if (cell.active) {
          // activeなセルは脈動アニメーション
          cell.pulsePhase += this.PULSE_SPEED * deltaTime;
          cell.alpha = this.calculatePulseAlpha(cell.pulsePhase);
        } else {
          // 非activeなセルはMIN_ALPHAで固定
          cell.alpha = this.MIN_ALPHA;
        }
      }
    }
  };

  /**
   * グリッドの各セルをキャンバスに描画します。
   */
  private drawGrid = (): void => {
    if (!this.ctx || !this.canvas) {
      console.error('Canvas or context is not available for drawing.');
      return;
    }
    // ここでキャンバスの物理ピクセルサイズに合わせて描画スケールを調整
    this.ctx.save();
    this.ctx.scale(this.dpr, this.dpr);

    this.ctx.clearRect(
      0,
      0,
      this.canvas.width / this.dpr,
      this.canvas.height / this.dpr,
    );

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        const cell = this.grid[i][j];
        const color = this.colors[cell.colorIndex];
        let fillStyle: string;
        if (color.startsWith('#')) {
          // Hexカラーの場合はalphaを乗算してrgbaに変換
          // 3桁/6桁/8桁対応
          if (color.length === 4) {
            // #rgb → #rrggbb
            const r = parseInt(color[1] + color[1], 16);
            const g = parseInt(color[2] + color[2], 16);
            const b = parseInt(color[3] + color[3], 16);
            fillStyle = `rgba(${r},${g},${b},${cell.alpha})`;
          } else if (color.length === 7) {
            // #rrggbb
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            fillStyle = `rgba(${r},${g},${b},${cell.alpha})`;
          } else if (color.length === 9) {
            // #rrggbbaa
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            const a = (parseInt(color.slice(7, 9), 16) / 255) * cell.alpha;
            fillStyle = `rgba(${r},${g},${b},${a})`;
          } else {
            fillStyle = color; // 不明な形式はそのまま
          }
        } else {
          // HSL形式（カンマ区切りの値）として扱う
          fillStyle = `hsla(${color}, ${cell.alpha})`;
        }
        this.ctx.fillStyle = fillStyle;

        this.ctx.fillRect(
          i * this.CELL_TOTAL_SIZE_PX,
          j * this.CELL_TOTAL_SIZE_PX,
          this.SQUARE_SIZE_PX,
          this.SQUARE_SIZE_PX,
        );
      }
    }
    this.ctx.restore();
  };

  /**
   * requestAnimationFrame に渡すコールバック関数
   * 自動的に「現在の高精度タイムスタンプ（currentTime）」を引数として受け取る
   * @param currentTime 現在のタイムスタンプ
   */
  private renderLoop = (currentTime: DOMHighResTimeStamp): void => {
    // 最初のフレームでは lastUpdateTime を現在のタイムスタンプで初期化
    if (this.lastUpdateTime === 0) {
      this.lastUpdateTime = currentTime;
    }

    // 前のフレームからの経過時間を計算（秒単位へ換算）
    const deltaTime = (currentTime - this.lastUpdateTime) / 1000;
    this.lastUpdateTime = currentTime;

    // グリッドの状態を更新
    this.updateGridLogic(deltaTime);
    // グリッドを描画
    this.drawGrid();

    // 次のフレームをリクエスト
    this.animationFrameId = self.requestAnimationFrame(this.renderLoop);
  };

  // --- Animation Start ---
  public start = (): void => {
    if (this.animationFrameId) {
      this.stop(); // 既にアニメーションが開始している場合は一度停止
    }
    this.lastUpdateTime = 0; // 経過時間計算のためにタイムスタンプをリセット
    this.animationFrameId = self.requestAnimationFrame(this.renderLoop); // アニメーションループを開始
  };

  // --- Animation Stop ---
  public stop = (): void => {
    if (this.animationFrameId) {
      self.cancelAnimationFrame(this.animationFrameId); // アニメーションフレームのキャンセル
      this.animationFrameId = 0; // IDをリセット
    }
  };
}

export { GridCellAnimator };
