'use client';

import { cn } from '@/utils';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { forwardRef } from 'react';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, forcedTheme, resolvedTheme, systemTheme, themes, setTheme } =
    useTheme();

  // console.group('🎨 Next Theme State');
  // console.log(`theme: ${theme}`);
  // console.log(`resolvedTheme: ${resolvedTheme}`);
  // console.log(`systemTheme: ${systemTheme}`);
  // console.log(`forcedTheme: ${forcedTheme}`);
  // console.log(`themes: ${themes}`);
  // console.groupEnd();

  const handleToggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  if (forcedTheme) {
    return null;
  }

  return (
    <Switch
      checked={resolvedTheme === 'dark'}
      onCheckedChange={handleToggleTheme}
      className={cn(className)}
    />
  );
}

const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  return (
    <SwitchPrimitives.Root
      className={cn(
        'peer inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full',
        'border-2 border-transparent',
        'transition-all duration-300 hover:[&_svg]:stroke-blue-600 dark:hover:[&_svg]:stroke-blue-300',
        'data-[state=checked]:bg-muted data-[state=unchecked]:bg-input',
        'focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-hidden',
        'focus-visible:ring-offset-background focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'drop-shadow-none',
        'hover:drop-shadow-[0_0_.5rem_rgba(29,78,216,.75)]',
        className,
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'bg-background pointer-events-none relative block size-5 rounded-full shadow-lg',
          'data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
        )}
      >
        <Sun
          className="absolute inset-0 m-auto size-4 scale-100 transition-colors dark:scale-0"
          strokeWidth="1.5px"
        />
        <Moon
          className="absolute inset-0 m-auto size-4 scale-0 transition-colors dark:scale-100"
          strokeWidth="1.5px"
        />
        <span className="sr-only">toggle theme icon</span>
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = 'Switch';
