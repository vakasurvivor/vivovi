import { cn } from '@/utils/cn';
import SideScrollToc from './_components/side-scroll-toc';

export default function PostPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="prose prose-gray dark:prose-invert relative z-50">
      <div className="grid grid-cols-[1fr_minmax(min-content,calc(39em+var(--playground-add-width)))_1fr] gap-x-4">
        <article className="@container/article col-[2/3] max-w-[calc(39em+var(--playground-add-width))]">
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

      <div className="bg-background relative my-4 overflow-hidden">
        <div
          className={cn(
            'relative z-20 w-full shadow-md',
            'grid grid-cols-[1fr_minmax(min-content,calc(39em+var(--playground-add-width)))_1fr] gap-x-4',
          )}
        >
          <div className="col-[2/3] max-w-[calc(39em+var(--playground-add-width))]">
            <div className="mx-auto max-w-[39em] pt-5 pb-9 text-justify">
              <p className="[text-indent:1em;] text-sm">
                最後までお読みいただきありがとうございます。拙い文章ではありますが、少しでもお役に立てることができれば幸いです。
              </p>
              <p className="[text-indent:1em;] mb-0 text-sm">
                記事に誤りや認識の違いがございましたら、GitHubを通じてご指摘いただけると助かります。可能な限り、修正や訂正を行います。
              </p>
              <p className="mt-2 text-right text-sm">@vakasurvivor</p>
              <p className="font-crazyMetro mx-auto !mt-8 !mb-4 w-fit text-8xl leading-none text-[var(--tw-prose-bold)] max-sm:text-[15vw]">
                vakasurvivor
              </p>
            </div>
          </div>
          <div className="col-[3/4] h-fit w-[calc(300px+4rem)] max-xl:hidden" />
        </div>
        <div className="absolute inset-0 z-10 bg-[url(/img/noise.png)] bg-left opacity-5 dark:opacity-25"></div>
        <div className="from-background absolute inset-0 z-10 bg-gradient-to-b to-transparent"></div>
        <div className="absolute bottom-0 left-0 z-10 size-50 rounded-full bg-gradient-to-b from-transparent from-30% to-blue-700 blur-[120px]"></div>
        <div className="absolute right-0 bottom-0 z-10 size-50 rounded-full bg-gradient-to-b from-transparent from-30% to-purple-700 blur-[120px]"></div>
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
        ['prose-headings:scroll-mt-20'],
        // h2
        [
          'prose-h2:[font-feature-settings:"palt"]',
          'prose-h2:[word-break:auto-phrase]',
        ],
        // h3
        ['prose-h3:[font-feature-settings:"palt"]', 'prose-h3:mt-12'],
        // h4
        ['prose-h4:text-lg', 'prose-h4:mt-10'],
        // h5
        [
          'prose-h5:w-fit',
          'prose-h5:text-base',
          'prose-h5:font-medium',
          'prose-h5:my-5',
          'prose-h5:text-(--tw-prose-headings)',
          'prose-h5:border-b',
          'prose-h5:border-(--tw-prose-hr)',
        ],
        // p
        [
          'prose-p:[line-break:strict]',
          'prose-p:[word-break:normal]',
          'prose-p:[overflow-wrap:anywhere]',
          'prose-p:has-[img]:text-right',
          'prose-p:has-[img+sup]:text-xs',
          // 'prose-p:has-[img+sup]:leading-none',
          'prose-p:has-[img+sup]:text-(--tw-prose-captions)',
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
          'prose-a:hover:text-blue-600',
          'dark:prose-a:hover:text-blue-500',
          'prose-a:hover:decoration-transparent',
        ],
        // ul / ol
        ['prose-ul:pl-6', 'prose-ol:pl-6'],
        // li
        [
          'prose-li:marker:font-semibold',
          'prose-li:marker:text-blue-600',
          'dark:prose-li:marker:text-blue-500',
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
          // 'dark:prose-strong:font-normal',
          'prose-strong:[&>a]:font-medium',
          'prose-strong:px-[1px]',
          'prose-strong:bg-linear-to-b',
          'prose-strong:from-transparent',
          'prose-strong:from-65%',
          'prose-strong:to-purple-300',
          'prose-strong:to-65%',
          'dark:prose-strong:to-purple-900',
        ],
        // b
        ['prose-b:font-medium'],
        // table
        [
          'prose-table:ring',
          'prose-table:dark:ring-ring/14',
          'prose-table:ring-ring/7',
          'prose-table:shadow-md',
          'prose-table:overflow-hidden',
          'prose-table:rounded-lg',
        ],
        // thead
        [
          'prose-thead:bg-[hsl(240,7%,95%)]',
          'prose-thead:dark:bg-[hsl(240,7%,7%)]',
          'prose-thead:border-border/7',
          'prose-thead:dark:border-border/14',
        ],
        ['prose-tr:dark:border-border/14', 'prose-tr:border-border/7'],
        // th
        ['prose-th:py-2', 'prose-th:px-4', 'prose-th:border-none'],
        // td
        ['prose-td:px-4'],
        className,
      )}
    >
      {children}
    </div>
  );
};
