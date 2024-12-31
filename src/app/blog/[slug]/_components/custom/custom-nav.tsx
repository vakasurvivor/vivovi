import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/utils/cn';
import { TableOfContents } from 'lucide-react';
import { type ComponentPropsWithoutRef } from 'react';

interface CustomNavProps extends ComponentPropsWithoutRef<'nav'> {}

export default function CustomNav(props: CustomNavProps) {
  const hasToc = props.className === 'rehype-toc';

  if (hasToc)
    return (
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className="fixed-toc overflow-hidden rounded-lg border border-border/40 bg-shiki-light-bg shadow-md dark:bg-shiki-dark-bg"
      >
        <AccordionItem value="item-1" className="border-none [&>h3]:my-0">
          <AccordionTrigger className="py-2 pr-2 hover:no-underline">
            <div className="flex w-fit items-center gap-1 pl-4">
              <TableOfContents size={20} strokeWidth={2} />
              <span className="text-base">目次を読む</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="border-t border-border/40 pb-0">
            <nav
              className={cn(
                props.className,
                'relative my-0 bg-shiki-light-bg px-2 dark:bg-shiki-dark-bg',
                'tracking-wider [font-feature-settings:"palt"]',
              )}
            >
              {props.children}
            </nav>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );

  return <nav {...props} />;
}
