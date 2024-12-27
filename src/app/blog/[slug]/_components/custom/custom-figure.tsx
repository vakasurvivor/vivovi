import { cn } from '@/utils/cn';
import {
  type ComponentPropsWithoutRef,
  type ReactElement,
  Children,
  cloneElement,
} from 'react';
import CustomFigcaption from './custom-figcaption';
import CustomPre from './custom-pre';

interface CustomFigureProps extends ComponentPropsWithoutRef<'figure'> {
  'data-rehype-pretty-code-figure'?: string;
}

/**
 * 「Rehype Pretty Code」の仕様により、コードブロックから作成されるfigure要素には、
 * カスタムデータ属性[data-rehype-pretty-code-figure]が追加される。
 *
 * @param {CustomFigureProps} props - figureJSX要素に渡されるprops
 * @returns {JSX.Element} - カスタマイズされたfigureJSX要素
 * @see {@link https://rehype-pretty.pages.dev/ |「Rehype Pretty Code」仕様書}
 */

export default function CustomFigure(props: CustomFigureProps) {
  // RehypePrettyCodeが有効かを確認する
  const activeRehypePrettyCode = props.hasOwnProperty(
    'data-rehype-pretty-code-figure',
  );

  // children を配列に変換する
  const elements = Children.toArray(props.children) as ReactElement[];

  // 子要素にCustomFigcaptionコンポーネントの有無を確認する
  const hasCustomFigcaption: boolean = elements.some(
    el => el.type === CustomFigcaption,
  );

  // CustomPreコンポーネントを取得する
  const customPreEl = elements.find(el => el.type === CustomPre);

  // CustomPreコンポーネントのpropsを拡張するためのオブジェクトを作成する
  const newCustomPreProps = {
    ...customPreEl?.props,
    'has-figcaption': hasCustomFigcaption.toString(),
  };

  // CustomPreコンポーネントのpropsが更新された新しいchildren
  const updatedChildren = elements.map(el => {
    if (el.type === CustomPre) {
      return cloneElement(el, newCustomPreProps);
    }
    return el;
  });

  return (
    <>
      {activeRehypePrettyCode && (
        <figure
          {...props}
          className={cn(
            'relative w-full overflow-hidden rounded-lg shadow-md',
            hasCustomFigcaption && '!pt-11',
          )}
        >
          {updatedChildren}
        </figure>
      )}

      {activeRehypePrettyCode || <figure {...props} />}
    </>
  );
}
