import { Playground } from '@/app/blog/[slug]/_components/original';

export default function Playground_1() {
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
    <title>Blockquote</title>
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <div>
      <figure style="margin-block-end: 3rem;">
        <blockquote>
          <p>吾輩は猫である。名前はまだ無い。</p>
        </blockquote>
        <figcaption>
          <p>
            — 夏目漱石<cite><a target="_blank" href="https://www.aozora.gr.jp/cards/000148/files/789_14547.html">『吾輩は猫である』</a></cite>より抜粋
          </p>
        </figcaption>
      </figure>
      <figure>
        <blockquote>
          <p>国境の長いトンネルを抜けると雪国であった。</p>
        </blockquote>
        <figcaption>
          <p>
            — 川端康成<cite>『雪国』</cite>より抜粋
          </p>
        </figcaption>
      </figure>
    </div>
  </body>
</html>
`,
          active: true,
        },

        'styles.css': {
          code: `figure {
  width: min(90%, 500px);
  margin-inline: auto;
  padding: .5rem;
  border: 1px solid;

  blockquote {
    padding: .5rem;
    border: 1px dashed;
  }

  figcaption {
    margin-block-start: 1rem;
    padding: .5rem;
    border: 1px dashed;

    cite {
      border: 1px dashed;
    }
  }
}

body {
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 100dvh;
}`,
        },
      }}
    />
  );
}
