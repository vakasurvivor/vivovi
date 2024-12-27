import { cn } from '@/utils/cn';
import { fetchMetadata } from '@/utils/fetch-metadata';
import Image from 'next/image';

interface LinkCardProps {
  url: string;
}

export default async function LinkCard({ url }: LinkCardProps) {
  const meta = await fetchMetadata(url);

  if (meta) {
    return (
      <a
        href={meta.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'not-prose my-6 flex h-[120px] justify-between overflow-hidden rounded-lg border border-foreground/5 shadow-md',
          'first:[&>div]:transition-colors first:[&>div]:hover:bg-blue-50 first:[&>div]:hover:dark:bg-blue-100',
        )}
      >
        <div className="flex w-full min-w-[240px] flex-col justify-between bg-background p-4 dark:bg-foreground">
          <p className="overflow-hidden text-ellipsis text-nowrap text-base font-medium text-slate-900">
            {meta.title}
          </p>
          <p className="overflow-hidden text-ellipsis text-nowrap text-sm font-normal text-slate-700">
            {meta.description}
          </p>
          <div className="flex items-center gap-2">
            <Image
              unoptimized
              height={20}
              width={20}
              src={meta.icon}
              alt={meta.title}
              className="size-5 object-cover object-center"
            />
            <p className="text-xs font-medium text-slate-900">
              {meta.provider}
            </p>
          </div>
        </div>
        <div className="min-w-[240px] border-l border-foreground/5">
          <Image
            unoptimized
            width={240}
            height={120}
            src={meta.image}
            alt={meta.title}
            className="h-full w-full object-cover object-left"
          />
        </div>
      </a>
    );
  }

  return (
    <a href={url} target="_blank" rel="noreferrer">
      {url}
    </a>
  );
}
