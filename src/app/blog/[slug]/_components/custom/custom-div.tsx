import { cn } from '@/utils/cn';
import { type ComponentPropsWithoutRef } from 'react';

interface CustomDivProps extends ComponentPropsWithoutRef<'div'> {
  'data-rehype-pretty-code-title'?: string;
}

// カスタムデータ属性の注意点
/*
  MDXコードブロックにcaption属性とtitle属性を同時に設定した場合のみ、figure要素内のdiv要素に
  カスタムデータ属性[data-rehype-pretty-code-title]がが付与される。
  例：<div data-rehype-pretty-code-title ...>

  title属性のみ設定した場合は、figure要素内のfigcaption要素にカスタムデータ属性が付与される。
  例：<figcaption data-rehype-pretty-code-title ...>
*/

/**
 * 「Rehype Pretty Code」により、コードブロックから作成される<div>には、
 * 自動的にカスタムデータ属性[data-rehype-pretty-code-title]が追加される。
 * そのdiv要素をカスタマイズする関数
 *
 * @param {CustomDivProps} props - MDXコードブロック編集によってdivJSX要素に渡されるprops
 * @returns {JSX.Element} - カスタマイズされたdivJSX要素
 * @see {@link https://rehype-pretty.pages.dev/#titles |「Rehype Pretty Code」仕様書}
 */

export default function CustomDiv(props: CustomDivProps) {
  // RehypePrettyCodeが有効かを確認する
  const activeRehypePrettyCode = props.hasOwnProperty(
    'data-rehype-pretty-code-title',
  );

  return (
    <>
      {activeRehypePrettyCode && (
        // 祖先のfigure要素に対して位置指定
        <div
          {...props}
          className={cn(
            'absolute left-0 top-0 z-10',
            'h-11 w-full rounded-t-lg',
            'border border-b-0 border-foreground/5',
            'bg-shiki-light-bg dark:bg-shiki-dark-bg',
          )}
        >
          <div className="top-1/2 translate-y-1/2 pl-11 pr-4 pt-[1.25px]">
            <h6 className="font-inter text-sm leading-snug text-foreground dark:text-foreground">
              {props.children}
            </h6>
          </div>
        </div>
      )}

      {!activeRehypePrettyCode && <div {...props} />}
    </>
  );
}
