import { Post } from '#site/content';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/utils/cn';
import { format } from 'date-fns';
import { FilePen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import LikeButton from './likeButton';

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
  } = post;
  return (
    <Card
      className={cn(
        'bg-shiki-background border-border/40 flex flex-row-reverse justify-between overflow-hidden drop-shadow-md',
        'max-md:flex-col-reverse',
      )}
    >
      <CardHeader className="@container w-[calc(100%-320px)] justify-between max-md:w-full max-md:grow">
        <CardTitle className="mb-4 text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
        <div className="mt-4! flex items-center justify-end gap-4 @max-[280px]:flex-col @max-[280px]:items-end">
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-2 text-sm [font-feature-settings:'tnum']">
              <FilePen size={16} />
              <time dateTime={format(new Date(createdAt), 'yyyy-MM-dd')}>
                {format(new Date(createdAt), 'yyyy/MM/dd')}
              </time>
            </p>
            <LikeButton slug={slug} initialLikeCount={likeCount} />
          </div>
          <Button variant="outline" asChild>
            <Link href={permalink}>記事を読む</Link>
          </Button>
        </div>
      </CardHeader>

      <CardContent className="aspect-[4/3] w-80 overflow-hidden rounded-r-md p-0 max-md:w-full max-sm:aspect-[16/9]">
        {eyecatch && (
          <Image
            className="h-full w-full object-cover"
            src={eyecatch.src}
            width={eyecatch.width}
            height={eyecatch.height}
            alt={title}
          />
        )}
      </CardContent>
    </Card>
  );
}
