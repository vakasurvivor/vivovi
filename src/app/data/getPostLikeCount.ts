// いいね数を取得する関数
import { prisma } from '@/lib/prismaClient';

// revalidateTag を付与して

export async function getPostLikeCount(slug: string): Promise<number> {
  const post = await prisma.post.findUnique({
    where: { slug },
    select: {
      likes: true,
    },
  });

  return post ? post.likes : 0;
}
