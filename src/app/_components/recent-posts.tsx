import { Post } from '#site/content';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getNewestPosts } from '@/libs/post';
import { cn } from '@/utils/cn';
import { format } from 'date-fns';
import { FilePen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function RecentPosts({
  posts,
  className,
}: {
  posts: Array<Post>;
  className?: string;
}) {
  const sortPosts = getNewestPosts(posts);
  const recentPosts = sortPosts.slice(0, 3);

  return (
    <div className={cn('mx-auto', className)}>
      <div className="text- mt-28 rounded-md border border-border/40 bg-shiki-light-bg p-4 text-[clamp(1rem,0.886rem+0.57vw,1.25rem)] shadow-md dark:bg-shiki-dark-bg">
        <p className="mb-4">
          フロントエンジニアを目指して奮闘中。覚えては忘れ、覚えては忘れの繰り返し。己の体たらくな記憶を補強する手段として、技術記事を執筆することにしました。
        </p>

        <p className="mb-6">
          つまりは、
          <ruby>
            備忘<rt>VIVO</rt>
          </ruby>
          録です…… ん？
          <ruby>
            忘備<rt>VOVI</rt>
          </ruby>
          録か？
        </p>

        <p>
          「どっちなんだ？」と疑問に思い、広辞苑で調べてみました。どちらも正しいとのことです。日本語にも躓きそうな勢いですが、プログラミングの学習に勤しむ所存です。
        </p>
      </div>
      <h2 className="mb-4 mt-8 text-3xl font-medium">最近の投稿</h2>
      <div className={cn('flex flex-col gap-8', className)}>
        {recentPosts.map(post => {
          const { permalink, eyecatch, title, description, createdAt } = post;
          return (
            <Card
              className="flex flex-row-reverse items-stretch border border-border/40 bg-shiki-light-bg drop-shadow-md dark:bg-shiki-dark-bg"
              key={permalink}
            >
              <CardHeader className="flex-grow">
                <CardTitle className="mb-4 text-xl">{title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {description}
                </CardDescription>
                <div className="!mt-4 flex items-center justify-end gap-4">
                  <p className="flex items-center gap-2 text-sm [font-feature-settings:'tnum']">
                    <FilePen size={16} />
                    <time dateTime={format(new Date(createdAt), 'yyyy-MM-dd')}>
                      {format(new Date(createdAt), 'yyyy年MM月dd日')}
                    </time>
                  </p>
                  <Button variant="outline" asChild>
                    <Link href={permalink}>記事を読む</Link>
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="max-w-[300px] p-0">
                {eyecatch && (
                  <Image
                    className="h-full w-full overflow-hidden rounded-lg object-cover"
                    src={eyecatch.src}
                    width={eyecatch.width}
                    height={eyecatch.height}
                    alt={title}
                  />
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
