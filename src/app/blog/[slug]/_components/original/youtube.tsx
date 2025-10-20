import { cn } from '@/utils';
import { YouTubeEmbed } from '@next/third-parties/google';
interface YouTubeProps {
  videoid: string;
  width?: number;
  height?: number;
  playlabel?: string;
  className?: string;
}

export default function YouTubeVideo({
  videoid,
  className,
  ...props
}: YouTubeProps) {
  return (
    <div className={cn('my-8 overflow-hidden rounded-lg shadow-md', className)}>
      <YouTubeEmbed videoid={videoid} {...props} />
    </div>
  );
}
