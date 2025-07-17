'use client';

import { cn } from '@/utils/cn';
import { Slot } from '@radix-ui/react-slot';
import { AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import IconBackgroundAnimation from './icon-background-animation';
import { icons } from './tech-icons';

export default function TechItems({ className }: { className?: string }) {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div
      className={cn(
        'border-border/10 flex w-full flex-row flex-wrap border-t border-l',
        className,
      )}
    >
      {icons.map(icon => {
        return (
          <div
            key={icon.label}
            className="border-border/10 relative flex-grow basis-[150px] border-r border-b"
            onMouseEnter={() => setHovered(icon.label)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence>
              {hovered === icon.label && (
                <IconBackgroundAnimation canvasCellColors={icon.colors} />
              )}
            </AnimatePresence>
            <div
              className={cn(
                'from-background absolute inset-0 -z-10 bg-gradient-to-t to-[75%] outline outline-transparent transition-colors duration-300',
                hovered === icon.label && 'outline-border/20',
              )}
            ></div>
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  'radial-gradient(42.89% 50% at 50% 50%, hsl(240 7% 5% / 0.8) 8.57%, hsl(240 7% 5% / 0) 100%)',
              }}
            ></div>
            <Link
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex flex-col items-center gap-3 py-16',
                'hover:[&>div]:-translate-y-1/4',
                'hover:[&>div:before]:opacity-100',
                'hover:[&_svg]:fill-current',
              )}
            >
              <div
                data-label={icon.label}
                className={cn(
                  'relative transition-transform duration-300',
                  'before:text-foreground before:absolute before:text-sm before:whitespace-nowrap before:content-[attr(data-label)]',
                  'before:top-full before:left-1/2 before:-translate-x-1/2 before:translate-y-1/2',
                  'before:opacity-0 before:transition-opacity before:delay-50 before:duration-250',
                )}
              >
                <Slot className="size-10 transition-colors duration-300">
                  {icon.icon({ hovered: hovered === icon.label })}
                </Slot>
              </div>
              <span className="sr-only">{icon.label}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
