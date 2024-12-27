'use client';

import tailwindConfig from '@/../tailwind.config';
import { useMatchMedia } from '@/hooks/use-matchMedia';
import { useToc } from '@/hooks/use-toc';
import { cn } from '@/utils/cn';
import { useLayoutEffect, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

interface SideScrollTocProps {
  className?: string;
}

export default function SideScrollToc({ className }: SideScrollTocProps) {
  const fullConfig = resolveConfig(tailwindConfig);
  const isPcSize = useMatchMedia(
    `(width >= ${fullConfig.theme.screens.xl})`,
    true,
  );
  const [visible, setVisible] = useState<boolean>(false);

  const { activeId, headings } = useToc({
    contentId: 'content',
    targetSelectors: 'h2, h3, h4',
    tocContainer: 'content-toc',
  });

  useLayoutEffect(() => {
    // IntersectionObserver WebAPIのブラウザーサポートを確認する
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver is not supported by your browser.');
      return;
    }

    const fixedTocEl = document.querySelector('.fixed-toc');
    const headerEl = document.querySelector('header');
    if (!(fixedTocEl && headerEl)) return;

    // IntersectionObserverに渡すcallback関数
    function intersectionCallback(entries: IntersectionObserverEntry[]) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    }

    // IntersectionObserverに渡すoption設定
    const intersectionOption = {
      root: null,
      rootMargin: `-${headerEl.offsetHeight}px 0px 0px 0px`,
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      intersectionCallback,
      intersectionOption,
    );
    observer.observe(fixedTocEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {isPcSize && (
        <aside className={cn('h-fit overflow-y-auto', className)}>
          <div
            className={cn(
              'mx-auto w-fit max-w-[300px]',
              'visible opacity-100 transition-[visibility,_opacity] duration-300',
              !visible && 'invisible opacity-0',
            )}
          >
            <ol className="relative space-y-4 border-l border-muted-foreground/50 [font-feature-settings:'palt'] dark:border-muted">
              {headings.map(heading => (
                <li
                  key={heading.id}
                  className={cn(
                    'relative w-full justify-start pl-4',
                    'text-sm text-[var(--tw-prose-captions)]',
                    'transition-colors duration-300 hover:text-[var(--tw-prose-body)]',

                    activeId === heading.id &&
                      'text-blue-600 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-500',

                    heading.level === 4 && '!mt-1.5 pl-8',
                  )}
                >
                  <a
                    className={cn(
                      'before:absolute before:content-[""]',
                      'before:left-0 before:-translate-x-1/2 before:rounded-full',
                      'before:bg-muted-foreground before:dark:bg-muted',
                      'before:border-2 before:border-background',
                      'before:transition-colors before:duration-300',

                      heading.level === 3 &&
                        'before:top-[3.5px] before:size-[12px]',

                      heading.level === 4 &&
                        'before:top-[5px] before:size-[9px]',

                      activeId === heading.id &&
                        'before:bg-blue-600 before:dark:bg-blue-500',
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
