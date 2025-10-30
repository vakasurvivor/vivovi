import { Post, posts } from '#site/content';
import { prisma } from '@/lib/prismaClient';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import PostsPagination from './_components/posts-pagination';
import SortPostsList from './_components/sort-posts-list';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog | VIVOVI - 忘却に抗うための備忘録です … ん？忘備録か？',
};

type PostWithLikeCount = Post & {
  likeCount: number;
};

export default async function BlogPage() {
  if (!posts) {
    notFound();
  }

  const likeCount = await prisma.post.findMany({
    select: {
      slug: true,
      likes: true,
    },
  });

  const postsWithLikeCount: PostWithLikeCount[] = posts.map(post => {
    const like = likeCount.find(like => like.slug === post.slug);
    return {
      ...post,
      likeCount: like ? like.likes : 0,
    };
  });

  const totalPosts = posts.filter(post => post.published).length;

  return (
    <div className="relative z-50 mx-auto mt-8 max-w-5xl px-8 max-md:px-6 max-sm:px-4">
      <Suspense>
        <SortPostsList
          className="min-h-dvh"
          posts={postsWithLikeCount}
          LIMIT={5}
        />
      </Suspense>

      <Suspense>
        <PostsPagination className="my-8" totalPosts={totalPosts} LIMIT={5} />
      </Suspense>
    </div>
  );
}
