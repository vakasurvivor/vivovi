import { cn } from '@/utils/cn';

export default function AboutPage() {
  return (
    <div
      className={cn(
        'mx-auto max-w-4xl py-4 backdrop-blur-xs sm:text-lg',
        '[&>p]:pt-8 [&>p]:text-justify [&>p]:[text-indent:1em]',
      )}
    >
      <h2 className="text-2xl">ABOUT</h2>
      <p>
        プログラミングとは無縁でしたが、興味本位で触りはじめたAdobeのモーショングラフィックスソフト「After
        Effect」でエクスプレッション言語をコピペしたことをきっかけに、プログラミングに興味を持ちました。英語に似た文字列を入力すると、編集中の映像が反応する。コンピュータと会話したかような錯覚に、新鮮な驚きを覚えました。
      </p>
      <p>
        「どういう仕組みなんだろう？」という素朴な疑問から、はじめは「After
        Effect」の公式ページに飛び、「エクスプレッション言語とは何ぞや？」とその仕様を読み進めていると、どうやら
        Javascript
        という名のプログラミング言語と同じ仕様だということが分かりました。（厳密には、エクスプレッション言語は
        EcmaScript に準拠している）
      </p>
      <p>
        そこで、エクスプレッション言語の習得への足掛かりに、まずは基盤となる
        Javascript
        から学びはじめようと「MDN」の解説ページに飛び、以下の序文を読みました。
      </p>

      <blockquote
        className={cn(
          'relative mt-6 rounded-r-lg border-l-4 px-4 pt-4 pb-2',
          'border-blue-500 bg-blue-400/20 dark:bg-blue-400/10',
          "before:[content:'❝']",
          'before:absolute before:top-2 before:left-4 before:text-6xl',
          'before:text-6xl before:text-blue-600',
        )}
        cite="https://developer.mozilla.org/ja/docs/Web/JavaScript"
      >
        <p className={cn('p-4 text-justify [text-indent:1em]')}>
          JavaScript（JS）は軽量で、インタープリター型、あるいは実行時コンパイルされる、第一級関数を備えたプログラミング言語です。ウェブページでよく使用されるスクリプト言語として知られ、多くのブラウザー以外の環境、例えば
          Node.js や Apache CouchDB や Adobe Acrobat などでも使用されています。
          JavaScriptはプロトタイプベースで、マルチパラダイムで、シングルスレッドで、動的な言語であり、オブジェクト指向、命令型、宣言型（関数プログラミングなど）といったスタイルに対応しています。
        </p>
      </blockquote>

      <p>
        一文にひしめく、専門用語のオンパレード。プログラミングはおろか、Webに関する知識にも疎かった私は、その序文の意味不明さに圧倒され、本文を読む前に挫折しました。
      </p>

      <p>
        フロントエンジニア領域を中心に学習を進めています。WEB制作・WEB開発を中心としたフロントエンジニア領域を中心にブログを執筆する予定です。
        当ブログは、Next.js 「App Router」を使用しています。
      </p>
    </div>
  );
}
