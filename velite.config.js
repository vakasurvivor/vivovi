import rehypeToc from '@jsdevtools/rehype-toc';
import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
} from '@shikijs/transformers';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSemanticBlockquotes from 'rehype-semantic-blockquotes';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkHeadingId from 'remark-heading-id';
import { defineCollection, defineConfig, s } from 'velite';

const categories = defineCollection({
  name: 'Category',
  pattern: 'categories/*.yml',
  schema: s
    .object({
      name: s.string().max(20),
      slug: s.slug('global', ['admin', 'login']),
      cover: s.image().optional(),
      description: s.string().max(999).optional(),
    })
    .transform(data => ({ ...data, permalink: `/${data.slug}` })),
});

const tools = defineCollection({
  name: 'Tools',
  pattern: 'tools/*.yml',
  schema: s
    .object({
      name: s.string(),
      link: s.string(),
      slug: s.slug('global', ['admin', 'login']),
      cover: s.image().optional(),
      description: s.string().max(999).optional(),
    })
    .transform(data => ({ ...data, permalink: `/${data.slug}` })),
});

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug(),
      createdAt: s.isodate(),
      published: s.boolean().default(true),
      updatedAt: s.isodate().optional(),
      eyecatch: s.image(),
      description: s.string().max(999).optional(),
      target: s.string().max(100).optional(),
      categories: s.array(s.string()).optional(),
      tags: s.array(s.string()).optional(),
      metadata: s.metadata(),
      content: s.mdx(),
    })
    .transform(data => ({ ...data, permalink: `/blog/${data.slug}` })),
});

/** @type {import('rehype-autolink-headings').Options} */
const rehypeAutolinkHeadingsOptions = {
  behavior: 'append',
  properties: {
    className: ['subheading-anchor'],
    ariaLabel: 'Link to section',
  },
};

/** @type {import('@jsdevtools/rehype-toc').Options} */
const rehypeTocOptions = {
  headings: ['h2', 'h3', 'h4'],
  cssClasses: {
    toc: 'rehype-toc',
    list: 'rehype-toc-level',
    listItem: 'rehype-toc-item',
    link: 'rehype-toc-link',
  },
  // customizeTOC: node => {
  //   function changeOlToUl(node) {
  //     if (node.type === 'element' && node.tagName === 'ol') {
  //       node.tagName = 'ul';
  //     }
  //     if (node.children && node.children.length > 0) {
  //       node.children.forEach(child => changeOlToUl(child));
  //     }
  //   }
  //   changeOlToUl(node);
  // },
};

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  theme: {
    light: 'github-light-default',
    dark: 'github-dark-default',
  },
  keepBackground: false,
  tokensMap: {
    fn: 'entity.name.function',
  },
  transformers: [
    transformerNotationDiff(),
    transformerNotationFocus(),
    transformerNotationErrorLevel(),
  ],
};

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts },

  mdx: {
    remarkPlugins: [remarkBreaks, remarkHeadingId],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
      [rehypeToc, rehypeTocOptions],
      rehypeSemanticBlockquotes,
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
});
