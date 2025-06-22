import Footer from '@/components/footer';
import Header from '@/components/header';
import type { Metadata } from 'next';
import { ScrollProvider } from './(top)/scroll-provider';
import { ThemeProvider } from './(top)/theme-provider';
// css
import '@/styles/globals.css';
// font
// import VivoviLogo from '@/components/vivovi-logo';
import { commitMono, crazyMetro, inter, notoSansJP } from '@/libs/font';
import 'yakuhanjp/dist/css/yakuhanjp_s.css';
// import SvgLogoAnimation from './(top)/_components/svg-logo-animation';
import { ScrollbarWidthProvider } from './(top)/scrollbar-width-provider';

export const metadata: Metadata = {
  title: {
    template: '%s | VIVOVI',
    default: 'VIVOVI',
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
      lang="ja"
      suppressHydrationWarning
      className={`scroll-smooth ${inter.variable} ${notoSansJP.variable} ${commitMono.variable} ${crazyMetro.variable}`}
    >
      <body
        className={'bg-background text-foreground min-h-dvh w-full font-sans'}
      >
        <ThemeProvider
          themes={['light', 'dark']}
          defaultTheme="dark"
          enableSystem={false}
          // 切り替え時にすべての「CSS transition」を無効にする
          disableTransitionOnChange={true}
          attribute="class"
          storageKey="acme-theme"
        >
          <ScrollProvider>
            <ScrollbarWidthProvider>
              <Header className="sticky top-0 left-0 z-100" />
              {/* <VivoviLogo /> */}
              {/* <SvgLogoAnimation /> */}
              {children}
              <Footer className="sticky top-full" />
            </ScrollbarWidthProvider>
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
