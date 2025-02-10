import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

//BodyCopy Component

interface BodyCopyProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function BodyCopy({ className }: BodyCopyProps): JSX.Element {
  return (
    <div
      className={cn(
        '[--angle:19deg]',
        'w-fit',
        'origin-top-left',
        '-rotate-[var(--angle)]',
        className,
      )}
    >
      {/* clamp min:320px max:1024px */}
      {/* pt-[clamp(16rem,9.636rem+31.82vw,30rem)] */}
      <div className="">
        <div className="relative">
          {/* <Text type="horizontal" />
          <Text type="vertical" /> */}
        </div>
      </div>
    </div>
  );
}

//Text Component

const TextVariants = cva(
  [
    'text-nowrap',
    'leading-[1.05]',
    'tracking-wider',
    'text-[clamp(2rem,1.205rem+3.98vw,3.75rem)]',
    'before:text-[clamp(1.25rem,0.455rem+3.98vw,3rem)]',
    'after:text-[clamp(1.25rem,0.455rem+3.98vw,3rem)]',
    'after:content-["なの？"]',
  ],
  {
    variants: {
      type: {
        horizontal: [
          'pl-[.1em]',
          'before:absolute',
          'before:bottom-0',
          'before:-translate-x-full',
          'before:pr-[.3em]',
          'before:content-["これは"]',
        ],
        vertical: [
          'absolute left-0 top-0',
          'translate-y-[-2.1%]',
          'translate-x-[117%]',
          '[writing-mode:vertical-rl]',
          'before:content-["それとも"]',
          'before:absolute',
          'before:-translate-y-full',
          'before:left-1/2',
          'before:-translate-x-1/2',
        ],
      },
    },
  },
);

const AccentTextVariants = cva(
  [
    'relative inline-block',
    'before:absolute',
    'before:scale-125',
    'before:-z-10',
    'before:aspect-square',
    'before:w-full',
    'before:rounded-full',
    'text-background',
    'dark:text-foreground',
  ],
  {
    variants: {
      type: {
        horizontal: [
          'mx-[.17em]',
          'before:bg-background',
          'before:right-[2%]',
          'before:top-[4%]',
        ],
        vertical: [
          'my-[.2em]',
          'before:bg-blue-900',
          'before:right-[-6%]',
          'before:top-0',
        ],
      },
    },
  },
);

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof TextVariants> {
  type: 'horizontal' | 'vertical';
}

function Text({ type, ...props }: TextProps): JSX.Element {
  return (
    <>
      {type === 'horizontal' && (
        <p className={TextVariants({ type })}>
          備<span className={AccentTextVariants({ type })}>忘</span>録
        </p>
      )}
      {type === 'vertical' && (
        <p className={TextVariants({ type })}>
          <span className={AccentTextVariants({ type })}>忘</span>備録
        </p>
      )}
    </>
  );
}
