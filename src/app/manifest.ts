import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VIVOVI',
    short_name: 'VIVOVI',
    description:
      'Frontend Tech Blog - 忘却に抗うための備忘録です･･･ん？忘備録か？',
    start_url: '/',
    display: 'standalone',
    background_color: '#0c0c0e',
    theme_color: '#0c0c0e',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
