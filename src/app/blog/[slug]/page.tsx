import { Post, posts } from '#site/content';
import BreadcrumbTrail from '@/components/breadcrumb-trail';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';
import { generatePostJsonLd } from '@/utils/jsonLd';
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

// Next.jsの標準APIを使用して、全記事のURLを事前生成する(SSG)
export async function generateStaticParams() {
  return posts.map(post => ({
    slug: post.slug,
  }));
}

type ParamsProps = {
  params: Promise<{ slug: string }>;
};

// 記事毎の<meta>を事前生成する (SEO)
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
  // URL から該当記事を縛り込む
  const { slug } = await params;
  const post = posts.find(i => i.slug === slug);

  // 記事が取得に失敗したら404ページに誘導
  if (!post) return notFound();

  // 記事毎の「json-LD」を動的に生成する (SEO)
  const jsonLd = generatePostJsonLd(post);

  // 記事毎に独自追加されたMDXコンポーネントを取得する
  const components = await getMdxComponents(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <Header post={post} />
      <Content content={post.content} components={components} />
    </>
  );
}

async function getMdxComponents(slug: string) {
  try {
    // 記事毎に独自追加されたMDXコンポーネントを取得する
    const components: Record<string, React.ComponentType> = await import(
      `../../../../content/posts/${slug}/_components/index`
    );
    return components;
  } catch (error) {
    return null;
  }
}

const Header = ({ post }: { post: Post }) => {
  return (
    <header>
      <BreadcrumbTrail title={post.title} className="mt-8 backdrop-blur-xs" />
      <div className="flex items-center justify-start gap-3 pt-4 pb-3">
        <WritingDate createdAt={post.createdAt} updatedAt={post.updatedAt} />
      </div>
      <Image
        src={post.eyecatch.src}
        width={post.eyecatch.width}
        height={post.eyecatch.height}
        alt={post.title}
        className="not-prose natural-shadow aspect-video rounded-lg object-cover"
      />
      <Title title={post.title} />
      <Outline description={post.description} target={post.target} />
    </header>
  );
};

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
        'bg-shiki-light-bg dark:bg-shiki-dark-bg h-fit rounded-sm px-1.5 py-1',
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
  <div className="mt-10 mb-8">
    <div className="natural-shadow bg-background dark:bg-shiki-background relative mb-8 ml-4 rounded-md">
      <h3 className="not-prose absolute flex -translate-x-[18px] -translate-y-1/2 items-center gap-2 rounded-sm bg-blue-600 px-2 py-[2px] text-white shadow-md dark:bg-blue-700 dark:text-[#cbd5e1]">
        <CircleUserRound size={20} />
        対象
      </h3>
      <p className="px-4 pt-6 pb-3 text-sm">{target}</p>
    </div>
    <div className="natural-shadow bg-background dark:bg-shiki-background relative ml-4 rounded-md">
      <h3 className="not-prose absolute flex -translate-x-[18px] -translate-y-1/2 items-center gap-2 rounded-sm bg-blue-600 px-2 py-[2px] text-white shadow-md dark:bg-blue-700 dark:text-[#cbd5e1]">
        <BookOpenText size={20} />
        概要
      </h3>
      <p className="px-4 pt-6 pb-3 text-sm">{description}</p>
    </div>
  </div>
);

const Content = ({
  content,
  components,
}: Pick<Post, 'content'> & {
  components: Record<string, React.ComponentType> | null;
}) => {
  return (
    <div id="content">
      <MDXContent code={content} components={components} />
    </div>
  );
};
