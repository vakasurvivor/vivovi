import { Playground } from '@/app/blog/[slug]/_components/original';

export default function Playground_4() {
  return (
    <Playground
      template="static"
      options={{
        externalResources: [
          'https://unpkg.com/modern-css-reset/dist/reset.min.css',
        ],
      }}
      files={{
        'index.html': {
          code: `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Scrollbar</title>
    <link rel="stylesheet" href="/styles.css" />
    <script type="module" src="/index.js"></script>
  </head>
  <body>
    <h2 id="title">Scrollbar width :
      <span data-width>px</span>
    </h2>
    <div class='container'>
      <div class="scrollbar-width"></div>
    </div>
  </body>
</html>
`,
        },

        'styles.css': {
          code: `.container{
  width: 90%;
  margin-inline: auto;
  border: dashed 1px;

  /* 垂直スクロールバーを幅を計算する */
  .scrollbar-width {
    width: calc(100vw - 100cqi);
    height: 400px;
    margin-inline: auto;
    background-color: blue;
  }
}


/* デモのために垂直スクロールバーを常に表示 */
body{
  overflow-y: scroll;
  container-type: inline-size;
  h2 {
    text-align: center;
    padding-block: 1rem;
    span::before{
      content:attr(data-width);
    }
  }
}`,
          active: true,
        },

        'index.js': {
          code: `// スクロールバーを含む画面幅を取得
const withScrollbar = window.innerWidth;

// スクロールバーを含まない画面幅を取得
const withOutScrollbar = document.body.clientWidth;

// 差分からスクロールバーの横幅を計算
const scrollbarWidth = withScrollbar - withOutScrollbar;

document.querySelector("span").dataset.width = scrollbarWidth;
          `,
        },
      }}
    />
  );
}
