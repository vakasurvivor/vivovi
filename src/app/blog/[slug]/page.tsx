import { Post, posts } from '#site/content';
import BreadcrumbTrail from '@/components/breadcrumb-trail';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';
import { format } from 'date-fns';
import {
  BookOpenText,
  CalendarDays,
  CircleUserRound,
  FilePen,
  RefreshCcw,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXContent } from './_components/mdx-content';

// 動的ルーティングのために静的パスを生成
export async function generateStaticParams() {
  return posts.map(post => ({
    slug: post.slug,
  }));
}

type ParamsProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find(i => i.slug === slug);

  return {
    title: post?.title,
    description: post?.description,
  };
}

export default async function PostPage({ params }: ParamsProps) {
  const { slug } = await params;
  const post = posts.find(i => i.slug === slug);
  if (!post) return notFound();

  try {
    const components = await import(
      `../../../../content/posts/${slug}/_components/index`
    );

    return (
      <>
        <header>
          <BreadcrumbTrail
            title={post.title}
            className="my-8 backdrop-blur-xs"
          />
          <div className="flex items-center justify-between gap-4 pb-3 max-sm:gap-3">
            <WritingDate
              createdAt={post.createdAt}
              updatedAt={post.updatedAt}
            />
            <EditPage slug={post.slug} />
          </div>
          <Image
            src={post.eyecatch.src}
            width={post.eyecatch.width}
            height={post.eyecatch.height}
            alt={post.title}
            className="not-prose rounded-lg border border-border/40"
          />
          <Title title={post.title} />
          <Outline description={post.description} target={post.target} />
        </header>
        <PostContent content={post.content} components={components} />
      </>
    );
  } catch (error) {
    return (
      <>
        <header>
          <BreadcrumbTrail
            title={post.title}
            className="mt-8 backdrop-blur-xs"
          />
          <div className="flex items-center justify-end gap-4 pb-3 pt-2 max-sm:flex-col max-sm:items-end max-sm:gap-3">
            <WritingDate
              createdAt={post.createdAt}
              updatedAt={post.updatedAt}
            />
            <EditPage slug={post.slug} />
          </div>
          <Image
            src={post.eyecatch.src}
            width={post.eyecatch.width}
            height={post.eyecatch.height}
            alt={post.title}
            className="not-prose rounded-lg border border-border/40"
          />
          <Title title={post.title} />
        </header>
        <PostContent content={post.content} />
      </>
    );
  }
}

// コンポーネント

const WritingDate = ({
  createdAt,
  updatedAt,
  className,
}: Pick<Post, 'createdAt' | 'updatedAt'> & { className?: string }) => {
  return (
    <div className={cn('flex justify-end gap-4', className)}>
      <div className="flex items-center gap-1">
        <CalendarDays size={16} />
        <p className="m-0! text-sm font-medium [font-feature-settings:'tnum']">
          <time dateTime={format(new Date(createdAt), 'yyyy-MM-dd')}>
            {format(new Date(createdAt), 'yyyy/MM/dd')}
          </time>
        </p>
      </div>

      {updatedAt && (
        <div className="flex items-center gap-1">
          <RefreshCcw size={16} />
          <p className="m-0! text-sm [font-feature-settings:'tnum']">
            <time
              dateTime={format(new Date(updatedAt), 'yyyy-MM-dd')}
              className="[font-feature-settings:tnum]"
            >
              {format(new Date(updatedAt), 'yyyy/MM/dd')}
            </time>
          </p>
        </div>
      )}
    </div>
  );
};

const EditPage = ({
  slug,
  className,
}: Pick<Post, 'slug'> & { className?: string }) => {
  return (
    <Button
      variant="outline"
      className={cn(
        'h-fit rounded-sm bg-shiki-light-bg px-1.5 py-1 dark:bg-shiki-dark-bg',
        className,
      )}
      asChild
    >
      <Link
        className="gap-[3px] no-underline"
        target="_blank"
        rel="noopener noreferrer"
        href={
          process.env.NODE_ENV === 'development'
            ? `vscode://file:///Users/tomoh/Desktop/VIVOVI/content/posts/${slug}/index.mdx`
            : `https://github.com/vakasurvivor/vivovi/blob/main/content/posts/${slug}/index.mdx`
        }
      >
        <FilePen size={16} />
        {process.env.NODE_ENV === 'development' ? '編集する' : '修正する'}
      </Link>
    </Button>
  );
};

const Title = ({ title }: Pick<Post, 'title'>) => (
  <h2
    className={'my-6 rounded-md backdrop-blur-xs'}
    dangerouslySetInnerHTML={{ __html: title }}
  />
);

const Outline = ({
  description,
  target,
}: Pick<Post, 'description' | 'target'>) => (
  <div className="mb-6 mt-10">
    <div className="relative ml-4 mt-2 rounded-md border border-border/40 bg-shiki-light-bg shadow-md dark:bg-shiki-dark-bg">
      <h3 className="not-prose absolute flex -translate-x-[18px] -translate-y-1/2 items-center gap-2 rounded-sm bg-blue-600 px-2 py-[2px] text-white shadow-md dark:bg-blue-700 dark:text-[#cbd5e1]">
        <CircleUserRound size={20} />
        対象読者
      </h3>
      <p className="mx-4 mb-3 mt-6 text-sm">{target}</p>
    </div>
    <div className="relative ml-4 mt-8 rounded-md border border-border/40 bg-shiki-light-bg shadow-md dark:bg-shiki-dark-bg">
      <h3 className="not-prose px2 absolute flex -translate-x-[18px] -translate-y-1/2 items-center gap-2 rounded-sm bg-blue-600 py-[2px] text-white shadow-md dark:bg-blue-700 dark:text-[#cbd5e1]">
        <BookOpenText size={20} />
        記事概要
      </h3>
      <p className="mx-4 mb-3 mt-6 text-sm">{description}</p>
    </div>
  </div>
);

const PostContent = ({
  content,
  components,
}: Pick<Post, 'content'> & {
  components?: Record<string, React.ComponentType>;
}) => {
  return (
    <div id="content">
      <MDXContent code={content} components={components} />
    </div>
  );
};
