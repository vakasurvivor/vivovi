import { posts } from '#site/content';
import { prisma } from '@/libs/prismaClient';

async function main() {
  const seedPosts = posts.map(({ title, slug }) => ({ title, slug }));
  const seedSlugs = new Set(seedPosts.map(p => p.slug));

  const existingSlugsInDB = await prisma.post
    .findMany({
      select: { slug: true },
    })
    .then(posts => new Set(posts.map(post => post.slug)));

  const newPosts = seedPosts.filter(p => !existingSlugsInDB.has(p.slug));

  if (newPosts.length > 0) {
    await prisma.post.createMany({
      data: newPosts,
    });
    newPosts.forEach(p => console.log(`Created post with slug: ${p.slug}`));
  }

  const existingCount = seedPosts.length - newPosts.length;
  if (existingCount > 0) {
    console.log(`${existingCount} posts already exist.`);
  }

  // DB にのみ存在する slug を持つ投稿を削除
  const slugsToDelete = Array.from(existingSlugsInDB).filter(
    slug => !seedSlugs.has(slug),
  );

  if (slugsToDelete.length > 0) {
    const deleteResult = await prisma.post.deleteMany({
      where: {
        slug: {
          in: slugsToDelete,
        },
      },
    });
    console.log(
      `Deleted ${deleteResult.count} posts not in seed data (DBのみに存在).`,
    );
  }
}

main();
