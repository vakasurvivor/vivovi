'use client';

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from 'next-themes';

/**
 * `next-themes` の ThemeProvider をラップしたカスタム ThemeProvider コンポーネントです。
 * このコンポーネントはアプリケーションに配色コンテキストを提供するために使用されます。
 *
 * @param {ThemeProviderProps} props
 *   - ThemeProvider のプロパティ。以下を含みます:
 *   - `children`: 配色コンテキストにアクセスできる子コンポーネント。
 *   - その他の `next-themes` ThemeProvider に渡されるプロパティ。
 *
 * @returns {JSX.Element} children に配色コンテキストを提供する JSX 要素。
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
