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
    <script src="/index.js" defer></script>
  </head>
  <body>
    <figure>
      <blockquote>
        <p>私の戦闘力は530000です</p>
      </blockquote>
      <figcaption>
        <p>
          — フリーザ<cite><a target="_blank" href="https://www.shueisha.co.jp/books/items/contents.html?isbn=4-08-851414-9">『ドラゴンボール』</a></cite>単行本24巻より抜粋
        </p>
      </figcaption>
    </figure>
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
