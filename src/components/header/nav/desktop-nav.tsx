import GitHubIcon from '@/components/github-icon';
import { Button } from '@/components/ui/button';
import XIcon from '@/components/x-icon';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './theme-toggle-icon';

export default function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-8">
      <ul className="flex items-center">
        <li>
          <Button
            asChild
            variant="link"
            className={cn('font-bold', {
              underline: pathname === '/',
            })}
          >
            <Link href="/">Top</Link>
          </Button>
        </li>
        <li>
          <Button
            asChild
            variant="link"
            className={cn('font-bold', { underline: pathname === '/blog' })}
          >
            <Link href="/blog">Blog</Link>
          </Button>
        </li>
        <li>
          <Button
            asChild
            variant="link"
            className={cn('font-bold', { underline: pathname === '/blog' })}
          >
            <Link href="/blog">Short</Link>
          </Button>
        </li>
        <li>
          <Button
            asChild
            variant="link"
            className={cn('font-bold', { underline: pathname === '/about' })}
          >
            <Link href="/about">About</Link>
          </Button>
        </li>
        <li>
          <Button
            asChild
            variant="link"
            className={cn('font-bold', { underline: pathname === '/about' })}
          >
            <Link href="/about">Tips</Link>
          </Button>
        </li>
        {/* <li>
          <Button
            asChild
            variant="link"
            className={cn('font-bold', { underline: pathname === '/tips' })}
          >
            <Link href="/tips">Tips</Link>
          </Button>
        </li> */}
      </ul>

      <div className="flex items-center opacity-90 dark:opacity-75">
        <Link href="https://github.com" target="_blank">
          <GitHubIcon className="size-[1.1rem]" />
        </Link>
        <Link href="https://x.com" target="_blank">
          <XIcon className="size-[1rem]" />
        </Link>
        <ThemeToggle className="ml-1" />
      </div>
    </nav>
  );
}
