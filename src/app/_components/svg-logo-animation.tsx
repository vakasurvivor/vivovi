import { cn } from '@/utils/cn';
import {
  SiAstro,
  SiBun,
  SiCloudflare,
  SiCssmodules,
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
    icon: <SiFirebase color="default" />,
    label: 'firebase',
  },
  {
    icon: <SiCssmodules />,
    label: 'cssmodules',
  },
  {
    icon: <SiAstro color="default" />,
    label: 'astro',
  },
  {
    icon: <SiRemix />,
    label: 'remix',
  },
  {
    icon: <SiJavascript color="default" />,
    label: 'javascript',
  },
  {
    icon: <SiTypescript color="default" />,
    label: 'typescript',
  },
  {
    icon: <SiPlanetscale />,
    label: 'PlanetScale',
  },
  {
    icon: <SiPostcss color="default" />,
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
    icon: <SiSupabase color="default" />,
    label: 'Supabase',
  },
  {
    icon: <SiReact color="default" />,
    label: 'React',
  },
  {
    icon: <SiNextdotjs />,
    label: 'Next.js',
  },
  {
    icon: <SiTailwindcss color="default" />,
    label: 'Tailwind CSS',
  },
  {
    icon: <SiVercel />,
    label: 'Vercel',
  },
  {
    icon: <SiCloudflare color="default" />,
    label: 'Cloudflare R2',
  },
  {
    icon: <SiGithub />,
    label: 'GitHub',
  },
  {
    icon: <SiPrisma color="default" />,
    label: 'Prisma',
  },
  {
    icon: <SiStripe color="default" />,
    label: 'Stripe',
  },
];

interface SvgLogoAnimationProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SvgLogoAnimation({ className }: SvgLogoAnimationProps) {
  return (
    <div
      className={cn(
        'absolute left-0 top-0',
        '[--angle:19deg]',
        'h-fit',
        'w-[calc(100dvh-var(--header-height))]',
        'origin-bottom-left',
        'rotate-[calc(90deg-var(--angle))]',
        className,
      )}
    >
      <span className="sr-only">ロゴアニメーション</span>

      <Marquee
        gradient
        gradientColor="hsl(var(--background))"
        gradientWidth={200}
        speed={15}
        direction="right"
        // pauseOnHover={true}
      >
        {icons.map(icon => (
          <div key={icon.label} className="mx-6">
            <Slot className="-rotate-90">{icon.icon}</Slot>
          </div>
        ))}
      </Marquee>
    </div>
    // </div>
  );
}
