import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    href: '/',
    title: 'Top',
  },
  {
    href: '/blog',
    title: 'Blog',
  },
  {
    href: '/about',
    title: 'About',
  },
];

export default function PageLinks({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <ul className={cn('flex h-full items-stretch divide-x text-sm', className)}>
      {links.map((link, index) => {
        return (
          <li
            className="dark:border-border/14 border-border/7 relative"
            key={index}
          >
            <Link
              href={link.href}
              className={cn(
                'relative grid h-full place-items-center px-6',
                'before:bg-accent-foreground before:absolute before:bottom-0 before:left-0 before:h-[1px] before:content-[""]',
                'before:origin-left before:transition-all before:duration-300 hover:before:w-full',
                pathname === link.href
                  ? 'font-semibold before:w-full'
                  : 'before:w-0',
              )}
            >
              <span className="inline-block">{link.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
