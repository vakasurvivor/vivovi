import { Post } from '#site/content';
import Title from '@/components/title';
import { Button } from '@/components/ui/button';
import { sortByDateDescending } from '@/libs/post';
import { prisma } from '@/libs/prismaClient';
import { cn } from '@/utils/cn';
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
  const recentPosts = sortPosts.slice(0, 4);

  return (
    <div className={cn('mx-auto', className)}>
      <Title className="pt-20" subTitle="Recent Posts">
        最近の投稿
      </Title>

      <div className={cn('mt-12 space-y-16')}>
        <div className="grid auto-rows-min grid-cols-3 gap-x-8 max-md:block">
          <LatestPostCard className="col-[1/3] row-[1/4]" posts={recentPosts} />
          <SubPostCard
            className="col-[3/4] row-[1/2] border-b max-md:mt-14 max-md:px-3 max-md:py-5"
            posts={recentPosts}
          />
          <SubPostCard
            className="col-[3/4] row-[2/3] border-b max-md:px-3 max-md:py-5"
            posts={recentPosts}
          />
          <SubPostCard
            className="col-[3/4] row-[3/4] max-md:mb-0 max-md:px-3 max-md:py-5"
            posts={recentPosts}
          />
        </div>
      </div>
    </div>
  );
}

const LatestPostCard = ({
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
    </div>
  );
};

const SubPostCard = ({
  posts,
  className,
}: {
  posts: Array<Post>;
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
            <time dateTime={format(new Date(posts[0].createdAt), 'yyyy-MM-dd')}>
              {format(new Date(posts[0].createdAt), 'yyyy/MM/dd')}
            </time>
          </p>
        </div>

        <h3 className="line-clamp-2 font-medium">{posts[2].title}</h3>

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
            <Link href={posts[0].permalink}>記事を読む</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
