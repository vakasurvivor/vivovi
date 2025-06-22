'use client';

import { cn } from '@/utils/cn';
import { useEffect, useRef } from 'react';

export default function Title({
  className,
  subTitle,
  children,
}: {
  className?: string;
  subTitle?: string;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    workerRef.current = new Worker(
      new URL('./grid-worker.ts', import.meta.url),
      {
        type: 'module',
      },
    );

    const worker = workerRef.current;
    const offscreenCanvas = canvasRef.current.transferControlToOffscreen();
    const { width, height } = containerRef.current.getBoundingClientRect();

    worker.postMessage(
      {
        type: 'init',
        payload: {
          canvas: offscreenCanvas,
          width,
          height,
          dpr: window.devicePixelRatio || 1,
        },
      },
      [offscreenCanvas],
    );

    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.target === containerRef.current) {
          const { width, height } = entry.contentRect;
          worker.postMessage({
            type: 'resize',
            payload: {
              width: width,
              height: height,
              dpr: window.devicePixelRatio || 1,
            },
          });
        }
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      if (worker) {
        worker.postMessage({ type: 'stop' });
        worker.terminate();
      }
      workerRef.current = null;
    };
  }, []);

  return (
    <div className={cn('', className)}>
      <div
        ref={containerRef}
        className="relative border-y [border-image:linear-gradient(to_right,_color-mix(in_oklab,_var(--color-border)_14%,_transparent),_transparent)_1]"
      >
        <canvas ref={canvasRef} className="absolute -z-1 block size-full" />
        <h2
          className={cn(
            'text-foreground/90 @container relative py-3 pl-3 text-3xl font-medium',
            'before:absolute before:-z-1 before:inline-block before:content-[attr(data-label)]',
            'before:pointer-events-none before:top-0 before:left-0 before:-translate-y-full before:opacity-1',
            'before:to-foreground before:from-foreground/30 before:bg-gradient-to-r before:bg-clip-text',
            'before:text-[10.5cqi] before:text-nowrap before:text-transparent',
          )}
          data-label={subTitle}
        >
          {children}
        </h2>
      </div>
    </div>
  );
}

function e({
  className,
  subTitle,
  children,
}: {
  className?: string;
  subTitle?: string;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const SQUARE_SIZE = 1;
    const SPACING = 3;
    const CELL_SIZE = SQUARE_SIZE + SPACING;
    const MIN_ALPHA = 0.1;
    const MAX_ALPHA = 0.2;
    const PULSE_SPEED = 0.1;
    const TOGGLE_CHANCE_PER_SEC = 0.001;
    const ALPHA_RANGE = MAX_ALPHA - MIN_ALPHA;
    const ALPHA_OFFSET = MIN_ALPHA + ALPHA_RANGE / 2;

    let cols: number, rows: number;
    let grid: {
      active: boolean;
      alpha: number;
      pulsePhase: number;
    }[][] = [];

    let lastTime = 0;
    let animationFrameId: number;

    function initializeGridAndCanvas() {
      if (!canvas || !container) return;
      if (!ctx) return;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      cols = Math.floor(rect.width / CELL_SIZE);
      rows = Math.floor(rect.height / CELL_SIZE);

      grid = Array.from({ length: cols }, () =>
        Array.from({ length: rows }, () => ({
          active: Math.random() < 0.5,
          alpha: 0,
          pulsePhase: Math.random() * Math.PI * 2,
        })),
      );
    }

    function drawGrid() {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      if (!ctx) return;
      ctx.clearRect(0, 0, rect.width, rect.height);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const cell = grid[i][j];
          if (cell.alpha > 0) {
            ctx.fillStyle = `hsla(240, 7%, 97%, ${cell.alpha})`;
            ctx.fillRect(
              i * CELL_SIZE,
              j * CELL_SIZE,
              SQUARE_SIZE,
              SQUARE_SIZE,
            );
          }
        }
      }
    }

    function animate(currentTime: number) {
      if (!lastTime) lastTime = currentTime;
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const cell = grid[i][j];
          if (Math.random() < TOGGLE_CHANCE_PER_SEC * deltaTime * 60) {
            cell.active = !cell.active;
          }

          if (cell.active) {
            cell.pulsePhase += PULSE_SPEED * deltaTime;
            cell.alpha =
              ALPHA_OFFSET + (ALPHA_RANGE / 2) * Math.sin(cell.pulsePhase);
            cell.alpha = Math.max(MIN_ALPHA, Math.min(MAX_ALPHA, cell.alpha));
          } else {
            cell.alpha = 0;
          }
        }
      }

      drawGrid();
      animationFrameId = requestAnimationFrame(animate);
    }

    initializeGridAndCanvas();
    animationFrameId = requestAnimationFrame(animate);

    const resizeObserver = new ResizeObserver(() => {
      initializeGridAndCanvas();
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={cn('', className)}>
      <div
        ref={containerRef}
        className="relative border-y [border-image:linear-gradient(to_right,_color-mix(in_oklab,_var(--color-border)_14%,_transparent),_transparent)_1]"
      >
        <canvas ref={canvasRef} className="absolute -z-1 block size-full" />
        <h2
          className={cn(
            'text-foreground/90 @container relative py-3 pl-3 text-3xl font-medium',
            'before:absolute before:-z-1 before:inline-block before:content-[attr(data-label)]',
            'before:pointer-events-none before:top-0 before:left-0 before:-translate-y-full before:opacity-1',
            'before:to-foreground before:from-foreground/30 before:bg-gradient-to-r before:bg-clip-text',
            'before:text-[10.5cqi] before:text-nowrap before:text-transparent',
          )}
          data-label={subTitle}
        >
          {children}
        </h2>
      </div>
    </div>
  );
}
