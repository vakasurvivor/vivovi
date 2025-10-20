import { SITE_CONFIG } from '#site/content';
import { cn } from '@/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PageLinks({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <ul className={cn('flex h-full items-stretch divide-x text-sm', className)}>
      {SITE_CONFIG.pages.map((page, index) => {
        return (
          <li
            className="dark:border-border/14 border-border/7 relative"
            key={index}
          >
            <Link
              href={page.link}
              className={cn(
                'relative grid h-full place-items-center px-6',
                'before:bg-accent-foreground before:absolute before:bottom-0 before:left-0 before:h-[1px] before:content-[""]',
                'before:origin-left before:transition-all before:duration-300 hover:before:w-full',
                pathname === page.link
                  ? 'font-semibold before:w-full'
                  : 'before:w-0',
              )}
            >
              <span className="inline-block">{page.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
