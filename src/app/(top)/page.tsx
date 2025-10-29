import { posts } from '#site/content';
import Title from '@/components/title';
import { cn } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import RecentPosts from './_components/recent-posts';
import TechStack from './_components/tech-stack';

export default function TopPage() {
  return (
    <main className="relative -top-[calc(var(--header-height))]">
      <div className="relative grid h-dvh w-full place-items-center overflow-hidden bg-[hsl(240,7%,5%)]">
        <div
          className={cn(
            'grid size-full place-items-center bg-[url(/img/rings-bg.svg)] bg-size-[1550px] bg-center bg-no-repeat max-[464px]:bg-size-[325%]',
            'after:pointer-events-none after:absolute after:inset-0 after:z-10 after:size-full after:opacity-80 after:mix-blend-soft-light after:filter-[url(#noiseFilter)] after:content-[""]',
            'before:from-background before:pointer-events-none before:absolute before:inset-0 before:z-15 before:bg-gradient-to-t before:to-transparent before:to-25% before:content-[""]',
          )}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 max-h-lvh pl-[50%] mix-blend-overlay">
            <Image
              src="img/white_light.svg"
              alt="SVG画像"
              width={500}
              height={500}
              className="ml-[calc(-700px)] size-full w-[calc(1458/16*1rem)] max-w-none"
            />
          </div>
          <div className="mx-8 max-w-[400px]">
            <Image
              src="img/vivovi_animation_icon.svg"
              alt="vivovi_animation_icon"
              width={500}
              height={500}
              className={cn(
                'size-full object-cover [--padding:0] [--size:400] [--total:calc((2*var(--padding))+var(--size))]',
                '[mask:radial-gradient(calc(664/var(--total)*100%)_calc(389/var(--total)*100%)_at_50%_calc((var(--padding)-4)/var(--total)*100%),white,rgba(255,255,255,0.85)_68%,rgba(255,255,255,0))]',
              )}
            />
          </div>
        </div>
        <div className="absolute top-1/2 right-0 z-30 w-full -translate-y-1/2 px-4 text-[hsl(240,7%,88%)]">
          <div className="mx-auto max-w-5xl">
            <p className="ml-auto pt-8 text-2xl leading-none [writing-mode:vertical-rl] max-[400px]:!text-lg max-sm:pt-0 max-sm:text-xl">
              忘却に抗うための 備忘録です ･･･ ん ？ 忘備録か ？
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-30 w-full px-4 text-[hsl(240,7%,97%)]">
          <div className="mx-auto max-w-5xl">
            <div className="@container/title w-[min(100%,400px)]">
              <p className="text-2xl">Front-end Engineer</p>
              <p className="text-2xl">Tech Blog</p>
              <p className="text-2xl">by vakasurvivor 🎌</p>
              <h3 className="w-fit text-[calc(100cqi/3.3)] leading-none font-medium">
                VIVOVI
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-8 max-md:px-6 max-sm:px-4">
        <TechStack className="mt-28 max-w-5xl" />
        <RecentPosts posts={posts} className="mt-28 max-w-5xl" />
        <div className="mx-auto mt-28 max-w-5xl pt-20">
          <Title subTitle="shadcn/ui CLI">Registry</Title>
          <p className="text-foreground/30 mt-6 text-sm">
            shadcn
            CLIを使用して独自のコードレジストリを実行できます。独自のレジストリを実行することで、カスタムコンポーネント、フック、ページ、設定、ルール、その他のファイルを任意のプロジェクトに配布できます。
          </p>
          <section
            className={cn(
              'natural-shadow dark:border-border/14 border-border/7 relative mx-auto my-20 max-w-5xl overflow-hidden rounded-lg bg-blue-700 p-12',
              'before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-white before:to-transparent before:opacity-20',
            )}
          >
            <div className="pointer-events-none absolute top-0 left-0 isolate h-full w-[calc(600/16*1rem)] select-none">
              <Image
                alt="a"
                width="500"
                height="500"
                className="absolute top-[calc(-300/16*1rem)] left-[calc(-150/16*1rem)] size-[calc(900/16*1rem)] max-w-none opacity-90"
                src={'/img/background_vivovi_icon.svg'}
              />
            </div>
            <div>
              <h3 className="text-3xl">VIVOVI Registry</h3>
              <p className="my-6 text-lg">
                shadcn
                CLIを使用して独自のコードレジストリを実行できます。独自のレジストリを実行することで、カスタムコンポーネント、フック、ページ、設定、ルール、その他のファイルを任意のプロジェクトに配布できます。
              </p>
              <Link href="/registry">記事一覧へ</Link>
            </div>
          </section>
        </div>
      </div>

      <svg aria-hidden="true" className="sr-only">
        <filter id="noiseFilter">
          <feTurbulence
            baseFrequency="6.29"
            numOctaves="6"
            stitchTiles="stitch"
            type="fractalNoise"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="
            0.05 0 0 0 0.02
            0 0.05 0 0 0.02
            0 0 0.05 0 0.02
            0 0 0 1 0"
          />
        </filter>
      </svg>
    </main>
  );
}
