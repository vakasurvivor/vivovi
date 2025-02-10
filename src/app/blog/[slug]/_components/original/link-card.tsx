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
          'not-prose border-border my-6 flex h-30 justify-between overflow-hidden rounded-md border shadow-md',
          'bg-background dark:bg-foreground transition-colors hover:bg-blue-50 dark:hover:bg-blue-100',
        )}
      >
        <div className="flex w-full min-w-[240px] flex-col justify-between p-4">
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
                width={meta.icon.width}
                height={meta.icon.height}
                src={meta.icon.url}
                alt={`${meta.provider} Icon Image`}
                className="size-5 object-cover object-center"
              />
            )}
            <p className="text-xs font-medium text-slate-900">
              {meta.provider}
            </p>
          </div>
        </div>
        {meta.image && (
          <div
            className={cn(
              'border-border/10 h-full border-l',
              meta.image.width / meta.image.height === 1 && 'p-2',
            )}
            style={{
              aspectRatio: `${meta.image.width}/${meta.image.height}`,
            }}
          >
            <Image
              unoptimized
              width={meta.image.width}
              height={meta.image.height}
              src={meta.image.url}
              alt={`${meta.provider} Image`}
              className="object-cover object-center"
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
