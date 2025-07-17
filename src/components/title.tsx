'use client';

import { useGridCellAnimation } from '@/hooks/use-grid-cell-animation';
import { cn } from '@/utils/cn';
import { useRef } from 'react';

export default function Title({
  className,
  subTitle,
  canvasCellColors = ['hsl(240, 7%, 97%)'],
  children,
}: {
  className?: string;
  subTitle?: string;
  canvasCellColors?: string[];
  children: React.ReactNode;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGridCellAnimation(canvasRef, containerRef, canvasCellColors);

  return (
    <div className={cn('', className)}>
      <div className="relative border-y [border-image:linear-gradient(to_right,_color-mix(in_oklab,_var(--color-border)_14%,_transparent),_transparent)_1]">
        <div
          ref={containerRef}
          className="absolute inset-x-0 inset-y-[2px] m-auto"
        >
          <canvas ref={canvasRef} className="size-full" />
        </div>
        <div className="from-background absolute inset-0 m-auto bg-gradient-to-t to-[75%]"></div>
        <h2
          className={cn(
            'text-foreground/90 @container relative py-3 pl-3 text-3xl font-medium',
            'before:absolute before:-z-1 before:inline-block before:content-[attr(data-label)]',
            'before:pointer-events-none before:top-0 before:left-0 before:-translate-y-full before:opacity-1',
            'before:to-foreground before:from-foreground/60 before:bg-gradient-to-r before:bg-clip-text',
            'before:text-[min(16cqi,var(--text-8xl))] before:text-nowrap before:text-transparent',
          )}
          data-label={subTitle}
        >
          {children}
        </h2>
      </div>
    </div>
  );
}
