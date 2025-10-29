'use client';

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from 'next-themes';
import { usePathname } from 'next/navigation';

const FORCED_DARK_ROUTES = ['/', '/blog'];
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const pathname = usePathname();
  const forcedTheme = FORCED_DARK_ROUTES.includes(pathname)
    ? 'dark'
    : undefined;

  return (
    <NextThemesProvider
      storageKey="vivovi-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={true}
      attribute="class"
      forcedTheme={forcedTheme}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
