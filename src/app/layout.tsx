import Footer from '@/components/footer';
import Header from '@/components/header';
import { commitMono, crazyMetro, inter, notoSansJP } from '@/lib/font';
import '@/styles/globals.css';
import { getBaseURL } from '@/utils/get-base-url';
import type { Metadata } from 'next';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import 'yakuhanjp/dist/css/yakuhanjp_s.css';
import { ScrollProvider } from './(top)/scroll-provider';
import { ScrollbarWidthProvider } from './(top)/scrollbar-width-provider';
import { TanstackQueryProvider } from './(top)/tanstack-query-provider';
import { ThemeProvider } from './(top)/theme-provider';

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    template: '%s | VIVOVI',
    default: 'VIVOVI',
  },
  description:
    'Frontend Tech Blog - 忘却に抗うための備忘録です･･･ん？忘備録か？',
  icons: {
    icon: [
      // Default favicons (fallback)
      {
        type: 'image/x-icon',
        url: '/favicon_light_mode.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        type: 'image/x-icon',
        url: '/favicon_dark_mode.ico',
        media: '(prefers-color-scheme: dark)',
      },
      // Default favicons (fallback)
      {
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon_32x32_light_mode.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon_32x32_dark_mode.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon_16x16_light_mode.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon_16x16_dark_mode.svg',
        media: '(prefers-color-scheme: dark)',
      },
      // svg
      {
        type: 'image/svg+xml',
        sizes: 'any',
        url: '/vivovi_logo_light_mode.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        type: 'image/svg+xml',
        sizes: 'any',
        url: '/vivovi_logo_dark_mode.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],

    // Apple
    apple: [
      { type: 'image/png', sizes: '180x180', url: '/apple-touch-icon.png' },
    ],

    // Android and PWA
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/web-app-manifest-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/web-app-manifest-512x512.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`scroll-smooth ${inter.variable} ${notoSansJP.variable} ${commitMono.variable} ${crazyMetro.variable}`}
    >
      <body
        className={'bg-background text-foreground min-h-dvh w-full font-sans'}
      >
        <TanstackQueryProvider>
          <ThemeProvider>
            <NuqsAdapter>
              <ScrollProvider>
                <ScrollbarWidthProvider>
                  <Header className="sticky top-0 left-0 z-100" />
                  {/* <VivoviLogo /> */}
                  {children}
                  <Footer className="sticky top-full" />
                </ScrollbarWidthProvider>
              </ScrollProvider>
            </NuqsAdapter>
          </ThemeProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
