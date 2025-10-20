import { type ComponentPropsWithoutRef } from 'react';

export default function CustomH4(props: ComponentPropsWithoutRef<'h4'>) {
  return (
    <h4
      {...props}
      className="border-b border-dashed border-[var(--tw-prose-hr)] pb-1"
    >
      {props.children}
    </h4>
  );
}
