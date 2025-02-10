import { OTHER_URL_PATTERN } from '@/utils/regex';
import { IterationCw } from 'lucide-react';
import { type ComponentPropsWithoutRef } from 'react';
import ExternalLink from '../original/external-link';

// TSDoc
/**
 * 「Rehype Pretty Code」の仕様により、コードブロックから作成されるpre要素には、
 * 自動的にカスタムデータ属性[data-theme]が追加される。そのpre要素をカスタマイズする関数
 *
 * @param {ComponentPropsWithoutRef<'a'>} props - MDXコードブロック編集によってpreJSX要素に渡されるprops
 * @returns {JSX.Element} - カスタマイズされたpreJSX要素
 */
export default function Anchor(props: ComponentPropsWithoutRef<'a'>) {
  // 外部参照
  if (
    props.href &&
    props.href !== props.children &&
    OTHER_URL_PATTERN.test(props.href)
  ) {
    return <ExternalLink {...props} />;
  }

  // 目次脚注
  if (props.href === '#footnote-label' && props.children === 'Footnotes') {
    const { children, ...restProps } = props;
    return <a {...restProps}>脚注</a>;
  }

  // 文末脚注
  if (props.className === 'data-footnote-backref') {
    const { children, ...restProps } = props;

    function getLastNumber(str: any) {
      const match = str.match(/\d+$/);
      return match ? match[0] : null;
    }
    return (
      <a
        {...restProps}
        className="whitespace-nowrap no-underline transition-colors hover:text-blue-600 dark:hover:text-blue-500 hover:[&>svg]:rotate-90"
      >
        <IterationCw
          className="inline-block size-[1em] align-[-12%] transition-transform"
          strokeWidth="2.25"
        />
        <sup>{getLastNumber(props['aria-label'])}</sup>
        <span className="sr-only">本文へ戻る</span>
      </a>
    );
  }

  return <a {...props} />;
}

Anchor.displayName = 'Anchor';
