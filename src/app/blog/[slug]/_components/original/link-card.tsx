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
          'not-prose border-foreground/5 my-6 flex h-[120px] justify-between overflow-hidden rounded-lg border shadow-md',
          '[&>div]:first:transition-colors hover:[&>div]:first:bg-blue-50 dark:hover:[&>div]:first:bg-blue-100',
        )}
      >
        <div className="bg-background dark:bg-foreground flex w-full min-w-[240px] flex-col justify-between p-4">
          <p className="overflow-hidden text-base font-medium text-nowrap text-ellipsis text-slate-900">
            {meta.title}
          </p>
          <p className="overflow-hidden text-sm font-normal text-nowrap text-ellipsis text-slate-700">
            {meta.description}
          </p>
          <div className="flex items-center gap-2">
            {meta.icon && (
              <Image
                unoptimized
                height={20}
                width={20}
                src={meta.icon}
                alt={meta.title}
                className="size-5 object-cover object-center"
              />
            )}
            <p className="text-xs font-medium text-slate-900">
              {meta.provider}
            </p>
          </div>
        </div>
        {meta.image && (
          <div className="border-foreground/5 min-w-[240px] border-l">
            <Image
              unoptimized
              width={240}
              height={120}
              src={meta.image}
              alt={meta.title}
              className="h-full w-full object-cover object-left"
            />
          </div>
        )}
      </a>
    );
  }

  return (
    <a href={url} target="_blank" rel="noreferrer">
      {url}
    </a>
  );
}
