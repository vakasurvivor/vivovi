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
      {/* <div className="gird-row-3 grid grid-cols-2 gap-4">
        <div
          className={cn(
            'size-40 bg-radial from-blue-900 to-blue-700',
            'direction-reverse animate-spin duration-[10000ms]',
            '[mask-image:url(/img/vivovi.svg)] [mask-repeat:no-repeat] [mask-size:contain]',
            'dark:drop-shadow-[1rem_blue]',
          )}
        ></div>

        <div>
          <p className="text-7xl font-medium">VIVOVI</p>
          <p className="w-fit pl-2 text-lg max-sm:text-base">
            <ruby>
              備忘<rt className="text-[12px] font-normal">VIVO</rt>
            </ruby>
            録です…… ん？
            <ruby>
              忘備<rt className="text-[12px] font-normal">VOVI</rt>
            </ruby>
            録か？
          </p>
        </div>

        <div className="border-border/40 col-start-2 rounded-md border p-4 text-base">
          <p className="mb-4">
            覚えては忘れ、覚えては忘れの繰り返し。己の体たらくな記憶を補強する手段として、拙筆ながら技術記事を書くことにしました。
          </p>
          <p>
            「どっちなんだ？」と疑問に思い調べてみました。どちらも正しいとのことです。
            プログラミング言語に加えて自然言語にも挫折しそうですが、継続的な学習サイクルに取り組みます。
          </p>
        </div>

        <div className="col-span-2 w-full text-center">↓</div>
      </div> */}

      <div className="grid min-h-[50dvh] w-full place-items-center">
        <div className="w-full">
          <div className="mx-auto flex w-fit gap-8">
            <div
              className={cn(
                'size-[min(160px,20svw)] bg-radial from-blue-700 to-transparent',
                'direction-reverse animate-spin duration-[16s]',
                '[mask-image:url(/img/vivovi.svg)] [mask-repeat:no-repeat] [mask-size:contain]',
                'dark:drop-shadow-[1rem_blue]',
              )}
            ></div>

            <div>
              <div className="@container w-[max(100px,30vw)]">
                <p className="text-[calc(100cqw/6*1.8)] leading-[1] font-medium">
                  VIVOVI
                </p>
                <p className="w-full text-end text-lg text-[calc(100cqw/14.5)]">
                  <ruby>
                    備忘<rt className="text-[12px] font-normal">VIVO</rt>
                  </ruby>
                  録です…… ん？
                  <ruby>
                    忘備<rt className="text-[12px] font-normal">VOVI</rt>
                  </ruby>
                  録か？
                </p>
              </div>

              <div className="prose prose-slate dark:prose-invert mt-8 w-fit rounded-md text-base">
                <p className="mb-4">
                  覚えては忘れ、覚えては忘れの繰り返し
                  <br />
                  己の体たらくな記憶を補強する
                  <br />
                  拙筆ながら技術記事を書くことにしました。
                </p>
                <p>
                  「どっちなんだ？」と疑問に思い調べてみました。
                  <br />
                  どちらも正しいとのことです。
                  <br />
                  プログラミング言語に加えて自然言語にも挫折しそうですが、
                  <br />
                  継続的な学習サイクルに取り組みます。
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2 w-full text-center">↓</div>
        </div>
      </div>
      <h2 className="mt-8 mb-4 text-3xl font-medium">最近の投稿</h2>
      <div className={cn('flex flex-col gap-8', className)}>
        {recentPosts.map(post => {
          const { permalink, eyecatch, title, description, createdAt } = post;
          return (
            <Card
              className="border-border/40 bg-shiki-light-bg dark:bg-shiki-dark-bg flex flex-row-reverse items-stretch border drop-shadow-md"
              key={permalink}
            >
              <CardHeader className="grow">
                <CardTitle className="mb-4 text-xl">{title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {description}
                </CardDescription>
                <div className="mt-4! flex items-center justify-end gap-4">
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
