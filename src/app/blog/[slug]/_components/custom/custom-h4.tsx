import { type ComponentPropsWithoutRef } from 'react';

export default function CustomH4(props: ComponentPropsWithoutRef<'h4'>) {
  return (
    <h4 {...props} className="my-5 border-b border-[var(--tw-prose-hr)] pb-1">
      {props.children}
    </h4>
  );
}
