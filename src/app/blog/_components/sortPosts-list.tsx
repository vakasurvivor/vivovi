'use client';

import { Post } from '#site/content';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  sortByDateDescending,
  sortByLikeCountDescending,
  sortByUpdateDateDescending,
} from '@/libs/post';
import { cn } from '@/utils/cn';
import { ArrowUpWideNarrow } from 'lucide-react';
import { useState } from 'react';
import PostCard from './postCard';

type PostWithLikeCount = Post & {
  likeCount: number;
};

export default function SortPostsList({
  posts,
  className,
}: {
  posts: PostWithLikeCount[];
  className?: string;
}) {
  const [sortPosts, setSortPosts] = useState(sortByDateDescending(posts));
  const [isDateDesc, setIsDateDesc] = useState(true);

  function handleSortPosts(value: string) {
    if (value === 'date') {
      setSortPosts(() => [...sortByDateDescending(posts)]);
    }
    if (value === 'updateDate') {
      setSortPosts(() => [...sortByUpdateDateDescending(posts)]);
    }
    if (value === 'likeCount') {
      setSortPosts(() => [...sortByLikeCountDescending(posts)]);
    }
  }

  return (
    <>
      <div className="bg-background mb-16 flex items-center justify-between rounded-md border p-4 shadow-md">
        <h2 className="text-2xl font-bold">記事一覧</h2>
        <Select onValueChange={value => handleSortPosts(value)}>
          <SelectTrigger className={cn('w-[150px]')}>
            <ArrowUpWideNarrow
              className={cn(
                'h-4 w-4',
                isDateDesc ? 'text-blue-400' : 'text-gray-400',
              )}
            />
            <SelectValue placeholder="降順" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">日付順</SelectItem>
            <SelectItem value="updateDate">更新順</SelectItem>
            <SelectItem value="likeCount">人気順</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div
        className={cn(
          'grid gap-16 max-md:gap-10',
          // 'max-md:grid-cols-2 max-sm:grid-cols-1',
          className,
        )}
      >
        {sortPosts.map(post => (
          <PostCard key={post.permalink} post={post} />
        ))}
      </div>
    </>
  );
}
