'use client';
import { cn } from '@/utils';
import * as motion from 'motion/react-client';
import { useState } from 'react';

export default function ExternalLink(props: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      {...props}
      target="_blank"
      rel="noreferrer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {props.children}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          'mb-[.1em]',
          'ml-[.25em]',
          'mr-[.06em]',
          'inline-block',
          'size-[1.1em]',
          'align-text-bottom',
        )}
      >
        <motion.path
          d="M15 3h6v6"
          animate={isHovered ? { d: 'M14 2h8v8' } : {}}
          transition={{ duration: 0.3 }}
        />
        <motion.path
          d="M10 14 L19 5"
          animate={isHovered ? { d: 'M10 14 L21 3' } : {}}
          transition={{ duration: 0.3 }}
        />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </motion.svg>
    </motion.a>
  );
}
