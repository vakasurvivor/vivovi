import { Post } from '#site/content';
import PostCard from '@/app//blog/_components/postCard';
import { sortByDateDescending } from '@/libs/post';
import { prisma } from '@/libs/prismaClient';
import { cn } from '@/utils/cn';
import Logo from './logo';

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
    <div className={cn('mx-auto mt-12', className)}>
      <div className="grid w-full place-items-center rounded-md backdrop-blur-md">
        <div className="mx-auto flex w-full flex-col">
          <Logo className="mt-6" />
          <div className="mt-[3vw]mb-2 @container my-[max(1rem,2vw)] w-full">
            <p className="w-full text-end text-[calc(100cqw/22)] leading-loose">
              このサイトは、プログラミングの
              <ruby>
                備忘<rt className="font-normal">VIVO</rt>
              </ruby>
              録です…… ん？🤔
              <ruby>
                忘備<rt className="font-normal">VOVI</rt>
              </ruby>
              録か？
            </p>
          </div>
        </div>

        {/* <div className="mt-8 flex h-[15em] w-full flex-row-reverse gap-4 rounded-md p-4 backdrop-blur-sm">
          <p className="text-justify [text-indent:1em] text-base [writing-mode:vertical-rl]">
            「どっちなんだ？」と疑問に思い調べてみました。どちらも正しいとのことです。プログラミング言語を習得するまえに、自然言語にも挫折しそうですが、継続的な学習サイクルに取り組む所存です。
          </p>
          <p className="text-justify [text-indent:1em] text-base [writing-mode:vertical-rl]">
            「どっちなんだ？」と疑問に思い調べてみました。どちらも正しいとのことです。
            <br />
            プログラミング言語に加えて自然言語にも挫折しそうですが、継続的な学習サイクルに取り組む所存です。
          </p>
          <p className="text-justify [text-indent:1em] text-base [writing-mode:vertical-rl]">
            「どっちなんだ？」と疑問に思い調べてみました。どちらも正しいとのことです。
            <br />
            プログラミング言語に加えて自然言語にも挫折しそうですが、継続的な学習サイクルに取り組む所存です。
          </p>
          <p className="[text-indent:1em] text-base [writing-mode:vertical-rl]">
            Adobe After EffectのExpressions言語に
            に触れたことをキッカケに、JavaScriptを学びはじめました。
            <br />
            Web開発できるんだと
          </p>
        </div> */}
      </div>

      <h2 className="mb-4 pr-4 text-end text-[max(1rem,1.5vw)] font-medium">
        最近の投稿
      </h2>
      <div
        className={cn(
          'grid gap-8 max-md:grid-cols-2 max-md:gap-6 max-sm:grid-cols-1',
          className,
        )}
      >
        {recentPosts.map(post => (
          <PostCard key={post.permalink} post={post} />
        ))}
      </div>
    </div>
  );
}
