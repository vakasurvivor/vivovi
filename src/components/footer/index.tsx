'use client';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

export default function Footer({ className }: { className: string }) {
  let currentYear = new Date().getFullYear();
  const pathname = usePathname();
  return (
    <footer
      className={cn(
        'mx-auto mt-10 w-full max-w-screen-lg bg-background px-4 backdrop-blur',
        className,
      )}
    >
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
              <Link href="/">TOP</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              variant="link"
              className={cn('font-bold', { underline: pathname === '/about' })}
            >
              <Link href="/about">ABOUT</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              variant="link"
              className={cn('font-bold', { underline: pathname === '/blog' })}
            >
              <Link href="/blog">BLOG</Link>
            </Button>
          </li>
        </ul>
      </nav>
      <p className="text-center">
        <small>
          Copyright © 2024 - {currentYear} VIVOVI All Rights Reserved.
        </small>
      </p>
    </footer>
  );
}
