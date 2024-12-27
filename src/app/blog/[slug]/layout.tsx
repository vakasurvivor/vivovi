import { cn } from '@/utils/cn';
import SideScrollToc from './_components/side-scroll-toc';

export default function PostPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="prose prose-slate dark:prose-invert">
      <div
        className={cn(
          'grid grid-cols-[1fr_minmax(min-content,calc(39em_+_var(--playground-add-width)))_1fr] gap-x-4',
        )}
      >
        <article className="col-[2/3] max-w-[calc(39em+var(--playground-add-width))] @container/article">
          <Post className="mx-auto max-w-[39em]">{children}</Post>
        </article>
        <SideScrollToc
          className={cn(
            'not-prose content-toc mx-auto max-xl:hidden',
            'sticky top-1/2 -translate-y-1/2',
            'col-[3/4] h-fit w-[calc(300px+4rem)]',
          )}
        />
      </div>

      <div
        className={cn(
          'mb-4 w-full border-y border-foreground/5 bg-shiki-light-bg shadow-md dark:bg-shiki-dark-bg',
          'grid grid-cols-[1fr_minmax(min-content,calc(39em_+_var(--playground-add-width)))_1fr] gap-x-4',
        )}
      >
        <div className="col-[2/3] max-w-[calc(39em+var(--playground-add-width))]">
          <div className="mx-auto max-w-[39em] pb-9 pt-5 text-justify">
            <p className="text-sm [text-indent:1em;]">
              最後までお読みいただきありがとうございます。拙い文章ではありますが、少しでも皆様のお役に立てることができれば幸いです。
            </p>
            <p className="mb-0 text-sm [text-indent:1em;]">
              記事に誤りや認識の違いがございましたら、X（旧Twitter）または、GitHubを通じてご指摘いただけると助かります。可能な限り、修正や訂正を行います。
            </p>
            <p className="mt-2 text-right text-sm">ー vakasurvivor</p>

            <p className="mx-auto my-0 w-fit font-crazyMetro text-8xl leading-none text-[var(--tw-prose-bold)] max-sm:text-[15vw]">
              vakasurvivor
            </p>
          </div>
        </div>
        <div className="col-[3/4] h-fit w-[calc(300px+4rem)] max-xl:hidden" />
      </div>
    </main>
  );
}

const Post = ({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) => {
  return (
    <div
      className={cn(
        // headings
        ['prose-headings:scroll-mt-16'],
        // h2
        [
          'prose-h2:[font-feature-settings:"palt"]',
          'prose-h2:[word-break:auto-phrase]',
        ],
        // h3
        ['prose-h3:[font-feature-settings:"palt"]'],
        // h4
        ['prose-h4:text-lg'],
        // h5
        [
          'prose-h5:w-fit',
          'prose-h5:text-base',
          'prose-h5:font-medium',
          'prose-h5:my-5',
          'prose-h5:text-[--tw-prose-headings]',
          'prose-h5:border-b',
          'prose-h5:border-[--tw-prose-hr]',
        ],
        // p
        [
          'prose-p:[line-break:strict]',
          'prose-p:[word-break:normal]',
          'prose-p:[overflow-wrap:anywhere]',
          'has-[img]:prose-p:text-right',
          'has-[img+sup]:prose-p:leading-none',
          'has-[img+sup]:prose-p:text-sm',
          'has-[img+sup]:prose-p:text-[--tw-prose-captions]',
        ],
        // a
        [
          'prose-a:scroll-mt-32',
          'prose-a:font-normal',
          'prose-a:text-current',
          'prose-a:decoration-1',
          'prose-a:underline-offset-2',
          'prose-a:transition-colors',
          'prose-a:duration-300',
          'hover:prose-a:text-blue-600',
          'hover:prose-a:dark:text-blue-500',
          'hover:prose-a:decoration-transparent',
        ],
        // ul / ol
        ['prose-ul:pl-6'],
        ['prose-ol:pl-6'],
        // li
        [
          'prose-li:marker:font-semibold',
          'prose-li:marker:text-blue-600',
          'prose-li:marker:dark:text-blue-500',
        ],
        // blockquote
        ['prose-blockquote:font-normal', 'prose-blockquote:border-none'],
        // pre
        ['prose-pre:rounded-lg', 'prose-pre:px-0', 'prose-pre:py-3'],
        // code
        [
          'prose-code:font-code',
          'prose-code:font-[425]',
          'prose-code:[font-feature-settings:"ss01"_on,"ss02"_on,"ss03"_on,"ss04"_on,"ss05"_on,"cv02"_on,"cv04"_on]',
          'prose-code:before:content-none',
          'prose-code:after:content-none',
        ],
        // strong
        [
          'prose-strong:font-medium',
          'prose-strong:dark:font-normal',
          '[&>a]:prose-strong:font-medium',
          'prose-strong:px-[1px]',
          'prose-strong:bg-gradient-to-b',
          'prose-strong:from-transparent',
          'prose-strong:from-65%',
          'prose-strong:to-purple-300',
          'prose-strong:to-65%',
          'prose-strong:dark:to-purple-800/75',
        ],
        ['prose-b:font-medium'],
        // table
        ['prose-table:my-0'],
        // thead
        ['prose-thead:bg-shiki-light-bg', 'dark:prose-thead:bg-shiki-dark-bg'],
        // ['prose-tr:border'],
        // th
        ['prose-th:py-2', 'prose-th:px-4'],
        // td
        ['prose-td:px-4'],
        className,
      )}
    >
      {children}
    </div>
  );
};
