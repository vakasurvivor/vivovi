import { posts } from '#site/content';
import { getBaseURL } from '@/utils/get-base-url';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const publishedPosts = posts.filter(post => post.published);

  return publishedPosts.map(post => ({
    url: `${getBaseURL()}/product/${post.slug}`,
    lastModified: post.updatedAt || post.createdAt,
    changeFrequency: 'weekly',
    priority: 1,
  }));
}
