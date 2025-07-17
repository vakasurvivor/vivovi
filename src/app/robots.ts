import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/api/og/'], // ただしOG画像生成APIは許可
        disallow: ['/api/'], // API全体禁止
      },
    ],
    sitemap: 'https://vivovi.com/sitemap.xml',
  };
}
