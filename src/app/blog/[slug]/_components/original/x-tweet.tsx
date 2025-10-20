'use client';

import { cn } from '@/utils';
import { useTheme } from 'next-themes';
import { Tweet } from 'react-tweet';

interface XProps {
  url: string;
  className?: string;
}

export default function XTweet({ url, className }: XProps) {
  const { resolvedTheme } = useTheme();
  const tweetId = url.split('/').pop() as string;

  if (!resolvedTheme) {
    return null;
  }

  return (
    <div
      className={cn('mx-auto my-8 w-fit rounded-xl shadow-md', className)}
      data-theme={resolvedTheme}
    >
      <Tweet id={tweetId} />
    </div>
  );
}
