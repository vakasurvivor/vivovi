import { posts } from '#site/content';
import { prisma } from '@/libs/prismaClient';

// シード処理のメイン関数
async function main() {
  console.log('\n🚀  Starting database seed...\n');
  try {
    await syncPostSeedData();
  } catch (error) {
    console.error('💥  Error during database seeding:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// 投稿データを「差分適用」する
async function syncPostSeedData() {
  console.log('───────────── 📝 Posts ───────────────\n');

  // DB から既存の slug を取得しセット化
  const postsInDatabase = await prisma.post
    .findMany({
      select: { slug: true },
    })
    .then((posts: { slug: string }[]) => new Set(posts.map(post => post.slug)));

  // 新規追加が必要な投稿のみ抽出
  const postsFromSeed = posts.map(({ title, slug }) => ({ title, slug }));
  const postsToInsert = postsFromSeed.filter(
    post => !postsInDatabase.has(post.slug),
  );

  // 新規投稿を一括作成
  if (postsToInsert.length > 0) {
    const createdPosts = await prisma.post.createMany({
      data: postsToInsert,
    });
    console.group(`📭  New posts:       ${createdPosts.count}`);
    console.table(postsToInsert, ['slug']);
    console.groupEnd();
  } else if (postsToInsert.length === 0) {
    console.log(`📭  New posts:       0`);
  }

  // 既に存在する投稿数を出力
  const existingCount = postsFromSeed.length - postsToInsert.length;
  if (existingCount > 0) {
    console.log(`📦  Existing posts:  ${existingCount}`);
  }

  // DB にのみ存在する slug を持つ投稿を抽出
  const slugsFromSeed = new Set(postsFromSeed.map(post => post.slug));
  const postsToDelete = Array.from(postsInDatabase).filter(
    slug => !slugsFromSeed.has(slug),
  );

  // 不要な投稿を一括削除
  if (postsToDelete.length > 0) {
    const deletedPosts = await prisma.post.deleteMany({
      where: {
        slug: {
          in: postsToDelete,
        },
      },
    });
    console.log(`🗑️  Deleted posts:   ${deletedPosts.count}`);
  }

  // dbにある投稿の合計数を出力
  const totalPosts = await prisma.post.count();
  console.log(`🧮  Total posts:     ${totalPosts}\n`);
  console.log('──────────────────────────────────────');
}

// メイン関数を実行
main();
