import { Post } from '#site/content';
import Title from '@/components/title';
import { Button } from '@/components/ui/button';
import { sortByDateDescending } from '@/lib/post';
import { prisma } from '@/lib/prismaClient';
import { cn } from '@/utils';
import { format } from 'date-fns';
import { CalendarDays, ChartNoAxesColumn, Timer } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type PostWithLikeCount = Post & {
  likeCount: number;
};

export default async function RecentPosts({
  posts,
  className,
}: {
  posts: Array<Post>;
  className?: string;
}) {
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

  const sortPosts = sortByDateDescending(postsWithLikeCount);
  const recentPosts = sortPosts.slice(0, 3);

  return (
    <div className={cn('mx-auto', className)}>
      <Title className="pt-20" subTitle="Recent Posts">
        最近の記事
      </Title>

      <div className={cn('mt-12')}>
        <div className="grid auto-rows-min grid-cols-3 gap-x-8 max-md:block">
          <MainPostCard className="col-[1/3] row-[1/4]" posts={recentPosts} />

          {recentPosts.map((post, index) => {
            if (index === 0) return null;
            return (
              <SubPostCard
                key={post.slug}
                className={cn(
                  index === 1 && 'col-[3/4] row-[1/2] border-b',
                  index === 2 && 'col-[3/4] row-[2/3]',
                  'max-md:mt-12 max-md:px-3',
                )}
                post={post}
              />
            );
          })}

          <div
            className={cn(
              'dark:border-border/14 border-border/7 relative col-[3/4] row-[3/4] mt-4 overflow-hidden rounded-md bg-blue-700',
              'before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-white before:to-transparent before:opacity-20',
            )}
          >
            <div className="gird relative h-full py-6">
              {/* 背景装飾画像 */}
              <div className="pointer-events-none absolute top-0 left-0 isolate z-10 h-full select-none">
                <Image
                  alt="a"
                  width="500"
                  height="500"
                  className="absolute top-[calc(-120/16*1rem)] left-[calc(-120/16*1rem)] size-[calc(500/16*1rem)] max-w-none opacity-95"
                  src={'/img/background_vivovi_icon.svg'}
                />
              </div>

              <div className="relative z-20 flex h-full flex-col justify-between gap-4 px-5">
                <h3 className="text-2xl font-semibold">VIVOVI Blog</h3>
                <p className="text-sm">
                  フロントエンドの領域を中心として、日々の学習や実務での知見を技術記事として投稿する予定です。
                </p>
                <Button
                  className="w-full bg-[hsl(240,7%,7%)] pr-3 pl-3 hover:bg-blue-800"
                  variant="outline"
                  asChild
                >
                  <Link href="/blog">全記事一覧へ</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const MainPostCard = ({
  posts,
  className,
}: {
  posts: Array<Post>;
  className?: string;
}) => {
  const post = posts.at(0) as Post;
  return (
    <div
      className={cn(
        'rounded-[8px] bg-[hsl(240,7%,7%)] p-3 shadow-[0_1.5px_2px_0_theme(colors.black/32%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/4%)]',
        className,
      )}
    >
      <div className="bg-shiki-background flex h-full flex-col justify-between overflow-hidden rounded-sm shadow-[0_1.5px_2px_0_theme(colors.black/32%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/4%)]">
        <div className={cn('relative aspect-[16/9] w-full mask-b-from-15%')}>
          <Image
            className="aspect-[16/9] size-full object-cover"
            src={post.eyecatch.src}
            width={post.eyecatch.width}
            height={post.eyecatch.height}
            alt={post.title}
          />
        </div>

        <div className="my-3 flex flex-col gap-4 px-3">
          <div className="text-muted-foreground flex items-center gap-1">
            <CalendarDays size={15} />
            <p className="text-sm font-medium [font-feature-settings:'tnum']">
              <time dateTime={format(new Date(post.createdAt), 'yyyy-MM-dd')}>
                {format(new Date(post.createdAt), 'yyyy/MM/dd')}
              </time>
            </p>
          </div>

          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="text-muted-foreground text-sm">{post.description}</p>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <p className="flex items-center gap-1 text-sm [font-feature-settings:'tnum']">
                <Timer size={16} />
                <span>{post.metadata.readingTime}</span>分
              </p>
              <p className="flex items-center gap-1 text-sm [font-feature-settings:'tnum']">
                <ChartNoAxesColumn size={16} />
                <span>100</span>
              </p>
            </div>
            <Button
              className="bg-[hsl(240,7%,7%)] pr-3 pl-3 hover:bg-blue-700"
              variant="outline"
              asChild
            >
              <Link href={post.permalink}>記事を読む</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SubPostCard = ({
  post,
  className,
}: {
  post: Post;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'border-accent grid place-items-center border-dashed',
        className,
      )}
    >
      <div className="flex w-full flex-col gap-3">
        <div className="text-muted-foreground flex items-center gap-1">
          <CalendarDays size={16} />
          <p className="text-sm font-medium [font-feature-settings:'tnum']">
            <time dateTime={format(new Date(post.createdAt), 'yyyy-MM-dd')}>
              {format(new Date(post.createdAt), 'yyyy/MM/dd')}
            </time>
          </p>
        </div>

        <h3 className="line-clamp-2 font-medium">{post.title}</h3>

        <div className="mt-1 flex flex-wrap items-center justify-between">
          <div className="text-muted-foreground flex items-center gap-3">
            <p className="flex items-center gap-1 text-sm [font-feature-settings:'tnum']">
              <Timer size={16} />
              <span>10</span>分
            </p>
            <p className="flex items-center gap-1 text-sm [font-feature-settings:'tnum']">
              <ChartNoAxesColumn size={16} />
              <span>100</span>
            </p>
          </div>
          <Button
            className="bg-[hsl(240,7%,7%)] pr-3 pl-3 hover:bg-blue-700"
            variant="outline"
            asChild
          >
            <Link href={post.permalink}>記事を読む</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
