'use client';

import { useMatchMedia } from '@/hooks/use-matchMedia';
import { useToc } from '@/hooks/use-toc';
import { cn } from '@/utils/cn';
import { useEffect, useLayoutEffect, useState } from 'react';

interface SideScrollTocProps {
  className?: string;
}

export default function SideScrollToc({ className }: SideScrollTocProps) {
  const [breakpointXl, setBreakpointMd] = useState<string | null>(null);

  // CSS変数からブレークポイントを取得するためにuseEffectを使用
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBreakpointMd(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--breakpoint-xl',
        ),
      );
    }
  }, []);

  const isPcSize = useMatchMedia(`(width >= ${breakpointXl}`, true);
  const [visible, setVisible] = useState<boolean>(false);

  const { activeId, headings } = useToc({
    contentId: 'content',
    targetSelectors: 'h3, h4',
    tocContainer: 'content-toc',
  });

  useLayoutEffect(() => {
    // IntersectionObserver WebAPIのブラウザーサポートを確認する
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver is not supported by your browser.');
      return;
    }

    const headerElHeight = document.querySelector('header')?.offsetHeight;
    const accordionTocEl = document.querySelector('.fixed-toc');

    if (headerElHeight !== undefined && accordionTocEl) {
      function callback(entries: IntersectionObserverEntry[]) {
        entries.forEach(entry => {
          // 下方向にスクロールして、監視対象がビューポート上部へ押し出された場合のみ
          if (
            !entry.isIntersecting &&
            entry.boundingClientRect.top < headerElHeight!
          ) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      }

      const option = {
        rootMargin: `-${headerElHeight}px 0px 0px 0px`,
      };

      const observer = new IntersectionObserver(callback, option);
      observer.observe(accordionTocEl);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <>
      {isPcSize && (
        <aside className={cn('h-fit overflow-y-auto', className)}>
          <div
            className={cn(
              'mx-auto w-fit max-w-[300px] transition-[visibility,_opacity] duration-300',
              visible ? 'visible opacity-100' : 'invisible opacity-0',
            )}
          >
            <ol className="border-muted-foreground/50 dark:border-muted relative space-y-4 border-l [font-feature-settings:'palt']">
              {headings.map(heading => (
                <li
                  key={heading.id}
                  className={cn(
                    'relative w-full justify-start pl-4',
                    'text-sm text-[var(--tw-prose-captions)]',
                    'transition-colors duration-300 hover:text-[var(--tw-prose-body)]',

                    activeId === heading.id &&
                      'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500',

                    heading.level === 4 && 'mt-1.5! pl-8',
                  )}
                >
                  <a
                    className={cn(
                      'before:absolute before:content-[""]',
                      'before:left-0 before:-translate-x-1/2 before:rounded-full',
                      'before:bg-muted-foreground dark:before:bg-muted',
                      'before:border-background before:border-2',
                      'before:transition-colors before:duration-300',

                      heading.level === 3 &&
                        'before:top-[3.5px] before:size-[12px]',

                      heading.level === 4 &&
                        'before:top-[5px] before:size-[9px]',

                      activeId === heading.id &&
                        'before:bg-blue-600 dark:before:bg-blue-500',
                    )}
                    href={`#${heading.id}`}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      )}
    </>
  );
}
