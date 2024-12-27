import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/utils/cn';
import { getSvgIconCdnUrl } from '@/utils/get-svg-icon';
import Image from 'next/image';
import React, { Children } from 'react';

interface CustomTabProps {
  children: React.ReactNode;
}
export default function CodeTabs({ children }: CustomTabProps) {
  const childrenInfo = getChildrenInfo(children);

  return (
    <Tabs defaultValue="1" className="relative w-full shadow-md">
      <TabsList
        className={cn(
          'absolute left-0 top-0 z-30',
          'h-11 w-full overflow-hidden px-0',
          'rounded-none rounded-t-lg',
          'justify-start',
          'bg-shiki-light-bg dark:bg-shiki-dark-bg',
          'border border-b-0 border-foreground/5',
        )}
      >
        <div className="flex">
          {childrenInfo.map((child, index) => (
            <TabsTrigger
              key={index}
              className={cn(
                ['flex items-center gap-2'],
                ['h-11 rounded-none pl-4 pr-0'],
                ['opacity-50', 'data-[state=active]:opacity-100'],
                [
                  'data-[state=active]:bg-shiki-light-bg',
                  'dark:data-[state=active]:bg-shiki-dark-bg',
                ],
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

              <h5 className="font-inter text-sm leading-snug text-foreground">
                {child.title}
              </h5>
            </TabsTrigger>
          ))}
        </div>
      </TabsList>

      {Children.map(children, (child, index) => (
        <TabsContent key={index} value={String(index + 1)}>
          {child}
        </TabsContent>
      ))}
    </Tabs>
  );
}

interface ChildrenInfo {
  title: string;
  cdnUrl: string;
}

// 各子要素の情報を取得する関数
function getChildrenInfo(children: React.ReactNode): ChildrenInfo[] {
  const childrenArray = React.Children.toArray(children);

  // 子要素のpropsを取得する関数
  function getChildProps(children: React.ReactNode, typeName: string) {
    return (React.Children.toArray(children) as React.ReactElement[]).find(
      element =>
        typeof element.type !== 'string' && element.type.name === typeName,
    )?.props;
  }

  return childrenArray.map(child => {
    const { props } = child as React.ReactElement;
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
      return { title: customFigcaptionProps.children as string, cdnUrl };
    }
  });
}
