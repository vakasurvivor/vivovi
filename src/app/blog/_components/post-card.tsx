import { Post } from '#site/content';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils';
import { format } from 'date-fns';
import { FilePen, Timer } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import LikeButton from './like-button';

type PostWithLikeCount = Post & {
  likeCount: number;
};

export default function postCard({
  post,
  className,
}: {
  post: PostWithLikeCount;
  className?: string;
}) {
  const {
    permalink,
    eyecatch,
    title,
    description,
    createdAt,
    slug,
    likeCount,
    metadata,
  } = post;

  return (
    <div
      className={cn(
        'natural-border border-b border-dashed pb-6 max-sm:pb-4',
        className,
      )}
    >
      <div
        className={cn(
          '[--height:188px] max-md:[--height:148px]',
          'grid grid-cols-[1fr_calc(var(--height)/9*16)] grid-rows-[auto_1fr_auto] gap-x-8 max-md:gap-x-6',
          'max-md:grid-rows-[auto_var(--height)_auto]',
          'max-sm:grid-cols-none max-sm:grid-rows-none',
        )}
      >
        <div className="col-[1/3] row-start-1 mb-1.5 max-sm:row-start-2 max-sm:mt-2">
          <p className="text-muted-foreground flex items-center gap-1 text-sm [font-feature-settings:'tnum']">
            <FilePen size={16} />
            <time dateTime={format(new Date(createdAt), 'yyyy-MM-dd')}>
              {format(new Date(createdAt), 'yyyy/MM/dd')}
            </time>
          </p>
        </div>
        <div className="col-start-1 row-start-2 max-sm:col-end-3 max-sm:row-start-3">
          <h3 className="lead mb-4 line-clamp-2 text-xl">{title}</h3>
          <p className="text-muted-foreground mb-0 line-clamp-4 max-sm:line-clamp-none">
            {description}
          </p>
        </div>
        <div className="col-1 row-3 mt-4 max-md:col-start-1 max-md:col-end-3 max-sm:row-start-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <p className="text-muted-foreground flex items-center gap-1 text-sm [font-feature-settings:'tnum']">
                <Timer size={16} />
                <span>{metadata.readingTime}</span> min
              </p>
              <LikeButton slug={slug} initialLikeCount={likeCount} />
            </div>
            <Button
              className="pr-3 pl-3 hover:bg-blue-700 max-md:w-[calc(var(--height)/9*16)] max-sm:w-fit"
              variant="outline"
              asChild
            >
              <Link href={permalink}>記事を読む</Link>
            </Button>
          </div>
        </div>

        <div
          className={cn(
            'pointer-events-none w-[calc(var(--height)/9*16)] max-sm:w-full',
            'rounded-md p-0',
            'col-start-2 row-start-2 row-end-4 self-start',
            'max-md:row-start-2 max-md:row-end-3',
            'max-sm:col-start-1 max-sm:col-end-3 max-sm:row-start-1 max-sm:row-end-2',
          )}
        >
          {eyecatch && (
            <Image
              className="natural-shadow aspect-[16/9] w-full rounded-md object-cover"
              src={eyecatch.src}
              width={eyecatch.width}
              height={eyecatch.height}
              alt={title}
            />
          )}
        </div>
      </div>
    </div>
  );
}
