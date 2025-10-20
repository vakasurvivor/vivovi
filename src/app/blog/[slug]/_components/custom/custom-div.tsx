import { cn } from '@/utils';
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
            'absolute top-0 left-0 z-10',
            'h-11 w-full rounded-t-lg',
          )}
        >
          <div className="top-1/2 translate-y-1/2 pt-[1.25px] pr-4 pl-11">
            <h6 className="font-inter text-background dark:text-foreground text-sm leading-snug">
              {props.children}
            </h6>
          </div>
        </div>
      )}

      {!activeRehypePrettyCode && <div {...props} />}
    </>
  );
}
