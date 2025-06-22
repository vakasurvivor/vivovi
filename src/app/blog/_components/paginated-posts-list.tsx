'use client';
import type { Post } from '#site/content';
import { Pagination } from '@/components/ui/pagination';
import { useState } from 'react';
import SortPostsList from './sortPosts-list';

export type PostWithLikeCount = Post & { likeCount: number };

interface Props {
  posts: PostWithLikeCount[];
  pageSize?: number;
}

export default function PaginatedPostsList({ posts, pageSize = 10 }: Props) {
  const [page, setPage] = useState(1);
  const total = posts.length;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginated = posts.slice(start, end);

  return (
    <>
      <SortPostsList posts={paginated} />
      <Pagination
        page={page}
        total={total}
        pageSize={pageSize}
        onPageChange={setPage}
      />
    </>
  );
}
