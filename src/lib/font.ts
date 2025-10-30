import { Inter, Noto_Sans_JP } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

const commitMono = localFont({
  src: '../../public/font/CommitMono-VariableFont.woff2',
  display: 'swap',
  variable: '--font-commit-mono',
});

const crazyMetro = localFont({
  src: '../../public/font/crazy-metro.otf',
  display: 'swap',
  variable: '--font-crazy-metro',
});

export { commitMono, crazyMetro, inter, notoSansJP };
