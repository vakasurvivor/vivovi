import { type ComponentPropsWithoutRef } from 'react';

export default function CustomH3(props: ComponentPropsWithoutRef<'h3'>) {
  return (
    <h3
      {...props}
      className="mt-8 mb-5 border-b-2 border-[var(--tw-prose-hr)] py-2"
    >
      {props.children}
    </h3>
  );
}
