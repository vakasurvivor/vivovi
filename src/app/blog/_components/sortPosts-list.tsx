'use client';

import { Post } from '#site/content';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getNewestPosts, getOldestPosts } from '@/libs/post';
import { cn } from '@/utils/cn';
import { format } from 'date-fns';
import { FilePen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function SortPostsList({
  posts,
  className,
}: {
  posts: Array<Post>;
  className?: string;
}) {
  const [sortPosts, setSortPosts] = useState(getNewestPosts(posts));

  function handleSortPosts(value: string) {
    if (value === 'oldest') {
      setSortPosts(() => [...getOldestPosts(posts)]);
    }
    if (value === 'newest') {
      setSortPosts(() => [...getNewestPosts(posts)]);
    }
  }

  return (
    <>
      <div className="mb-8 flex items-center justify-between rounded-md border bg-background p-4 shadow-md">
        <h2 className="text-2xl">記事一覧</h2>
        <Select onValueChange={value => handleSortPosts(value)}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="並び替え" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">新しい順</SelectItem>
            <SelectItem value="oldest">古い順</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className={cn('flex flex-col gap-8', className)}>
        {sortPosts.map(post => {
          const { permalink, eyecatch, title, description, createdAt } = post;
          return (
            <Card
              className="flex flex-row-reverse items-stretch border border-border/40 bg-shiki-light-bg drop-shadow-md dark:bg-shiki-dark-bg"
              key={permalink}
            >
              <CardHeader className="flex-grow">
                <CardTitle className="mb-4 text-xl">{title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {description}
                </CardDescription>
                <div className="!mt-4 flex items-center justify-end gap-4">
                  <p className="flex items-center gap-2 text-sm [font-feature-settings:'tnum']">
                    <FilePen size={16} />
                    <time dateTime={format(new Date(createdAt), 'yyyy-MM-dd')}>
                      {format(new Date(createdAt), 'yyyy年MM月dd日')}
                    </time>
                  </p>
                  <Button variant="outline" asChild>
                    <Link href={permalink}>記事を読む</Link>
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="max-w-[300px] p-0">
                {eyecatch && (
                  <Image
                    className="h-full w-full overflow-hidden rounded-lg object-cover"
                    src={eyecatch.src}
                    width={eyecatch.width}
                    height={eyecatch.height}
                    alt={title}
                  />
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
