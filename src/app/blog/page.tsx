import { Post, posts } from '#site/content';
import { prisma } from '@/libs/prismaClient';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PostsPagination from './_components/posts-pagination';
import SortPostsList from './_components/sort-posts-list';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog | VIVOVI - 忘却に抗うための備忘録です … ん？忘備録か？',
};

type PostWithLikeCount = Post & {
  likeCount: number;
};
type SearchParams = { [key: string]: string | undefined };

export default async function BlogPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { page = '1' } = await searchParams;
  const LIMIT = 5;

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
    <div className="relative z-50 mt-8 rounded-md px-8 max-md:px-6 max-sm:px-4">
      <div className="mx-auto max-w-5xl">
        <SortPostsList
          posts={postsWithLikeCount}
          currentPage={parseInt(page)}
        />
      </div>
      <PostsPagination
        className="mt-6"
        totalPages={Math.ceil(totalPosts / LIMIT)}
        currentPage={parseInt(page)}
      />
    </div>
  );
}
