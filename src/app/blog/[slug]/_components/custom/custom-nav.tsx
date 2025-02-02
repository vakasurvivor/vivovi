'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useMatchMedia } from '@/hooks/use-matchMedia';
import { cn } from '@/utils/cn';
import { TableOfContents } from 'lucide-react';
import { useEffect, useState, type ComponentPropsWithoutRef } from 'react';

interface CustomNavProps extends ComponentPropsWithoutRef<'nav'> {}

export default function CustomNav(props: CustomNavProps) {
  const hasToc = props.className === 'rehype-toc';

  const [breakpointXl, setBreakpointMd] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBreakpointMd(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--breakpoint-xl',
        ),
      );
    }
  }, []);

  const isPcSize = useMatchMedia(`(width >= ${breakpointXl})`);
  if (hasToc) {
    return (
      <Accordion
        type="single"
        defaultValue={isPcSize ? undefined : 'toc'}
        collapsible
        className="fixed-toc border-border/40 bg-shiki-light-bg dark:bg-shiki-dark-bg overflow-hidden rounded-lg border shadow-md"
      >
        <AccordionItem value="toc" className="border-none [&>h3]:my-0">
          <AccordionTrigger className="py-2 pr-2 hover:no-underline">
            <div className="flex w-fit items-center gap-1 pl-4">
              <TableOfContents size={20} strokeWidth={2} />
              <span className="text-base">目次を読む</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="border-border/40 border-t pb-0">
            <nav
              className={cn(
                props.className,
                'bg-shiki-light-bg dark:bg-shiki-dark-bg relative my-0 px-2',
                'tracking-wider [font-feature-settings:"palt"]',
              )}
            >
              {props.children}
            </nav>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
  return <nav {...props} />;
}
