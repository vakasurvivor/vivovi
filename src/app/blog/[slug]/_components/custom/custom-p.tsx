import { X_URL_PATTERN, YOUTUBE_URL_PATTERN } from '@/utils/regex';
import React, {
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
} from 'react';
import * as Original from '../original';

interface CustomParagraphProps extends ComponentPropsWithoutRef<'p'> {}

/**
 * @param {CustomParagraphProps} props - p要素に渡されるprops
 * @returns {Promise<JSX.Element>} - カスタマイズされたp要素
 */

export default async function P(props: CustomParagraphProps) {
  // props.childrenが単一の<a>要素であるかを確認
  if (
    !Array.isArray(props.children) &&
    typeof props.children === 'object' &&
    props.children !== null &&
    typeof (props.children as ReactElement).type === 'function' &&
    (props.children as any).type.name === 'Anchor'
  ) {
    const anchorElement = props.children as ReactElement;
    const {
      href: anchorHref,
      children: anchorChildren,
    }: { href: string; children: ReactNode } = anchorElement.props;

    // href属性と<a>要素のテキストと一致している場合
    if (anchorHref === anchorChildren) {
      if (YOUTUBE_URL_PATTERN.test(anchorHref)) {
        return (
          <Original.YouTubeVideo
            videoid={anchorHref.match(YOUTUBE_URL_PATTERN)![1]}
          />
        );
        // [0]: 正規表現全体に一致する部分（マッチした全体の文字列）
        // [1]: 最初のキャプチャグループに一致する部分（この場合、videoid）
      }

      if (X_URL_PATTERN.test(anchorHref)) {
        return <Original.XTweet url={anchorHref} />;
      }

      // if (OTHER_URL_PATTERN.test(anchorHref)) {
      //   return <Original.LinkCard url={anchorHref} />;
      // }
      return <Original.LinkCard url={anchorHref} />;
    }
  }

  // shiki span
  if (
    Array.isArray(props.children) &&
    props.children !== null &&
    props.children[0].type === 'span'
  ) {
    const spanElement = props.children[0];
    const updatedSpanElement = React.cloneElement(spanElement, {
      ...spanElement.props,
      'data-first-span': '',
    });

    let childrenWithNewSpan = [updatedSpanElement, ...props.children.slice(1)];

    return <p {...props}> {childrenWithNewSpan} </p>;
  }

  // code
  if (
    Array.isArray(props.children) &&
    props.children !== null &&
    props.children[0].type === 'code'
  ) {
    const codeElement = props.children[0];
    const updatedCodeElement = React.cloneElement(codeElement, {
      ...codeElement.props,
      'data-first-span': '',
    });

    let childrenWithNewCode = [updatedCodeElement, ...props.children.slice(1)];

    return <p {...props}> {childrenWithNewCode} </p>;
  }

  // デフォルトの<p>要素を返す
  return <p {...props} />;
}
