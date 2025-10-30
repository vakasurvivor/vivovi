import { GridCellAnimator } from './grid-cell-animator';

// GridAnimator のインスタンスを保持する変数
let gridAnimator: GridCellAnimator | null = null;

self.onmessage = (event: MessageEvent) => {
  const { type, payload } = event.data;

  switch (type) {
    case 'init':
      const { canvas, width, height, dpr, colors } = payload as {
        canvas: OffscreenCanvas;
        width: number;
        height: number;
        dpr: number;
        colors?: string[];
      };

      // GridAnimator のインスタンスがなければ新しく作成
      gridAnimator = gridAnimator || new GridCellAnimator(canvas);
      gridAnimator.init(width, height, dpr, colors);
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
      gridAnimator?.init(
        resizedWidth,
        resizedHeight,
        resizedDpr,
        gridAnimator.colors,
      );
      gridAnimator?.start();
      break;

    case 'stop':
      gridAnimator?.stop();
      break;

    default:
      console.warn('Unknown message type:', type, 'with payload:', payload);
  }
};
