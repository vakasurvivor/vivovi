'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function Comment() {
  const { resolvedTheme } = useTheme();
  return (
    <section className="mb-5 border-t border-[var(--tw-prose-hr)] pt-8">
      <Giscus
        id="comments"
        repo="vakasurvivor/vivovi"
        repoId="R_kgDOM3efZg"
        category="General"
        categoryId="DIC_kwDOM3efZs4CtPHR"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        lang="ja"
        loading="lazy"
      />
    </section>
  );
}
