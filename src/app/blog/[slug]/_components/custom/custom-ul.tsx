import { type ComponentPropsWithoutRef } from 'react';

interface CustomUlProps extends ComponentPropsWithoutRef<'ul'> {}

export default function CustomUl(props: CustomUlProps) {
  // 目次を形成しているか否か
  // const isToc = props.className?.includes('rehype-toc-level');

  // if (!isToc) {
  //   const elements = Children.toArray(props.children);

  //   console.log('elements:', elements);
  //   const filteredChildren = elements.filter(
  //     (child): child is ReactElement<{ children?: React.ReactNode }> =>
  //       isValidElement(child),
  //   );

  //   return (
  //     <ul {...props} className={cn('list-none [&_*:last-child]:mb-0')}>
  //       {filteredChildren?.map((child, index) => (
  //         <li
  //           key={index}
  //           className={cn(
  //             'relative',
  //             'before:absolute',
  //             'before:content-[""]',
  //             'before:left-0',
  //             'before:-translate-x-[115%]',
  //             'before:h-7',
  //             'before:w-6',
  //             'before:bg-blue-600',
  //             'dark:before:bg-blue-500',
  //             'before:[mask-image:url("/img/arrow_right.svg")]',
  //             'before:[mask-repeat:no-repeat]',
  //             'before:[mask-position:center]',
  //             // 'before:[mask-size:cover]',
  //           )}
  //         >
  //           {child.props.children}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  return <ul {...props} />;
}
