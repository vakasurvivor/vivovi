import { cn } from '@/utils/cn';
import {
  SiAstro,
  SiBun,
  SiCloudflare,
  SiCss3,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiPlanetscale,
  SiPostcss,
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
    icon: <SiFirebase />,
    label: 'firebase',
  },
  {
    icon: <SiCss3 />,
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
    icon: <SiPlanetscale />,
    label: 'PlanetScale',
  },
  {
    icon: <SiPostcss />,
    label: 'postcss',
  },

  {
    icon: <SiBun />,
    label: 'Bun',
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
    icon: <SiPrisma />,
    label: 'Prisma',
  },
  {
    icon: <SiStripe />,
    label: 'Stripe',
  },
];

interface SvgLogoAnimationProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SvgLogoAnimation({ className }: SvgLogoAnimationProps) {
  return (
    <div
      className={cn(
        'absolute -left-9 top-0',
        '[--angle:19deg]',
        'h-fit',
        'w-[calc(100dvh-var(--header-height))]',
        'origin-bottom-left',
        'rotate-[calc(90deg-var(--angle))]',
        '-z-50',
        className,
      )}
    >
      <span className="sr-only">Logo Animation</span>

      <Marquee
        gradient
        gradientColor="hsl(var(--background))"
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
