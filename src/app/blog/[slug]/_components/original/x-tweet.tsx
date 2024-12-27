'use client';
import { cn } from '@/utils/cn';
import { useTheme } from 'next-themes';
import { XEmbed } from 'react-social-media-embed';

interface XProps {
  url: string;
  className?: string;
}

export default function XTweet({ url, className }: XProps) {
  const { theme } = useTheme();
  const tweetId = url.split('/').pop() as string;

  return (
    <div className={cn('mx-auto my-8 max-w-[500px] shadow-md', className)}>
      <XEmbed
        url={url}
        width={'100%'}
        twitterTweetEmbedProps={{ tweetId, options: { theme: theme } }}
      />
    </div>
  );
}
