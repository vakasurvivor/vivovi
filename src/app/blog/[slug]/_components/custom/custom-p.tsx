import { X_URL_PATTERN, YOUTUBE_URL_PATTERN } from '@/utils/regex';
import React, {
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
} from 'react';
import * as Original from '../original';

type CustomParagraphProps = ComponentPropsWithoutRef<'p'>;

export default async function P(props: CustomParagraphProps) {
  const { children } = props;
  // props.childrenが単一の<a>要素であるかを確認
  if (isAnchorElement(children)) {
    const { href: anchorHref, children: anchorChildren } = children.props as {
      href: string;
      children: ReactNode;
    };

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

/**
 * a要素であるかチェックするヘルパー関数
 */
function isAnchorElement(children: ReactNode): children is ReactElement {
  return (
    !Array.isArray(children) &&
    React.isValidElement(children) &&
    typeof children.type === 'function' &&
    (children.type as React.ComponentType<any>).displayName === 'Anchor'
  );
}
