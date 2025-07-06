import { posts } from '#site/content';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import RecentPosts from './_components/recent-posts';
import TechStack from './_components/tech-stack';

export default function TopPage() {
  return (
    <main className="relative -top-[calc(var(--header-height))]">
      <div
        className={cn(
          'relative grid h-lvh w-full place-items-center bg-[hsl(240,7%,5%)] bg-[url(/img/rings-bg.svg)] bg-cover bg-position-[50%_50%] bg-no-repeat min-[1440px]:bg-contain',
          'after:pointer-events-none after:absolute after:inset-0 after:z-2 after:size-full after:opacity-80 after:mix-blend-soft-light after:filter-[url(#noiseFilter)] after:content-[""]',
          'before:from-background before:pointer-events-none before:absolute before:inset-0 before:z-3 before:bg-gradient-to-t before:to-transparent before:to-25% before:content-[""]',
        )}
      >
        <div className="absolute inset-x-0 top-0 max-h-lvh pl-[50%] mix-blend-overlay">
          <Image
            src="img/white_light.svg"
            alt="SVG画像"
            width={500}
            height={500}
            className="pointer-events-none ml-[calc(-700px)] size-full w-[calc(1458/16*1rem)] max-w-none"
          />
        </div>
        <div className="relative left-[5px] w-[400px] max-[400px]:w-full">
          <Image
            src="img/vivovi_animation_icon.svg"
            alt="SVG画像"
            width={500}
            height={500}
            className={cn(
              'pointer-events-none size-full object-cover [--padding:64] [--size:450] [--total:calc((2*var(--padding))+var(--size))]',
              '[mask:radial-gradient(calc(664/var(--total)*100%)_calc(389/var(--total)*100%)_at_50%_calc((var(--padding)-4)/var(--total)*100%),white,rgba(255,255,255,0.85)_58%,rgba(255,255,255,0))]',
            )}
          />

          <div className="@container/title absolute top-[80%] mx-auto w-[min(100%,400px)]">
            {/* <p
              className={cn(
                'to-foreground/80 bg-gradient-to-r from-transparent bg-clip-text pt-2 pb-3 text-center text-[calc(100cqi/23)] leading-0 text-transparent',
              )}
            >
              忘却に抗うための備忘録です… ん？忘備録か？
            </p> */}
            <h2
              className={
                'text-foreground/90 pl-[.5cqi] text-center text-[calc(100cqi/3.6)] leading-none font-medium'
              }
            >
              VIVOVI
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-background relative z-10 px-8 max-md:px-6 max-sm:px-4">
        <RecentPosts posts={posts} className="max-w-5xl" />
        <div className="natural-shadow mx-auto my-20 h-[100px] max-w-5xl rounded-lg bg-blue-500/90">
          <h3>Blog</h3>
        </div>
        <TechStack className="max-w-5xl" />
        <div className="natural-shadow bg-shiki-background mx-auto mt-14 h-[100px] max-w-5xl rounded-lg"></div>
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
