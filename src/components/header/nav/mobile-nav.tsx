import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/utils/cn';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GitHubIcon from '../../github-icon';
import XIcon from '../../x-icon';
import ThemeToggle from './theme-toggle-icon';

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-4 opacity-90 dark:opacity-75">
      <ThemeToggle />
      <Sheet>
        <SheetTrigger asChild>
          <button>
            <Menu size={20} />
          </button>
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-between bg-background">
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>for Mobile view</SheetDescription>
          <nav className="flex flex-col items-center gap-8">
            <div className="flex items-center opacity-90 dark:opacity-75">
              <Link href="https://github.com" target="_blank">
                <GitHubIcon className="size-[1.1rem]" />
              </Link>
              <Link href="https://x.com" target="_blank">
                <XIcon className="size-[1rem]" />
              </Link>
            </div>

            <ul className="flex flex-col gap-4">
              <li>
                <Button
                  asChild
                  variant="link"
                  className={cn('text-2xl font-bold', {
                    underline: pathname === '/',
                  })}
                >
                  <Link href="/">TOP</Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="link"
                  className={cn('text-2xl font-bold', {
                    underline: pathname === '/about',
                  })}
                >
                  <Link href="/about">ABOUT</Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="link"
                  className={cn('text-2xl font-semibold', {
                    underline: pathname === '/blog',
                  })}
                >
                  <Link href="/blog">BLOG</Link>
                </Button>
              </li>
            </ul>
          </nav>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">閉じる</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
