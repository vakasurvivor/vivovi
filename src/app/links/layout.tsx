import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import type { Metadata } from 'next';
import LinksSidebar from './_components/links-sidebar';

export const metadata: Metadata = {
  title: 'Links',
  description:
    'VIVOVI - 備忘録、それとも忘備録。WEB制作・開発を中心とした技術ブログです。',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative mt-16 grid place-items-center px-8 max-sm:px-4">
      <SidebarProvider
        className="h-[80svh] min-h-0 max-w-screen-lg rounded-lg border border-border/40 shadow-md"
        style={
          {
            '--sidebar-width': '12rem',
            '--sidebar-width-mobile': '8rem',
          } as React.CSSProperties
        }
      >
        <LinksSidebar />
        <div className="w-full overflow-y-scroll bg-shiki-background p-4">
          <SidebarTrigger />
          {children}
        </div>
      </SidebarProvider>
    </main>
  );
}
