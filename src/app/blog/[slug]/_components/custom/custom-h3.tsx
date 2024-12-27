import { type ComponentPropsWithoutRef } from 'react';

export default function CustomH3(props: ComponentPropsWithoutRef<'h3'>) {
  return (
    <h3
      {...props}
      className="mb-5 mt-8 border-y border-[var(--tw-prose-hr)] py-2"
    >
      {props.children}
    </h3>
  );
}
