'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { cn } from '@/utils';
import Link from 'next/link';

export default function BreadcrumbTrail({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <Breadcrumb className={cn('not-prose py-1', className)}>
      <BreadcrumbList className="flex-nowrap">
        <BreadcrumbItem>
          <BreadcrumbLink asChild className="font-medium">
            <Link href="/">TOP</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild className="font-medium">
            <Link href="/blog">BLOG</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="overflow-hidden">
          <BreadcrumbPage className="overflow-hidden text-nowrap text-ellipsis">
            {/* text-[var(--tw-prose-body)] */}
            {title}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
