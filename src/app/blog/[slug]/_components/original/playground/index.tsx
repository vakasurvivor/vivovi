'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/utils/cn';
import {
  type SandpackProps,
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { githubDarkDefault, githubLightDefault } from './customTheme';

export default function Playground({
  files,
  template = 'vanilla',
  customSetup,
  options,
}: SandpackProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          'flex overflow-hidden rounded-lg shadow-md',
          'mx-[calc(50%-50cqi)]',
          'max-md:mx-0 max-md:flex-col',
        )}
      >
        <Skeleton className="h-[520px] w-full rounded-none border-foreground/5" />
        <Skeleton className="h-[520px] w-full rounded-none border-foreground/5" />
      </div>
    );
  }

  return (
    <SandpackProvider
      theme={theme === 'light' ? githubLightDefault : githubDarkDefault}
      template={template}
      customSetup={customSetup}
      options={{
        classes: {
          'sp-layout': '[--sp-layout-height:520px] !rounded-lg',
          'sp-tab-container': '!outline-none !pr-2 !text-sm',
          'sp-tab-button': '!text-sm',
        },
        ...options,
      }}
      files={files}
      className={cn(
        '!mx-[calc(50%-50cqi)]',
        'max-md:!mx-0',
        '!my-8 !rounded-lg !shadow-md',
      )}
    >
      <SandpackLayout>
        <SandpackCodeEditor showTabs />
        <SandpackPreview showOpenInCodeSandbox={false} showOpenNewtab={false} />
      </SandpackLayout>
    </SandpackProvider>
  );
}
