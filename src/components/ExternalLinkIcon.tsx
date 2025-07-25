'use client';

import { cn } from '@/utils/cn';
import * as motion from 'motion/react-client';

const svgVariants = {
  initial: {},
  hover: {},
};

const pathVariants = {
  initial: {
    d: 'M15 3h6v6',
  },
  hover: {
    d: 'M14 1.1h9v9',
    transition: { duration: 0.3 },
  },
};

const path2Variants = {
  initial: {
    d: 'M10 14 L19 5',
  },
  hover: {
    d: 'M10 14 L21 3',
    transition: { duration: 0.3 },
  },
};

export default function ExternalLinkIcon({ className }: { className: string }) {
  return (
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
      className={cn('lucide lucide-external-link', className)}
      variants={svgVariants}
      initial="initial"
      whileHover="hover"
    >
      <motion.path
        variants={pathVariants}
        initial="initial"
        animate="initial"
      />
      <motion.path
        variants={path2Variants}
        initial="initial"
        animate="initial"
      />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </motion.svg>
  );
}
