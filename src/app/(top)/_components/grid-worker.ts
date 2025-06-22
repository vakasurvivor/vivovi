class GridAnimator {
  private canvas: OffscreenCanvas | null = null;
  private ctx: OffscreenCanvasRenderingContext2D | null = null;
  private dpr: number = 1;

  // 定数を直接初期化
  private readonly SQUARE_SIZE: number = 1;
  private readonly SPACING: number = 3;
  private readonly CELL_SIZE: number = this.SQUARE_SIZE + this.SPACING;
  private readonly MIN_ALPHA: number = 0.1;
  private readonly MAX_ALPHA: number = 0.4;
  private readonly PULSE_SPEED: number = 0.1;
  private readonly TOGGLE_CHANCE_PER_SEC: number = 0.001;
  private readonly ALPHA_RANGE: number = this.MAX_ALPHA - this.MIN_ALPHA;
  private readonly ALPHA_OFFSET: number = this.MIN_ALPHA + this.ALPHA_RANGE / 2;

  // アルファ値の遷移速度を制御する係数
  private readonly ALPHA_TRANSITION_FACTOR: number = 5; // 値を大きくすると遷移が速くなる

  private cols: number = 0;
  private rows: number = 0;

  private grid: {
    active: boolean;
    alpha: number; // 現在の描画用アルファ値
    pulsePhase: number;
  }[][] = [];

  private animationFrameId: number = 0;
  private lastUpdateTime: DOMHighResTimeStamp = 0;

  constructor(offscreenCanvas: OffscreenCanvas) {
    this.canvas = offscreenCanvas;
    this.ctx = this.canvas.getContext('2d');
  }

  public init = (width: number, height: number, dpr: number): void => {
    if (!this.canvas || !this.ctx) return;

    this.dpr = dpr;
    this.canvas.width = width * this.dpr;
    this.canvas.height = height * this.dpr;

    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(this.dpr, this.dpr);

    this.cols = Math.floor(width / this.CELL_SIZE);
    this.rows = Math.floor(height / this.CELL_SIZE);

    this.grid = Array.from({ length: this.cols }, () =>
      Array.from({ length: this.rows }, () => ({
        active: Math.random() < 0.5,
        alpha: 0,
        pulsePhase: Math.random() * Math.PI * 2,
      })),
    );

    this.drawGrid();
  };

  /**
   * 線形補間ヘルパー関数
   * @param start - 開始値
   * @param end - 終了値
   * @param amount - 補間量 (0.0 から 1.0)
   * @returns 補間された値
   */
  private lerp = (start: number, end: number, amount: number): number => {
    return start * (1 - amount) + end * amount;
  };

  /**
   * グリッドの状態を更新します。
   * @param deltaTime - 前のフレームからの経過時間（秒）
   */
  private updateGridLogic = (deltaTime: number): void => {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        const cell = this.grid[i][j];

        // ランダムにセルをアクティブ/非アクティブに切り替える
        if (Math.random() < this.TOGGLE_CHANCE_PER_SEC * deltaTime * 60) {
          cell.active = !cell.active;
        }

        let targetAlpha: number;
        if (cell.active) {
          // アクティブなセルの脈動位相を更新
          cell.pulsePhase += this.PULSE_SPEED * deltaTime;
          // 脈動に基づいた目標アルファ値を計算し、範囲内にクランプ
          targetAlpha =
            this.ALPHA_OFFSET +
            (this.ALPHA_RANGE / 2) * Math.sin(cell.pulsePhase);
          targetAlpha = Math.max(
            this.MIN_ALPHA,
            Math.min(this.MAX_ALPHA, targetAlpha),
          );
        } else {
          // 非アクティブなセルの目標アルファ値は0
          targetAlpha = 0;
        }

        // 現在のアルファ値を目標アルファ値へ滑らかに補間
        cell.alpha = this.lerp(
          cell.alpha,
          targetAlpha,
          this.ALPHA_TRANSITION_FACTOR * deltaTime,
        );

        // 非アクティブ状態へ移行する際、アルファ値が0を下回らないようにする
        if (!cell.active) {
          cell.alpha = Math.max(0, cell.alpha);
        }
      }
    }
  };

  private drawGrid = (): void => {
    if (!this.ctx || !this.canvas) return;

    this.ctx.clearRect(
      0,
      0,
      this.canvas.width / this.dpr,
      this.canvas.height / this.dpr,
    );

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        const cell = this.grid[i][j];
        if (cell.alpha > 0) {
          this.ctx.fillStyle = `hsla(240, 7%, 97%, ${cell.alpha})`;
          this.ctx.fillRect(
            i * this.CELL_SIZE,
            j * this.CELL_SIZE,
            this.SQUARE_SIZE,
            this.SQUARE_SIZE,
          );
        }
      }
    }
  };

  private renderLoop = (currentTime: DOMHighResTimeStamp): void => {
    if (!this.lastUpdateTime) this.lastUpdateTime = currentTime;
    const deltaTime = (currentTime - this.lastUpdateTime) / 1000;
    this.lastUpdateTime = currentTime;

    this.updateGridLogic(deltaTime);
    this.drawGrid();

    this.animationFrameId = self.requestAnimationFrame(this.renderLoop);
  };

  public start = (): void => {
    if (this.animationFrameId) this.stop();
    this.lastUpdateTime = 0;
    this.animationFrameId = self.requestAnimationFrame(this.renderLoop);
  };

  public stop = (): void => {
    if (this.animationFrameId) {
      self.cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = 0;
    }
  };
}

// Worker のメッセージハンドラー
let gridAnimator: GridAnimator | null = null;

self.onmessage = (event: MessageEvent) => {
  const { type, payload } = event.data;

  switch (type) {
    case 'init':
      const { canvas, width, height, dpr } = payload as {
        canvas: OffscreenCanvas;
        width: number;
        height: number;
        dpr: number;
      };

      gridAnimator = gridAnimator || new GridAnimator(canvas);
      gridAnimator.init(width, height, dpr);
      gridAnimator.start();
      break;

    case 'resize':
      const {
        width: resizedWidth,
        height: resizedHeight,
        dpr: resizedDpr,
      } = payload as {
        width: number;
        height: number;
        dpr: number;
      };

      gridAnimator?.stop();
      gridAnimator?.init(resizedWidth, resizedHeight, resizedDpr);
      gridAnimator?.start();
      break;

    case 'stop':
      gridAnimator?.stop();
      break;

    default:
      console.warn('Unknown message type:', type);
  }
};
