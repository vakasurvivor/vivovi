import VivoviLogo from '@/components/vivovi-logo';

export default function AllPostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <VivoviLogo className="relative -z-10 pl-8 max-md:pl-4" />
      {children}
    </>
  );
}
