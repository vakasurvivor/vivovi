import Footer from '@/components/footer';
import Header from '@/components/header';
import type { Metadata } from 'next';
import { ThemeProvider } from './theme-provider';
// css
import '@/styles/globals.css';
// font
import { commitMono, crazyMetro, inter, notoSansJP } from '@/libs/font';
import 'yakuhanjp/dist/css/yakuhanjp_s.css';
import { ScrollbarWidthProvider } from './scrollbar-width-provider';

export const metadata: Metadata = {
  title: {
    template: '%s | VIVOVI',
    default: 'VIVOVI', // a default is required when creating a template
  },
  description:
    'VIVOVI - 備忘録、それとも忘備録。WEBを中心とした技術ブログです。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="ja"
      className={`scroll-smooth ${inter.variable} ${notoSansJP.variable} ${commitMono.variable} ${crazyMetro.variable}`}
    >
      <body
        className={'min-h-dvh w-full bg-background font-sans text-foreground'}
      >
        <ThemeProvider
          themes={['light', 'dark']}
          defaultTheme="dark"
          enableSystem={false}
          // テーマ切り替え時にすべての「CSS transition」を無効にする
          disableTransitionOnChange
          attribute="class"
          storageKey="acme-theme"
        >
          <ScrollbarWidthProvider>
            <Header className="fixed left-0 top-0 z-50" />
            {children}
            <Footer />
          </ScrollbarWidthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
