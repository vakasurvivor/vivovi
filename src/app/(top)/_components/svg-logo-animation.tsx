import { cn } from '@/utils/cn';
import {
  SiAmazonwebservices,
  SiAstro,
  SiCloudflare,
  SiCss,
  SiDocker,
  SiGit,
  SiGithub,
  SiGnubash,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiPnpm,
  SiPrisma,
  SiRadixui,
  SiReact,
  SiRemix,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from '@icons-pack/react-simple-icons';
import { Slot } from '@radix-ui/react-slot';
import Marquee from 'react-fast-marquee';

const icons = [
  {
    icon: <SiGnubash />,
    label: 'bash',
  },
  {
    icon: <SiCss />,
    label: 'css',
  },
  {
    icon: <SiAstro />,
    label: 'astro',
  },
  {
    icon: <SiRemix />,
    label: 'remix',
  },
  {
    icon: <SiJavascript />,
    label: 'javascript',
  },
  {
    icon: <SiTypescript />,
    label: 'typescript',
  },
  {
    icon: <SiLinux />,
    label: 'Linux',
  },
  {
    icon: <SiDocker />,
    label: 'docker',
  },

  {
    icon: <SiAmazonwebservices />,
    label: 'amazon web services',
  },
  {
    icon: <SiRadixui />,
    label: 'Radix UI',
  },
  {
    icon: <SiSupabase />,
    label: 'Supabase',
  },
  {
    icon: <SiReact />,
    label: 'React',
  },
  {
    icon: <SiNextdotjs />,
    label: 'Next.js',
  },
  {
    icon: <SiTailwindcss />,
    label: 'Tailwind CSS',
  },
  {
    icon: <SiVercel />,
    label: 'Vercel',
  },
  {
    icon: <SiCloudflare />,
    label: 'Cloudflare R2',
  },
  {
    icon: <SiGithub />,
    label: 'GitHub',
  },
  {
    icon: <SiPnpm />,
    label: 'pnpm',
  },
  {
    icon: <SiPrisma />,
    label: 'Prisma',
  },
  {
    icon: <SiStripe />,
    label: 'Stripe',
  },
  {
    icon: <SiGit />,
    label: 'Git',
  },
];

interface SvgLogoAnimationProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SvgLogoAnimation({ className }: SvgLogoAnimationProps) {
  return (
    <div
      className={cn(
        'absolute top-0 -left-9',
        '[--angle:19deg]',
        'h-fit',
        'w-[calc(100dvh-var(--header-height))]',
        'origin-bottom-left',
        'rotate-[calc(90deg-var(--angle))]',
        className,
      )}
    >
      <span className="sr-only">Logo Animation</span>

      <Marquee
        gradient
        gradientColor="var(--color-background)"
        gradientWidth={250}
        speed={8}
        direction="right"
      >
        {icons.map(icon => (
          <div key={icon.label} className="mx-5">
            <Slot className="size-4 -rotate-90">{icon.icon}</Slot>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
