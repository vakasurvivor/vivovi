import { cn } from '@/utils/cn';
import { getSvgIconCdnUrl } from '@/utils/get-svg-icon';
import Image from 'next/image';
import { type ComponentPropsWithoutRef } from 'react';

interface CustomFigcaptionProps extends ComponentPropsWithoutRef<'figcaption'> {
  'data-language'?: string;
  'data-rehype-pretty-code-title'?: string;
  'data-rehype-pretty-code-caption'?: string;
}

// カスタムデータ属性の注意点
/*
  MDXコードブロックに、caption属性、またはtitle属性を指定するとfigure要素内のfigcaption要素に
  カスタムデータ属性が追加される。注意点として属性が競合した場合は、常にcaption属性が優先される。

  title属性のみ設定した場合
  例：<figcaption data-rehype-pretty-code-title ...>

  caption属性のみ設定した場合
  例：<figcaption data-rehype-pretty-code-caption ...>

  title属性とcaption属性を同時に設定した場合
  常にcaption属性が優先され、title属性はfigure要素内のdiv要素に追加される。
  例：<figcaption data-rehype-pretty-code-caption ...>
    ：<div data-rehype-pretty-code-title ...>
*/

/** TSDoc
 * 「Rehype Pretty Code」の仕様により、コードブロックから作成されるfigcaption要素には、
 * 自動的にカスタムデータ属性[data-rehype-pretty-code-(title or caption)]が追加される。
 * そのfigcaption要素をカスタマイズする関数
 *
 * @param props - MDXコードブロック編集によってfigcaptionJSX要素に渡されるprops
 * @returns  - カスタマイズされたfigcaptionJSX要素
 * @see {@link https://rehype-pretty.pages.dev/#titles |「Rehype Pretty Code」仕様書}
 */

export default function CustomFigcaption(props: CustomFigcaptionProps) {
  /*
    figcaption要素に、カスタムデータ属性[data-language]が付与されたかを確認する
  */
  const activeRehypePrettyCode: boolean = props.hasOwnProperty('data-language');

  /*
    figcaption要素に、カスタムデータ属性の[data-rehype-pretty-code-title]と
    [data-rehype-pretty-code-caption]のどちらが付与されたかを確認する
  */

  const hasTitle: boolean =
    activeRehypePrettyCode &&
    props.hasOwnProperty('data-rehype-pretty-code-title');

  const hasCaption: boolean =
    activeRehypePrettyCode &&
    props.hasOwnProperty('data-rehype-pretty-code-caption');

  let cdnUrl: string | undefined; // CDN経由で「SimpleIcons」を取得するためのURLを代入

  if (hasTitle) {
    // [data-language]に指定された拡張子を利用してURLを作成
    const extension = props['data-language'] as string;
    cdnUrl = getSvgIconCdnUrl(extension);
  }

  if (hasCaption) {
    // 設定された「SimpleIcons」に存在するSVG名を取得してURLを作成
    const iconName = props.children as string;
    cdnUrl = getSvgIconCdnUrl(iconName);
  }

  return (
    <>
      {hasTitle && (
        // 祖先のfigure要素に対して位置指定
        <figcaption
          {...props}
          className={cn(
            'absolute left-0 top-0 z-10 mt-0',
            'rounded-t-lg',
            'h-11 w-full',
            'bg-shiki-light-bg dark:bg-shiki-dark-bg',
            'border border-b-0 border-foreground/5',
          )}
        >
          <div className="flex items-center gap-2 px-4 py-2.5">
            <Image
              unoptimized
              height={20}
              width={20}
              src={`${cdnUrl}`}
              alt={'Logo Icon'}
              className="my-0"
            />
            <h6 className="font-inter text-sm leading-snug text-foreground dark:text-foreground">
              {props.children}
            </h6>
          </div>
        </figcaption>
      )}

      {hasCaption && (
        // 祖先のfigure要素に対して位置指定
        <figcaption
          {...props}
          className="absolute left-0 top-0 z-10 mx-4 mt-0 h-11 w-[20px]"
        >
          <div className="absolute top-1/2 -translate-y-1/2">
            <Image
              unoptimized
              height={20}
              width={20}
              src={`${cdnUrl}`}
              alt={'Logo Icon'}
              className="my-0"
            />
          </div>
        </figcaption>
      )}

      {!activeRehypePrettyCode && <figcaption {...props} />}
    </>
  );
}
