import { cn } from '@/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import type { JSX } from 'react';

//VivoviLogo Component

interface VivoviLogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function VivoviLogo({
  className,
}: VivoviLogoProps): JSX.Element {
  return (
    <div className={cn('font-inter absolute top-0 left-0', className)}>
      <div className="inline-block w-fit">
        {/* clamp min:320px max:1024px */}
        <span
          className={cn(
            'left-0 inline-block pt-20 max-md:pt-16',
            'px-[clamp(2rem,1.545rem+2.27vw,3rem)]',
            'text-[clamp(5rem,3.636rem+6.82vw,8rem)] leading-none',
          )}
        >
          &nbsp;
        </span>
        <AccentBorder type="left" />
        <AccentBorder type="right" />
      </div>
    </div>
  );
}

//AccentBorder Component

const AccentBorderStyle = cva(
  [
    '[--angle:19deg] [--thickness:4px]',
    'absolute top-0',
    'h-[var(--thickness)]',
    'origin-top-left',
    'dark:drop-shadow-[0_0_.5rem_blue]',
    'w-[100dvh]',
  ],
  {
    variants: {
      type: {
        left: [
          'left-0',
          'rotate-[calc(90deg_-_var(--angle))]',
          'bg-linear-to-r from-blue-700 from-10% to-transparent to-95%',
        ],
        right: [
          'left-[calc(100%+var(--thickness))]',
          'rotate-[calc(90deg_+_var(--angle))]',
          'bg-linear-to-r from-blue-700 from-10% to-transparent to-50%',
        ],
      },
    },
  },
);

interface AccentBorderProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof AccentBorderStyle> {
  type: 'left' | 'right';
}

function AccentBorder({ type }: AccentBorderProps): JSX.Element {
  return <span className={AccentBorderStyle({ type })} />;
}
