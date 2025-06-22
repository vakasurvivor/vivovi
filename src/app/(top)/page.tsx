import { posts } from '#site/content';
import { cn } from '@/utils/cn';
import { Slot } from '@radix-ui/react-slot';
import Image from 'next/image';
import Link from 'next/link';
import RecentPosts from './_components/recent-posts';
import Title from './_components/title';

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
            src="img/ccc.svg"
            alt="SVG画像"
            width={500}
            height={500}
            className={cn(
              'pointer-events-none size-full object-cover [--padding:64] [--size:450] [--total:calc((2*var(--padding))+var(--size))]',
              '[mask:radial-gradient(calc(664/var(--total)*100%)_calc(389/var(--total)*100%)_at_50%_calc((var(--padding)-4)/var(--total)*100%),white,rgba(255,255,255,0.85)_58%,rgba(255,255,255,0))]',
            )}
          />

          <div className="@container/title absolute top-[80%] mx-auto w-[min(100%,400px)]">
            <p
              className={cn(
                'to-foreground/80 bg-gradient-to-r from-transparent bg-clip-text pt-2 pb-3 text-center text-[calc(100cqi/23)] leading-0 text-transparent',
              )}
            >
              忘却に抗うための備忘録です… ん？忘備録か？
            </p>
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
        <div className="mx-auto max-w-5xl">
          <Title subTitle="Tech Stack" className="pt-40">
            技術選定&nbsp;（抜粋）
          </Title>
          <p className="text-muted text-sm">
            ※
            当サイトは、以下の主要な技術で構成されています。学習目的なため技術選定が安定しておりません。頻繁に入れ替わるかと思います。
          </p>
          <div className="flex w-full flex-row flex-wrap gap-10 p-8">
            {icons.map(icon => (
              <Link
                key={icon.label}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex basis-[100px] flex-col items-center gap-3"
              >
                <Slot className="size-10">{icon.icon}</Slot>
                <span className="text-muted text-sm">{icon.label}</span>
              </Link>
            ))}
          </div>
        </div>
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

import {
  SiCodesandbox,
  SiDocker,
  SiEslint,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGithubcopilot,
  SiMdx,
  SiNextdotjs,
  SiNodedotjs,
  SiPnpm,
  SiPrettier,
  SiPrisma,
  SiRadixui,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVercel,
} from '@icons-pack/react-simple-icons';
import type { SVGProps } from 'react';
const Motion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 1103 386"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M416.473 0 198.54 385.66H0L170.17 84.522C196.549 37.842 262.377 0 317.203 0Zm486.875 96.415c0-53.249 44.444-96.415 99.27-96.415 54.826 0 99.27 43.166 99.27 96.415 0 53.248-44.444 96.415-99.27 96.415-54.826 0-99.27-43.167-99.27-96.415ZM453.699 0h198.54L434.306 385.66h-198.54Zm234.492 0h198.542L716.56 301.138c-26.378 46.68-92.207 84.522-147.032 84.522h-99.27Z" />
  </svg>
);

const VisualStudioCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    {...props}
  >
    <mask
      id="a"
      width={100}
      height={100}
      x={0}
      y={0}
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M70.912 99.317a6.223 6.223 0 0 0 4.96-.19l20.589-9.907A6.25 6.25 0 0 0 100 83.587V16.413a6.25 6.25 0 0 0-3.54-5.632L75.874.874a6.226 6.226 0 0 0-7.104 1.21L29.355 38.04 12.187 25.01a4.162 4.162 0 0 0-5.318.236l-5.506 5.009a4.168 4.168 0 0 0-.004 6.162L16.247 50 1.36 63.583a4.168 4.168 0 0 0 .004 6.162l5.506 5.01a4.162 4.162 0 0 0 5.318.236l17.168-13.032L68.77 97.917a6.217 6.217 0 0 0 2.143 1.4ZM75.015 27.3 45.11 50l29.906 22.701V27.3Z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#a)">
      <path d="M96.461 10.796 75.857.876a6.23 6.23 0 0 0-7.107 1.207l-67.451 61.5a4.167 4.167 0 0 0 .004 6.162l5.51 5.009a4.167 4.167 0 0 0 5.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 0 0-3.539-5.63Z" />
      <g filter="url(#b)">
        <path d="m96.461 89.204-20.604 9.92a6.229 6.229 0 0 1-7.107-1.207l-67.451-61.5a4.167 4.167 0 0 1 .004-6.162l5.51-5.009a4.167 4.167 0 0 1 5.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 0 1-3.539 5.63Z" />
      </g>
      <g filter="url(#c)">
        <path d="M75.858 99.126a6.232 6.232 0 0 1-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 0 1 7.108-1.21l20.6 9.908A6.25 6.25 0 0 1 100 16.413v67.174a6.25 6.25 0 0 1-3.541 5.633l-20.601 9.906Z" />
      </g>
      <path
        fill="url(#d)"
        fillRule="evenodd"
        d="M70.851 99.317a6.224 6.224 0 0 0 4.96-.19L96.4 89.22a6.25 6.25 0 0 0 3.54-5.633V16.413a6.25 6.25 0 0 0-3.54-5.632L75.812.874a6.226 6.226 0 0 0-7.104 1.21L29.294 38.04 12.126 25.01a4.162 4.162 0 0 0-5.317.236l-5.507 5.009a4.168 4.168 0 0 0-.004 6.162L16.186 50 1.298 63.583a4.168 4.168 0 0 0 .004 6.162l5.507 5.009a4.162 4.162 0 0 0 5.317.236L29.294 61.96l39.414 35.958a6.218 6.218 0 0 0 2.143 1.4ZM74.954 27.3 45.048 50l29.906 22.701V27.3Z"
        clipRule="evenodd"
        opacity={0.25}
        style={{
          mixBlendMode: 'overlay',
        }}
      />
    </g>
    <defs>
      <filter
        id="b"
        width={116.727}
        height={92.246}
        x={-8.394}
        y={15.829}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4.167} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          mode="overlay"
          result="effect1_dropShadow"
        />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <filter
        id="c"
        width={47.917}
        height={116.151}
        x={60.417}
        y={-8.076}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4.167} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          mode="overlay"
          result="effect1_dropShadow"
        />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <linearGradient
        id="d"
        x1={49.939}
        x2={49.939}
        y1={0.258}
        y2={99.742}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Shiki = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 266 266"
    width="1em"
    height="1em"
    {...props}
    fill="currentColor"
  >
    <circle cx={219.5} cy={46.5} r={46.5} />
    <path d="M0 48h266v65H0z" />
    <path d="M109.463 144.426c-.451-5.634-2.564-10.029-6.339-13.184-3.719-3.156-9.381-4.733-16.988-4.733-4.846 0-8.818.591-11.917 1.775-3.042 1.127-5.296 2.676-6.761 4.648-1.465 1.972-2.226 4.226-2.282 6.761-.113 2.085.254 3.973 1.099 5.663.901 1.634 2.31 3.127 4.225 4.479 1.916 1.296 4.367 2.48 7.353 3.55 2.987 1.071 6.536 2.029 10.65 2.874l14.198 3.042c9.579 2.029 17.777 4.705 24.595 8.029 6.817 3.325 12.396 7.241 16.734 11.748 4.339 4.451 7.522 9.466 9.55 15.044 2.085 5.578 3.156 11.663 3.212 18.256-.056 11.381-2.902 21.016-8.536 28.905-5.635 7.888-13.692 13.888-24.172 18.002-10.424 4.113-22.96 6.169-37.61 6.169-15.044 0-28.172-2.225-39.385-6.676-11.156-4.452-19.833-11.298-26.03-20.538-6.142-9.297-9.241-21.186-9.298-35.666h44.625c.282 5.296 1.606 9.747 3.972 13.354 2.367 3.606 5.691 6.338 9.974 8.198 4.338 1.859 9.494 2.789 15.466 2.789 5.015 0 9.212-.62 12.593-1.86 3.381-1.239 5.944-2.958 7.691-5.155 1.747-2.198 2.648-4.705 2.705-7.522-.057-2.648-.93-4.959-2.62-6.931-1.634-2.028-4.339-3.831-8.114-5.409-3.775-1.634-8.874-3.155-15.298-4.564l-17.241-3.718c-15.326-3.325-27.412-8.875-36.258-16.65-8.79-7.832-13.156-18.509-13.1-32.032-.056-10.987 2.874-20.594 8.79-28.82 5.973-8.283 14.227-14.734 24.763-19.355 10.593-4.62 22.735-6.93 36.427-6.93 13.974 0 26.059 2.338 36.258 7.015 10.198 4.677 18.058 11.269 23.58 19.777 5.578 8.452 8.395 18.34 8.452 29.665h-44.963Z" />
    <path d="M217 0v266h-65V0z" />
  </svg>
);

const icons = [
  {
    icon: <SiVercel />,
    label: 'Vercel',
    link: 'https://vercel.com/',
  },
  {
    icon: <SiNextdotjs />,
    label: 'Next.js',
    link: 'https://nextjs.org/',
  },
  {
    icon: <SiReact />,
    label: 'React',
    link: 'https://ja.react.dev/',
  },
  {
    icon: <SiTypescript />,
    label: 'Typescript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    icon: <SiTailwindcss />,
    label: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
  },
  {
    icon: <SiShadcnui />,
    label: 'shadcn/ui',
    link: 'https://ui.shadcn.com/',
  },
  {
    icon: <SiRadixui />,
    label: 'Radix UI',
    link: 'https://www.radix-ui.com/',
  },
  {
    icon: <Motion />,
    label: 'Motion',
    link: 'https://motion.dev/',
  },
  {
    icon: <SiMdx />,
    label: 'MDX',
    link: 'https://mdxjs.com/',
  },
  {
    icon: <Shiki />,
    label: 'Shiki',
    link: 'https://shiki.style/',
  },
  {
    icon: <SiCodesandbox />,
    label: 'CodeSandbox',
    link: 'https://codesandbox.io/',
  },
  {
    icon: <SiSupabase />,
    label: 'Supabase',
    link: 'https://supabase.com/',
  },
  {
    icon: <SiPrisma />,
    label: 'Prisma',
    link: 'https://www.prisma.io/',
  },
  {
    icon: <SiUbuntu />,
    label: 'Ubuntu - WSL',
    link: 'https://learn.microsoft.com/ja-jp/windows/wsl/',
  },
  {
    icon: <SiDocker />,
    label: 'Docker',
    link: 'https://www.docker.com/ja-jp/',
  },
  {
    icon: <SiNodedotjs />,
    label: 'Node.js',
    link: 'https://nodejs.org/ja',
  },
  {
    icon: <SiPnpm />,
    label: 'pnpm',
    link: 'https://pnpm.io/ja/',
  },
  {
    icon: <SiEslint />,
    label: 'ESLint',
    link: 'https://eslint.org/',
  },
  {
    icon: <SiPrettier />,
    label: 'Prettier',
    link: 'https://prettier.io/',
  },
  {
    icon: <VisualStudioCode />,
    label: 'VS code',
    link: 'https://code.visualstudio.com/',
  },
  {
    icon: <SiGithubcopilot />,
    label: 'Github Copilot',
    link: 'https://github.com/features/copilot',
  },
  {
    icon: <SiGit />,
    label: 'Git',
    link: 'https://git-scm.com/',
  },
  {
    icon: <SiGithub />,
    label: 'GitHub',
    link: 'https://github.co.jp/',
  },
  {
    icon: <SiGithubactions />,
    label: 'Github Actions',
    link: 'https://github.co.jp/features/actions',
  },
];
