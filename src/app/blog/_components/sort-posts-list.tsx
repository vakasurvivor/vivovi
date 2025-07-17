'use client';

import { Post } from '#site/content';
import Title from '@/components/title';
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
import PostCard from './post-card';

type PostWithLikeCount = Post & {
  likeCount: number;
};

export default function SortPostsList({
  posts,
  className,
  currentPage,
}: {
  posts: PostWithLikeCount[];
  className?: string;
  currentPage: number;
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

  const perPage = 5;
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  return (
    <>
      <div className="mb-12 rounded-md shadow-md">
        <Title className="pt-30" subTitle="All Posts">
          投稿一覧
        </Title>

        <div className="flex justify-end pt-6">
          <Select
            onValueChange={value => handleSortPosts(value)}
            defaultValue={'date'}
          >
            <SelectTrigger className={cn('w-[150px]')}>
              <ArrowUpWideNarrow
                className={cn(
                  'h-4 w-4',
                  isDateDesc ? 'text-blue-400' : 'text-gray-400',
                )}
              />
              <SelectValue placeholder="並び替え" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">日付順</SelectItem>
              <SelectItem value="updateDate">更新順</SelectItem>
              <SelectItem value="likeCount">人気順</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div
        className={cn(
          'grid gap-16 max-md:gap-10',
          // 'max-md:grid-cols-2 max-sm:grid-cols-1',
          className,
        )}
      >
        {sortPosts.slice(startIndex, endIndex).map(post => (
          <PostCard key={post.permalink} post={post} />
        ))}
      </div>
    </>
  );
}
