'use client';

import { cn } from '@/utils/cn';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  className?: string;
}

const disabledRoutes = ['/', '/blog'];

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(resolvedTheme === 'dark');
  const pathname = usePathname();

  const handleToggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (disabledRoutes.includes(pathname) && resolvedTheme !== 'dark') {
      setTheme('dark');
    }
  }, [pathname, resolvedTheme, setTheme]);

  if (disabledRoutes.includes(pathname)) {
    return null;
  }

  return (
    <Switch
      checked={isDark}
      onCheckedChange={handleToggleTheme}
      className={cn(className)}
    />
  );
}

const Switch = React.forwardRef<
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
