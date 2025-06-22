import { Post, posts } from '#site/content';
import { prisma } from '@/libs/prismaClient';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SortPostsList from './_components/sortPosts-list';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'VIVOVI - 備忘録、それとも忘備録。WEB制作・開発を中心とした技術ブログです。',
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

  return (
    <div className="relative z-50 mt-8 rounded-md px-8 max-md:px-6 max-sm:px-4">
      <div className="mx-auto max-w-5xl">
        <SortPostsList posts={postsWithLikeCount} />
      </div>
    </div>
  );
}
