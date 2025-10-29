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
import { cn } from '@/utils';
import { ArrowUpWideNarrow } from 'lucide-react';
import { parseAsInteger, parseAsString, useQueryStates } from 'nuqs';
import { useMemo } from 'react';
import PostCard from './post-card';

type PostWithLikeCount = Post & {
  likeCount: number;
};

export default function SortPostsList({
  posts,
  LIMIT,
  className,
}: {
  posts: PostWithLikeCount[];
  LIMIT: number;
  className?: string;
}) {
  const [{ sort, page }, setQueryStates] = useQueryStates(
    {
      sort: parseAsString.withDefault('date'),
      page: parseAsInteger.withDefault(1),
    },
    {
      history: 'push',
    },
  );

  const sortedPosts = useMemo(() => {
    switch (sort) {
      case 'updatedAt':
        return sortByUpdateDateDescending(posts);
      case 'likeCount':
        return sortByLikeCountDescending(posts);
      default:
        return sortByDateDescending(posts);
    }
  }, [sort, posts]);

  const startIndex = (page - 1) * LIMIT;
  const endIndex = startIndex + LIMIT;

  function handleSortChange(value: string) {
    setQueryStates({ sort: value, page: 1 });
  }

  return (
    <div className={cn(className)}>
      <div className="mb-12">
        <Title className="pt-30" subTitle="All Posts">
          投稿一覧
        </Title>

        <div className="flex justify-end pt-6">
          <Select onValueChange={handleSortChange} value={sort}>
            <SelectTrigger className={cn('w-[150px]')}>
              <ArrowUpWideNarrow className={cn('h-4 w-4')} />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">日付順</SelectItem>
              <SelectItem value="updatedAt">更新順</SelectItem>
              <SelectItem value="likeCount">人気順</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-16 max-md:gap-10">
        {sortedPosts.slice(startIndex, endIndex).map(post => (
          <PostCard key={post.permalink} post={post} />
        ))}
      </div>
    </div>
  );
}
