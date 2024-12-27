'use client';

// Next.js
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Components
import Nav from './nav';
// utils/hooks
import { useMatchMedia } from '@/hooks/use-matchMedia';
import { cn } from '@/utils/cn';
// Tailwindcss
import tailwindConfig from '@/../tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';
// Animation
import { motion, useScroll, useSpring } from 'motion/react';

export default function Header({ className }: { className: string }) {
  const displayMobile = useMatchMedia(
    `(width < ${resolveConfig(tailwindConfig).theme.screens.md}`,
  );
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
    restDelta: 0.001,
  });

  return (
    <header
      className={cn(
        'w-full bg-background/40',
        'border-b-[1px] border-border/40',
        'font-inter backdrop-blur',
        className,
      )}
    >
      <div
        className={cn(
          'mx-auto px-4',
          'h-14 max-w-screen-lg',
          'flex items-center justify-between',
        )}
      >
        <h1 className="font-bold">
          <Link href="/">VIVOVI</Link>
        </h1>
        <Nav />
      </div>

      {!(usePathname() === '/') && displayMobile && (
        <motion.div
          className={cn(
            'absolute inset-0 top-full origin-left',
            'h-[2px] bg-muted-foreground',
          )}
          style={{
            scaleX,
            translate: '0 -25%',
          }}
        />
      )}
    </header>
  );
}
