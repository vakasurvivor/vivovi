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
    <title>Scrollbar</title>
    <link rel="stylesheet" href="/styles.css" />
    <script src="/index.js" defer></script>
  </head>
  <body>
    <figure>
      <blockquote>
        <p>It was a bright cold day in April, and the clocks were striking thirteen.</p>
      </blockquote>
      <figcaption>
        First sentence in <cite><a href="http://www.george-orwell.org/1984/0.html">Nineteen Eighty-Four</a></cite> by George
        Orwell (Part 1, Chapter 1).
      </figcaption>
    </figure>
  </body>
</html>
`,
        },

        'styles.css': {
          code: `body {
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 100dvh;
}
`,
          active: true,
        },

        'index.js': {
          code: ``,
        },
      }}
    />
  );
}
