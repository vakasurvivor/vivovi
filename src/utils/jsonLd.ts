import { Post } from '#site/content';

function generatePostJsonLd(post: Post) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    // image: post.image,
    author: {
      '@type': 'Person',
      name: 'vakasurvivor',
      // url: post.author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: 'VIVOVI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://example.com/logo.png',
      },
    },
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://example.com/blog/${post.slug}`,
    },
    // keywords: post.tags.join(', '),
  };

  return jsonLd;
}

export { generatePostJsonLd };
