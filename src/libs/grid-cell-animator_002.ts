type GridCell = {
  active: boolean;
  alpha: number;
  pulsePhase: number;
  colorIndex: number;
};

// --- GridModel.ts ---

class GridModel {
  public grid: GridCell[][] = [];
  public cols = 0;
  public rows = 0;

  private readonly MIN_ALPHA = 0.1;
  private readonly MAX_ALPHA = 0.65;
  private readonly ALPHA_PULSE_RANGE = this.MAX_ALPHA - this.MIN_ALPHA;
  private readonly ALPHA_PULSE_OFFSET =
    this.MIN_ALPHA + this.ALPHA_PULSE_RANGE / 2;
  private readonly PULSE_SPEED = 1;
  private readonly TOGGLE_CHANCE_PER_SEC = 0.2;

  constructor(
    private width: number,
    private height: number,
    private cellSize: number,
    private spacing: number,
    public colors: string[],
  ) {
    this.init();
  }

  public init() {
    const totalCellSize = this.cellSize + this.spacing;
    this.cols = Math.floor(this.width / totalCellSize);
    this.rows = Math.floor(this.height / totalCellSize);

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
          pulsePhase: Math.random() * Math.PI * 2,
          colorIndex,
        };
      }),
    );
  }

  private calculatePulseAlpha(phase: number): number {
    const val =
      this.ALPHA_PULSE_OFFSET + (this.ALPHA_PULSE_RANGE / 2) * Math.sin(phase);
    return Math.max(this.MIN_ALPHA, Math.min(this.MAX_ALPHA, val));
  }

  public update(deltaTime: number): void {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        const cell = this.grid[i][j];
        if (Math.random() < this.TOGGLE_CHANCE_PER_SEC * deltaTime) {
          cell.active = !cell.active;
        }
        if (cell.active) {
          cell.pulsePhase += this.PULSE_SPEED * deltaTime;
          cell.alpha = this.calculatePulseAlpha(cell.pulsePhase);
        } else {
          cell.alpha = this.MIN_ALPHA;
        }
      }
    }
  }
}

// --- GridRenderer.ts ---

class GridRenderer {
  constructor(
    private ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
    private dpr: number,
    private colors: string[],
    private cellSize: number,
    private spacing: number,
  ) {}

  public draw(grid: GridCell[][]): void {
    const totalSize = this.cellSize + this.spacing;
    this.ctx.save();
    this.ctx.scale(this.dpr, this.dpr);
    this.ctx.clearRect(
      0,
      0,
      this.ctx.canvas.width / this.dpr,
      this.ctx.canvas.height / this.dpr,
    );

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        const cell = grid[i][j];
        const color = this.colors[cell.colorIndex];
        let fillStyle: string;
        if (color.startsWith('#')) {
          if (color.length === 4) {
            const r = parseInt(color[1] + color[1], 16);
            const g = parseInt(color[2] + color[2], 16);
            const b = parseInt(color[3] + color[3], 16);
            fillStyle = `rgba(${r},${g},${b},${cell.alpha})`;
          } else if (color.length === 7) {
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            fillStyle = `rgba(${r},${g},${b},${cell.alpha})`;
          } else if (color.length === 9) {
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            const a = (parseInt(color.slice(7, 9), 16) / 255) * cell.alpha;
            fillStyle = `rgba(${r},${g},${b},${a})`;
          } else {
            fillStyle = color;
          }
        } else {
          fillStyle = `hsla(${color}, ${cell.alpha})`;
        }
        this.ctx.fillStyle = fillStyle;
        this.ctx.fillRect(
          i * totalSize,
          j * totalSize,
          this.cellSize,
          this.cellSize,
        );
      }
    }
    this.ctx.restore();
  }
}

// --- Animator.ts ---
class Animator {
  private frameId = 0;
  private lastTime = 0;
  private running = false;
  private tickFn: ((dt: number) => void) | null = null;

  public start(tick: (dt: number) => void): void {
    this.tickFn = tick;
    if (this.running) this.stop();
    this.running = true;
    this.lastTime = 0;
    const loop = (time: number) => {
      if (!this.running || !this.tickFn) return;
      if (this.lastTime === 0) this.lastTime = time;
      const dt = (time - this.lastTime) / 1000;
      this.lastTime = time;
      this.tickFn(dt);
      this.frameId = requestAnimationFrame(loop);
    };
    this.frameId = requestAnimationFrame(loop);
  }

  public stop(): void {
    cancelAnimationFrame(this.frameId);
    this.running = false;
    this.tickFn = null;
  }
}

// --- index.ts ---

export class GridController {
  private model!: GridModel;
  private renderer!: GridRenderer;
  private animator = new Animator();

  init(
    canvas: HTMLCanvasElement | OffscreenCanvas,
    width: number,
    height: number,
    dpr: number,
    colors: string[] = ['240, 7%, 97%'],
  ): void {
    const ctx = canvas.getContext('2d') as
      | CanvasRenderingContext2D
      | OffscreenCanvasRenderingContext2D;
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    this.model = new GridModel(width * dpr, height * dpr, 1, 3, colors);
    this.renderer = new GridRenderer(ctx, dpr, this.model.colors, 1, 3);
  }

  start(): void {
    this.animator.start(dt => {
      this.model.update(dt);
      this.renderer.draw(this.model.grid);
    });
  }

  stop(): void {
    this.animator.stop();
  }
}
