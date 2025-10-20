import { cn } from '@/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Info, Lightbulb, Skull, TriangleAlert } from 'lucide-react';
import React from 'react';

/**
 * CalloutStyle Variant
 */
type CalloutStyleProps = VariantProps<typeof calloutStyle>;

const calloutStyle = cva(
  [
    'pl-[10px]',
    'relative my-8',
    'rounded-lg',
    'bg-[hsl(240,_7%,_95%)] dark:bg-[hsl(240,_7%,_7%)]',
    'py-4',
    'pr-4',
    'border border-gray-400/10 shadow-md',
  ],
  {
    variants: {
      type: {
        info: [''],
        tips: [
          // 'bg-green-600/[10%]',
          '[&_a]:hover:text-green-600',
          'dark:[&_a]:hover:text-green-500',
        ],
        warning: [
          // 'bg-amber-600/[10%]',
          '[&_a]:hover:text-amber-600',
          'dark:[&_a]:hover:text-amber-500',
        ],
        danger: [
          // 'bg-red-600/[10%]',
          '[&_a]:hover:text-red-600',
          'dark:[&_a]:hover:text-red-500',
        ],
      },
    },
    defaultVariants: {
      type: 'info',
    },
  },
);

/**
 * AccentBorder Variant
 */
type AccentBorderProps = VariantProps<typeof accentBorder>;
const accentBorder = cva(['border-l-2', 'pl-3'], {
  variants: {
    type: {
      info: ['border-l-blue-600', 'dark:border-l-blue-500'],
      tips: ['border-l-green-600', 'dark:border-l-[hsl(130,35%,48%)]'],
      warning: ['border-l-amber-600', 'dark:border-l-amber-500'],
      danger: ['border-l-red-600', 'dark:border-l-red-500'],
    },
  },
  defaultVariants: {
    type: 'info',
  },
});

/**
 * Callout Component
 */
interface CalloutProps extends CalloutStyleProps, AccentBorderProps {
  title?: string;
  children: React.ReactNode;
}
export default function Callout({
  title,
  type = 'info',
  children,
}: CalloutProps) {
  return (
    <aside data-callout={`${type}`} className={calloutStyle({ type })}>
      <div className={accentBorder({ type })}>
        <Heading title={title} type={type} size={20} />
        <div className="[&>*:first-child]:mt-2 [&>*:last-child]:mb-0">
          {children}
        </div>
      </div>
      {/* <div className={accentBorder({ type })} /> */}
    </aside>
  );
}

/**
 * Icon Variant
 */
type IconStylesProps = VariantProps<typeof iconStyles>;
const iconStyles = cva('', {
  variants: {
    type: {
      info: 'text-blue-600 dark:text-blue-500',
      tips: 'text-green-600 dark:text-green-500',
      warning: 'text-amber-600 dark:text-amber-500',
      danger: 'text-red-600 dark:text-red-500',
    },
  },
  defaultVariants: {
    type: 'info',
  },
});

/**
 * Heading Component
 */
interface HeadingProps extends IconStylesProps {
  title?: string;
  size?: number;
}
const Heading = ({ title, type = 'info', size = 16 }: HeadingProps) => {
  const heading = {
    icon: {
      info: <Info size={size} />,
      tips: <Lightbulb size={size} />,
      warning: <TriangleAlert size={size} />,
      danger: <Skull size={size} />,
    },

    text: {
      info: 'Information',
      tips: 'Tips',
      warning: 'Warning',
      danger: 'Danger',
    },
  };

  return (
    <h6 className="flex gap-1.5">
      <span className={cn('mt-[4px]', iconStyles({ type }))}>
        {heading.icon[type!]}
      </span>
      <span className={cn('font-medium', iconStyles({ type }))}>
        {title || heading.text[type!]}
      </span>
    </h6>
  );
};
