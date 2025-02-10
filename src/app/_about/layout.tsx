import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'VIVOVI - 備忘録、それとも忘備録。WEB制作・開発を中心とした技術ブログです。',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mt-4 px-8 max-md:px-6 max-sm:px-4">{children}</main>;
}
