'use client';

import { Post } from '#site/content';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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

      <div
        className={cn('grid grid-cols-2 gap-6 max-sm:grid-cols-1', className)}
      >
        {sortPosts.map(post => {
          const { permalink, eyecatch, title, createdAt } = post;
          return (
            <Card
              className="row-span-2 grid w-full grid-rows-subgrid bg-background drop-shadow-md"
              key={permalink}
            >
              <CardContent className="p-0">
                {eyecatch && (
                  <Image
                    className="aspect-[5/2] w-full overflow-hidden rounded-lg rounded-b-none object-cover"
                    src={eyecatch.src}
                    width={eyecatch.width}
                    height={eyecatch.height}
                    alt={title}
                  />
                )}
              </CardContent>

              <CardFooter className="flex flex-col items-start justify-between">
                <CardTitle className="mb-4 text-xl">{title}</CardTitle>
                <div className="flex w-full items-center justify-between">
                  <CardDescription>
                    {format(new Date(createdAt), 'yyyy年MM月dd日 公開')}
                  </CardDescription>
                  <Button variant="outline" asChild>
                    <Link href={permalink}>記事を読む</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
