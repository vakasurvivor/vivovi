import { Post, posts } from '#site/content';
import BreadcrumbTrail from '@/components/breadcrumb-trail';
import { cn } from '@/utils/cn';
import { format } from 'date-fns';
import { FilePen, RefreshCcw } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXContent } from './_components/mdx-content';

// 動的ルーティングのために静的パスを生成
export async function generateStaticParams() {
  return posts.map(post => ({
    slug: post.slug,
  }));
}

type ParamsProps = {
  params: { slug: string };
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
        <BreadcrumbTrail title={post.title} className="mt-8 backdrop-blur-sm" />
        <header>
          <WritingDate createdAt={post.createdAt} updatedAt={post.updatedAt} />
          <Image
            src={post.eyecatch.src}
            width={post.eyecatch.width}
            height={post.eyecatch.height}
            alt={post.title}
            className="not-prose rounded-lg border border-border/40"
          />
          <Title title={post.title} />
        </header>
        <PostContent content={post.content} components={components} />
      </>
    );
  } catch (error) {
    return (
      <>
        <BreadcrumbTrail title={post.title} />
        <header>
          <WritingDate createdAt={post.createdAt} updatedAt={post.updatedAt} />
          <Image
            src={post.eyecatch.src}
            width={post.eyecatch.width}
            height={post.eyecatch.height}
            alt={post.title}
            className="rounded-lg border border-border/40"
          />
          <Title title={post.title} />
        </header>
        <PostContent content={post.content} />
      </>
    );
  }
}

// Component

const Title = ({ title }: Pick<Post, 'title'>) => (
  <h2
    className={'my-6 rounded-md backdrop-blur-sm'}
    dangerouslySetInnerHTML={{ __html: title }}
  />
);

const WritingDate = ({
  createdAt,
  updatedAt,
  className,
}: Pick<Post, 'createdAt' | 'updatedAt'> & { className?: string }) => {
  return (
    <div className={cn('flex justify-end gap-4 pb-2 pt-4', className)}>
      <div className="flex items-center gap-1">
        <FilePen size={16} />
        <p className="!m-0 text-sm font-medium [font-feature-settings:'tnum']">
          <time dateTime={format(new Date(createdAt), 'yyyy-MM-dd')}>
            {format(new Date(createdAt), 'yyyy年MM月dd日')}
          </time>
        </p>
      </div>

      {updatedAt && (
        <div className="flex items-center gap-1">
          <RefreshCcw size={16} />
          <p className="!m-0 text-sm [font-feature-settings:'tnum']">
            <time
              dateTime={format(new Date(updatedAt), 'yyyy-MM-dd')}
              className="[font-feature-settings:tnum]"
            >
              {format(new Date(updatedAt), 'yyyy年MM月dd日')}
            </time>
          </p>
        </div>
      )}
    </div>
  );
};

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
