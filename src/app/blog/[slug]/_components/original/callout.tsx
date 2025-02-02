import { cva, type VariantProps } from 'class-variance-authority';
import { Info, Lightbulb, Skull, TriangleAlert } from 'lucide-react';
import React from 'react';

/**
 * CalloutStyle Variant
 */
type CalloutStyleProps = VariantProps<typeof calloutStyle>;

const calloutStyle = cva(
  [
    'pl-[19px]',
    'relative my-8',
    'rounded-lg',
    'rounded-l-none',
    'py-4',
    'pr-4',
    'shadow-md',
  ],
  {
    variants: {
      type: {
        info: ['bg-blue-600/[10%]'],
        tips: [
          'bg-green-600/[10%]',
          '[&_a]:hover:text-green-600',
          'dark:[&_a]:hover:text-green-500',
        ],
        warning: [
          'bg-amber-600/[10%]',
          '[&_a]:hover:text-amber-600',
          'dark:[&_a]:hover:text-amber-500',
        ],
        danger: [
          'bg-red-600/[10%]',
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
const accentBorder = cva(
  [
    'absolute',
    'bottom-0',
    'left-0',
    '-z-10',
    'h-full',
    'w-[3px]',
    'rounded-full',
  ],
  {
    variants: {
      type: {
        info: ['bg-blue-600', 'dark:bg-blue-500'],
        tips: ['bg-green-600', 'dark:bg-green-500'],
        warning: ['bg-amber-600', 'dark:bg-amber-500'],
        danger: ['bg-red-600', 'dark:bg-red-500'],
      },
    },
    defaultVariants: {
      type: 'info',
    },
  },
);

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
      <Heading title={title} type={type} size={22} />
      <div className="[&>*:first-child]:mt-2 [&>*:last-child]:mb-0">
        {children}
      </div>
      <div className={accentBorder({ type })} />
    </aside>
  );
}

/**
 * Icon Variant
 */
type IconStylesProps = VariantProps<typeof iconStyles>;
const iconStyles = cva('mt-[2px]', {
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
const Heading = ({ title, type = 'info', size = 20 }: HeadingProps) => {
  const heading = {
    icon: {
      info: <Info size={size} />,
      tips: <Lightbulb size={size} />,
      warning: <TriangleAlert size={size} />,
      danger: <Skull size={size} />,
    },

    text: {
      info: '情報',
      tips: 'Tips',
      warning: '注意',
      danger: '警告',
    },
  };

  return (
    <h6 className="flex gap-1.5">
      <span className={iconStyles({ type })}>{heading.icon[type!]}</span>
      <span className="font-medium">{title || heading.text[type!]}</span>
    </h6>
  );
};
