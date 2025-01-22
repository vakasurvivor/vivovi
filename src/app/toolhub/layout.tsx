import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ToolHub',
  description:
    'VIVOVI - 備忘録、それとも忘備録。WEB制作・開発を中心とした技術ブログです。',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <main className="mx-auto mt-4 max-w-screen-lg px-4">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
