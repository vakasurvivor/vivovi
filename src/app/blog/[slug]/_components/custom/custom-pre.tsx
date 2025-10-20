import CopyButton from '@/components/copy-button';
import { cn } from '@/utils';
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
        <>
          <CopyButton
            value={text}
            className={cn(
              'absolute right-3 z-30',
              hasCustomFigcaption === 'true'
                ? 'top-2.75'
                : 'top-5 backdrop-blur-xs',
            )}
          />
          <div className="relative mx-1.5 overflow-hidden rounded-sm shadow-[0_1.5px_2px_0_theme(colors.black/32%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/4%)]">
            <pre
              {...props}
              className={cn(
                props.className,
                'bg-shiki-background !m-0 !rounded-sm',
                // hasCustomFigcaption === 'true' && 'rounded-t-none!',
              )}
            >
              {props.children}
            </pre>
          </div>
        </>
      )}

      {!activeRehypePrettyCode && <pre {...props} />}
    </>
  );
}
