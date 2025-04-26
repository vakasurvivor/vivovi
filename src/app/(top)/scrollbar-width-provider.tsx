'use client';

import { debounce } from 'es-toolkit';
import { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
}

/**
 * スクロールバーの幅をカスタムプロパティとして提供するコンポーネント。
 *
 * このコンポーネントは、スクロールバーの幅を計算し、CSSカスタムプロパティ `--scrollbar-width` に設定します。
 * また、ブラウザのリサイズイベントに対応してスクロールバーの幅を再計算します。
 *
 * 特徴:
 * - `CSS.registerProperty` を使用してカスタムプロパティを登録し、より詳細な制御を可能にします。
 * - 古いブラウザではフォールバックとして従来のカスタムプロパティ構文を使用します。
 * - `debounce` を使用してリサイズイベントの処理を最適化します。
 *
 * @param {Props} props - 子コンポーネントを含むプロパティ。
 * @returns {JSX.Element} 子コンポーネントをラップした要素。
 */
export function ScrollbarWidthProvider({ children }: Props) {
  // React開発時の<StrictMode>による CSS.registerProperty の重複定義を防ぐ
  const isPropertyRegistered = useRef(false);

  useEffect(() => {
    if (CSS.registerProperty && !isPropertyRegistered.current) {
      // CSS.registerProperty() カスタムプロパティをより詳細に制御できる
      CSS.registerProperty({
        name: '--scrollbar-width',
        syntax: '<length>',
        inherits: true,
        initialValue: `${getScrollbarWidth()}px`,
      });
      isPropertyRegistered.current = true;
    } else if (!CSS.registerProperty) {
      // 古いブラウザーを考慮して従来のカスタムプロパティ構文を使用したフォールバック
      setCustomProperty('--scrollbar-width');
    }

    // 計算量にdebounce関数で考慮しながら、スクロールバーの状態変化によるカスタムプロパティの再定義
    const handleResize = debounce(
      () => setCustomProperty('--scrollbar-width'),
      200,
    );
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{children}</>;
}

/**
 * 全画面に表示される垂直スクロールバーの横幅を求める関数
 * @return 垂直スクロールバーの横幅
 */
function getScrollbarWidth(): number {
  const withScrollbar = window.innerWidth;
  const withOutScrollbar = document.body.clientWidth;
  return withScrollbar - withOutScrollbar;
}

/**
 * 定義済みのカスタムプロパティの値を取得する関数
 * @param propertyName - カスタムプロパティ名（例 --example-name)
 * @return 定義済みのカスタムプロパティの値
 */
function getCustomProperty(propertyName: string): number {
  const computedStyle = getComputedStyle(document.documentElement);
  const currentProperty = computedStyle.getPropertyValue(propertyName);
  return parseFloat(currentProperty);
}

/**
 * 現在値でカスタムプロパティを定義、もしくは再定義する関数
 * @param propertyName - カスタムプロパティ名（例 --example-name)
 */
function setCustomProperty(propertyName: string): void {
  const customProperty = getCustomProperty(propertyName);
  const scrollbarWidth = getScrollbarWidth();

  if (customProperty !== scrollbarWidth) {
    document.documentElement.style.setProperty(
      propertyName,
      `${scrollbarWidth}px`,
    );
  }
}
