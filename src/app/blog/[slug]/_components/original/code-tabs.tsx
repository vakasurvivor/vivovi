import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/utils/cn';
import { getSvgIconCdnUrl } from '@/utils/get-svg-icon';
import Image from 'next/image';

import {
  type ReactElement,
  type ReactNode,
  Children,
  cloneElement,
  isValidElement,
} from 'react';

export default function CodeTabs({ children }: { children: ReactNode }) {
  const childrenInfo = getChildrenInfo(children);

  return (
    <Tabs defaultValue="1" className="relative w-full shadow-md">
      <TabsList
        className={cn(
          'absolute top-0 left-0 z-30',
          'h-11 w-full overflow-hidden px-0',
          'rounded-none rounded-t-lg',
          'justify-start',
          'bg-shiki-background',
          'border-foreground/5 border border-b-0',
        )}
      >
        <div className="flex">
          {childrenInfo.map((child, index) => (
            <TabsTrigger
              key={index}
              className={cn(
                ['flex items-center gap-2'],
                ['h-11 rounded-none pr-0 pl-4'],
                ['opacity-50', 'data-[state=active]:opacity-100'],
                ['data-[state=active]:bg-shiki-background'],
              )}
              value={String(index + 1)}
            >
              <Image
                unoptimized
                height={20}
                width={20}
                src={`${child.cdnUrl}`}
                alt={'Programming Language Logo'}
                className="m-0"
              />

              <h5 className="font-inter text-foreground text-sm leading-snug">
                {child.title}
              </h5>
            </TabsTrigger>
          ))}
        </div>
      </TabsList>

      {Children.map(children, (child, index) => (
        <TabsContent key={index} value={String(index + 1)}>
          {cloneElement(child as ReactElement, { key: index })}
        </TabsContent>
      ))}
    </Tabs>
  );
}

interface ChildrenInfo {
  title: string;
  cdnUrl: string;
}

function getChildrenInfo(children: ReactNode): ChildrenInfo[] {
  const childrenArray = Children.toArray(children).filter(
    (child): child is ReactElement<any, any> => isValidElement(child),
  );

  function getChildProps(
    children: ReactNode,
    typeName: string,
  ): Record<string, any> | undefined {
    const matched = (
      Children.toArray(children).filter(isValidElement) as ReactElement[]
    ).find(
      element =>
        typeof element.type !== 'string' && element.type.name === typeName,
    );

    return matched?.props as Record<string, any>;
  }

  return childrenArray.map(child => {
    const { props } = child;
    const customDivProps = getChildProps(props.children, 'CustomDiv');
    const customFigcaptionProps = getChildProps(
      props.children,
      'CustomFigcaption',
    );

    if (customDivProps) {
      const extension = customFigcaptionProps?.children;
      const cdnUrl = getSvgIconCdnUrl(extension);
      return { title: customDivProps.children as string, cdnUrl };
    } else {
      const language = customFigcaptionProps?.['data-language'];
      const cdnUrl = getSvgIconCdnUrl(language);
      return { title: customFigcaptionProps?.children as string, cdnUrl };
    }
  });
}
