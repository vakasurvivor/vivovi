import { useEffect, useState } from 'react';

// 見出しの型を定義する。
type Heading = {
  id: string; // 見出しのID
  text: string; // 見出しのテキスト
  level: number; // 見出しのレベル（h1, h2など）
};

type TargetSelectors = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface UseToc {
  contentId: string;
  containerId?: string;
  // targetSelectors?: TargetSelectors[];
  targetSelectors?: string;
  ignoreIds?: string[];
  tocContainer?: string;
}

/**
 * コンテナ内の見出しから目次を生成するフックとスクロール位置に基づいてアクティブな見出しを追跡する。
 *
 * @param contentId 見出しを含むコンテナ要素のID
 * @param containerId スクロールイベントを観察するためのコンテナ要素のID
 * @param targetSelectors 見出しを見つけるために使用するセレクター
 * @param ignoreIds 見出しを無視するために使用するID
 * @param tocContainer 目次をレンダリングするためのコンテナ要素を見つけるためのクエリセレクター
 * @returns 見出しとアクティブな見出しのID
 *
 * @example
 * const { headings, activeId } = useToc({
 *   contentId: 'content',
 *   containerId: 'content-view',
 *   targetSelectors: 'h2, h3',
 * });
 */

export const useToc = ({
  contentId,
  containerId,
  targetSelectors = 'h2',
  ignoreIds,
  tocContainer,
}: UseToc) => {
  const [headings, setHeadings] = useState<Heading[]>([]); // 見出しの配列状態
  const [activeId, setActiveId] = useState(''); // アクティブな見出しのID状態

  useEffect(() => {
    // IntersectionObserver WebAPIのブラウザーサポートを確認する
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver is not supported by your browser.');
      return;
    }

    // 見出しを含むコンテナ要素を取得する
    const content = document.getElementById(contentId);
    if (!content) return;

    // 見出し要素をセレクターで取得し、配列としてフィルタリングする
    let headingElements = Array.from(
      content.querySelectorAll(targetSelectors),
    ).filter(heading => Boolean(heading.textContent)) as HTMLHeadingElement[];

    // すべての要素を保持するための配列を作成
    let allElements: Element[] = [];

    headingElements.forEach((heading, index) => {
      allElements.push(heading); // 現在の見出しを追加

      if (index < headingElements.length - 1) {
        // 次の見出し要素を取得
        const nextHeading = headingElements[index + 1];
        // 現在の見出しの兄弟要素を取得
        let sibling = heading.nextElementSibling;

        while (sibling && sibling !== nextHeading) {
          allElements.push(sibling); // 兄弟要素を追加
          sibling = sibling.nextElementSibling; // 次の兄弟要素に移動
        }
      }
    });

    // 見出し要素にIDを付与する
    headingElements.forEach(heading => {
      if (!heading.id && heading.textContent) {
        heading.id = encodeURIComponent(heading.textContent);
      }
    });

    // 無視するIDが指定されている場合、それに一致する見出しを除外する。
    if (ignoreIds) {
      // 見出し配列
      headingElements = headingElements.filter(
        heading => !ignoreIds.includes(heading.id),
      );
      // 全要素配列
      allElements = allElements.filter(
        heading => !ignoreIds.includes(heading.id),
      );
    }

    // 見出しの配列を状態として設定する。
    setHeadings(
      headingElements.map(heading => ({
        id: heading.id || heading.textContent!,
        text: heading.textContent!,
        level: Number(heading.tagName.replace('H', '')),
      })),
    );

    // IntersectionObserverに渡すcallback関数
    function intersectionCallback(entries: IntersectionObserverEntry[]) {
      entries.forEach(entry => {
        // 監視対象要素がルートと交差している場合
        if (entry.isIntersecting) {
          // 監視対象要素が見出し配列の任意の要素と一致しているかを確認する
          const index = headingElements.findIndex(
            heading => heading.id === entry.target.id,
          );

          if (index !== -1) {
            // 一致した場合は、その見出し要素のidをactiveIdに設定する
            setActiveId(headingElements[index].id);
          } else {
            // findClosestHeading関数に使用し、監視対象要素から最も近い見出し要素のidをactiveIdに設定する
            const closestHeading = findClosestHeading(
              entry.target,
              headingElements,
            );
            closestHeading && setActiveId(closestHeading.id);
          }
        }
      });
    }

    // IntersectionObserverに渡すoption設定
    const intersectionOption = {
      rootMargin: '0px 0px -85%',
      threshold: 0,
      root: (containerId && document.getElementById(containerId)) || null,
    };

    // IntersectionObserverを使用してスクロール位置を監視する。
    const observer = new IntersectionObserver(
      intersectionCallback,
      intersectionOption,
    );
    allElements.forEach(element => observer.observe(element));

    // クリーンアップ時にIntersectionObserverを解除する
    return () => {
      allElements.forEach(element => observer.unobserve(element));
    };
  }, [contentId, containerId, targetSelectors, ignoreIds]);

  // URLにハッシュが存在する場合、該当の見出し要素にスクロールする
  useEffect(() => {
    if (window.location.hash) {
      // URLからハッシュを取得する
      const hash = window.location.hash.slice(1);
      // ハッシュに一致するid属性を持つ見出し要素を取得する
      const headingElement = document.getElementById(hash);
      // 該当要素までスクロールする
      headingElement?.scrollIntoView({ block: 'start' });
    }
  }, []);

  // 目次を構成する要素のビュー内にアクティブな見出しが表示されるようにスクロール調整する
  useEffect(() => {
    if (tocContainer && activeId) {
      const tocContainerElements = document.querySelectorAll(
        `.${tocContainer}`,
      );
      if (!tocContainerElements.length) return;

      tocContainerElements.forEach(tocContainerElement => {
        const linkElement = tocContainerElement?.querySelector(
          `a[href="#${activeId}"]`,
        );

        if (linkElement && tocContainerElement) {
          const targetRect = linkElement.getBoundingClientRect();
          const parentRect = tocContainerElement.getBoundingClientRect();
          const relativeTop =
            targetRect.top - parentRect.top + tocContainerElement.scrollTop;
          tocContainerElement.scrollTop = relativeTop;
        }
      });
    }
  }, [tocContainer, activeId]);

  return { headings, activeId };
};

/**
 * 最も近い見出しを見つける関数。
 *
 * @param element 現在の要素
 * @param headingElements 見出し要素の配列
 * @returns 最も近い見出し要素
 */
const findClosestHeading = (
  element: Element,
  headingElements: HTMLHeadingElement[],
) => {
  // 現在の要素の矩形情報を取得する
  const elementRect = element.getBoundingClientRect();

  let closestHeading: Element | null = null;
  let closestDistance = Infinity;

  // 各見出しとの距離を計算し、最も近い見出しを取得する
  headingElements.forEach(heading => {
    // 見出しの矩形情報を取得する
    const headingRect = heading.getBoundingClientRect();
    // 見出しとの距離を絶対値で計算する
    const distance = Math.abs(headingRect.top - elementRect.top);

    if (distance < closestDistance) {
      // 最も近い距離を更新
      closestDistance = distance;
      // 最も近い見出しを設定
      closestHeading = heading;
    }
  });

  return closestHeading as Element | null; // 最も近い見出しを返す
};
