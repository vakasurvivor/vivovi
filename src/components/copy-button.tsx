'use client';

import { cn } from '@/utils/cn';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

interface CopyButtonProps {
  value: string;
  className?: string;
}

export default function CopyButton({ value, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const iconBaseClass =
    'transition scale-0 duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ';

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(value).then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1200);
          console.log(copied);
        });
      }}
      className={cn(
        'text-muted-foreground grid size-5 place-content-center hover:text-gray-800 dark:hover:text-white',
        className,
      )}
    >
      <Check
        size={20}
        className={cn(
          iconBaseClass,
          copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
        )}
      />
      <Copy
        size={20}
        className={cn(
          iconBaseClass,
          copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
        )}
      />
      <span className="sr-only">Copy</span>
    </button>
  );
}
