import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/posts/**/*.mdx',
  ],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      typography: ({ theme }: any) => ({
        DEFAULT: {
          css: { maxWidth: 'none' },
        },
        slate: {
          css: {
            '--tw-prose-invert-headings': theme('colors.gray[100]'),
            '--tw-prose-invert-links': theme('colors.gray[100]'),
            '--tw-prose-invert-bold': theme('colors.gray[100]'),
            '--tw-prose-invert-kbd': theme('colors.gray[100]'),
            '--tw-prose-invert-code': theme('colors.gray[100]'),
          },
        },
      }),
    },
  },
} satisfies Config;
