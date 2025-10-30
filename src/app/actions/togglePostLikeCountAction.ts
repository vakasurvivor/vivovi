'use server';

import { prisma } from '@/lib/prismaClient';

export async function togglePostLikeCountAction(
  {
    slug,
    isLiked,
    likeCount,
  }: { slug: string; isLiked: boolean; likeCount: number },
  formData: FormData,
) {
  if (isLiked) {
    const post = await prisma.post.update({
      where: { slug },
      data: {
        likes: {
          decrement: 1,
        },
      },
    });

    return {
      slug,
      isLiked: false,
      likeCount: post.likes,
    };
  } else {
    const post = await prisma.post.update({
      where: { slug },
      data: {
        likes: {
          increment: 1,
        },
      },
    });

    return {
      slug,
      isLiked: true,
      likeCount: post.likes,
    };
  }
}
