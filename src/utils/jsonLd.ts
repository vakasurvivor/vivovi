import { Post } from '#site/content';
import { getBaseURL } from './get-base-url';

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
        url: `${getBaseURL()}/`,
      },
    },
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${getBaseURL()}/blog/${post.slug}`,
    },
    // keywords: post.tags.join(', '),
  };

  return jsonLd;
}

export { generatePostJsonLd };
