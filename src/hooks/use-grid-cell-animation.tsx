import { GridCellAnimator } from '@/lib/grid-cell-animator';
import { debounce } from 'es-toolkit';
import { type RefObject, useEffect } from 'react';

export function useGridCellAnimation(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  containerRef: RefObject<HTMLElement | null>,
  gridCellColors: string[] = ['hsl(240, 7%, 97%)'],
) {
  useEffect(() => {
    const canvasEl = canvasRef.current;
    const containerEl = containerRef.current;

    if (!canvasEl || !containerEl) return;

    let cleanup: (() => void) | undefined;

    // 開発環境では React.StrictMode を考慮して CanvasRenderingContext2D を優先する
    if (
      process.env.NODE_ENV === 'development' ||
      typeof canvasEl.transferControlToOffscreen !== 'function'
    ) {
      cleanup = canvasGridCellAnimation({
        canvasEl,
        containerEl,
        gridCellColors,
      });
    } else {
      // 本番環境では、描画効率を考慮して OffscreenCanvasRenderingContext2D に積極的に切り替える
      cleanup = offscreenCanvasGridCellAnimation({
        canvasEl,
        containerEl,
        gridCellColors,
      });
    }

    return () => {
      cleanup?.();
    };
  }, [canvasRef, containerRef, gridCellColors]);
}

type GridCellAnimationProps = {
  canvasEl: HTMLCanvasElement;
  containerEl: HTMLElement;
  gridCellColors: string[];
};

/**
 * CanvasRenderingContext2D を活用して、アニメーションを初期化・制御する関数。
 */
function canvasGridCellAnimation({
  canvasEl,
  containerEl,
  gridCellColors,
}: GridCellAnimationProps) {
  const { width, height } = containerEl.getBoundingClientRect();
  const getDpr = () => window.devicePixelRatio || 1;

  const animator = new GridCellAnimator(canvasEl);
  animator.init(width, height, getDpr(), gridCellColors);
  animator.start();

  const handleResize = debounce((entry: ResizeObserverEntry) => {
    const { width, height } = entry.contentRect;
    animator.stop();
    animator.init(width, height, getDpr(), gridCellColors);
    animator.start();
  }, 100);

  const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
      handleResize(entry);
    }
  });

  resizeObserver.observe(containerEl);

  return () => {
    resizeObserver.disconnect();
    animator.stop();
  };
}

/**
 * Web Worker API + OffscreenCanvasRenderingContext2D を活用して、アニメーションを初期化・制御する関数。
 * メインスレッドからアニメーションの描画処理を切り離すことで、本番環境でのパフォーマンス向上を狙います。
 */
function offscreenCanvasGridCellAnimation({
  canvasEl,
  containerEl,
  gridCellColors,
}: GridCellAnimationProps) {
  const { width, height } = containerEl.getBoundingClientRect();
  const getDpr = () => window.devicePixelRatio || 1;

  const offscreenCanvas = canvasEl.transferControlToOffscreen();
  const worker = new Worker(
    new URL('../lib/grid-cell-animator-worker.ts', import.meta.url),
    { type: 'module' },
  );

  worker.onerror = err => {
    console.warn('Web Worker API Error:', err);
    canvasGridCellAnimation({ canvasEl, containerEl, gridCellColors });
  };

  worker.postMessage(
    {
      type: 'init',
      payload: {
        canvas: offscreenCanvas,
        width,
        height,
        dpr: getDpr(),
        colors: gridCellColors,
      },
    },
    [offscreenCanvas],
  );

  const handleResize = debounce((entry: ResizeObserverEntry) => {
    const { width, height } = entry.contentRect;
    worker.postMessage({
      type: 'resize',
      payload: { width, height, dpr: getDpr() },
    });
  }, 100);

  const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
      handleResize(entry);
    }
  });

  resizeObserver.observe(containerEl);

  return () => {
    resizeObserver.disconnect();
    worker.postMessage({ type: 'stop' });
    worker.terminate();
  };
}
