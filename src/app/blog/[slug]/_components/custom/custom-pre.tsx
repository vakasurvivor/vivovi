import CopyButton from '@/components/copy-button';
import { cn } from '@/utils/cn';
import { type ComponentPropsWithoutRef } from 'react';
import Children from 'react-children-utilities';

interface CustomPreProps extends ComponentPropsWithoutRef<'pre'> {
  'data-theme'?: string;
  'has-figcaption'?: string;
}

// TSDoc
/**
 * 「Rehype Pretty Code」の仕様により、コードブロックから作成されるpre要素には、
 * 自動的にカスタムデータ属性[data-theme]が追加される。そのpre要素をカスタマイズする関数
 *
 * @param props MDXコードブロック編集によってpreJSX要素に渡されるprops
 * @returns カスタマイズされたpreJSX要素
 * @see {@link https://rehype-pretty.pages.dev/ |「Rehype Pretty Code」仕様書}
 */

export default function CustomPre(props: CustomPreProps) {
  // RehypePrettyCodeが有効かを確認
  const activeRehypePrettyCode = props.hasOwnProperty('data-theme');

  // 兄弟要素にfigcaptionが存在しているか確認
  const hasCustomFigcaption = props['has-figcaption'];

  // コピーテキストを取得
  const text = Children.onlyText(props.children);

  return (
    <>
      {activeRehypePrettyCode && (
        <pre
          {...props}
          className={cn(
            props.className,
            'border-foreground/5 border',
            'bg-shiki-light-bg dark:bg-shiki-dark-bg',
            hasCustomFigcaption === 'true' && 'rounded-t-none!',
          )}
        >
          <CopyButton
            value={text}
            className={cn(
              'absolute top-3.75 right-3 z-30',
              hasCustomFigcaption === 'true' ? 'top-3' : 'top-3.75',
            )}
          />
          {props.children}
        </pre>
      )}

      {!activeRehypePrettyCode && <pre {...props} />}
    </>
  );
}
