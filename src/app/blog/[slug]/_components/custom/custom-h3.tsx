import { type ComponentPropsWithoutRef } from 'react';

export default function CustomH3(props: ComponentPropsWithoutRef<'h3'>) {
  return (
    <h3 {...props} className="border-b border-[var(--tw-prose-hr)] pb-2">
      {props.children}
    </h3>
  );
}
