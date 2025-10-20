import { Playground } from '@/app/blog/[slug]/_components/original';

export default function Playground_2() {
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
    <script src="/index.js" defer></script>
  </head>
  <body>
    <div class="wrapper">
      <div class="inner">
      </div>
      <div class="inner">
      </div>
    </div>
  </body>
</html>
`,
        },

        'styles.css': {
          code: `.inner {
  width: 100%;
  height: 50%;

  &:first-child {
  background-color: gray;
  }

  &:last-child {
  background-color: blue;
  width: 100vw;
  margin-inline: calc(50% - 50vw - (var(--scrollbar-width)/2));
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 75%;
  height: 90vh;
  padding: 1rem;
  margin-block: 2rem;
  border: dashed 1px;
}

body {
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
}
`,
          active: true,
        },

        'index.js': {
          code: `// スクロールバーを含む画面幅を取得
const withScrollbar = window.innerWidth;
// スクロールバーを含まない画面幅を取得
const withOutScrollbar = document.body.clientWidth;
// 差分からスクロールバーの横幅を計算
const scrollbarWidth = withScrollbar - withOutScrollbar;
`,
        },
      }}
    />
  );
}
