import { type ComponentPropsWithoutRef, ReactNode } from 'react';

export default function CustomH2(props: ComponentPropsWithoutRef<'h2'>) {
  const { children, className, ...restProps } = props;

  if (props.id === 'footnote-label' && Array.isArray(children)) {
    const newChildren: ReactNode[] = children.map(child =>
      typeof child === 'string' && child === 'Footnotes' ? '脚注' : child,
    );

    return (
      <h3
        className="mt-8 mb-5 border-b border-[var(--tw-prose-hr)] py-2"
        {...restProps}
      >
        {newChildren}
      </h3>
    );
  }

  return <h2 {...restProps}>{children}</h2>;
}
