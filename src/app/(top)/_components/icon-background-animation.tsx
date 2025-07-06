'use client';

import { useGridCellAnimation } from '@/hooks/use-grid-cell-animation';
import { cn } from '@/utils/cn';
import { motion } from 'motion/react';
import { useRef } from 'react';

export default function IconBackgroundAnimation({
  className,
  canvasCellColors = ['hsl(240, 7%, 97%)'],
}: {
  className?: string;
  canvasCellColors?: string[];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGridCellAnimation(canvasRef, containerRef, canvasCellColors);

  return (
    <motion.div
      className={cn(
        'absolute inset-[2px] -z-20 m-auto overflow-hidden',
        className,
      )}
      ref={containerRef}
      key="icon-bg"
      initial={{ opacity: 0, borderRadius: '100%' }}
      animate={{
        opacity: 1,
        borderRadius: '0%',
        transition: { duration: 0.4, delay: 0.2, ease: 'easeOut' },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        },
      }}
    >
      <canvas ref={canvasRef} className="block size-full" />
    </motion.div>
  );
}
