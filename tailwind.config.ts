import type { Config } from 'tailwindcss';

export default {
  darkMode: ['selector'],

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
      fontFamily: {
        sans: [
          'YakuHanJPs',
          'var(--font-inter)',
          'var(--font-noto-sans-jp)',
          'Helvetica Neue',
          'Arial',
          'Hiragino Kaku Gothic ProN',
          'Hiragino Sans',
          'Meiryo',
          'sans-serif',
        ],

        inter: [
          'var(--font-inter)',
          'var(--font-noto-sans-jp)',
          'Helvetica Neue',
          'Arial',
          'Hiragino Kaku Gothic ProN',
          'Hiragino Sans',
          'Meiryo',
          'sans-serif',
        ],

        code: [
          'var(--font-commit-mono)',
          'var(--font-noto-sans-jp)',
          'monospace',
        ],

        crazyMetro: [
          'var(--font-crazy-metro )',
          'var(--font-noto-sans-jp)',
          'sans-serif',
        ],
      },

      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        shiki: {
          light: {
            DEFAULT: 'hsl(var(--shiki-light)/ <alpha-value>)',
            bg: 'hsl(var(--shiki-light-bg)/ <alpha-value>)',
          },
          dark: {
            DEFAULT: 'hsl(var(--shiki-dark)/ <alpha-value>)',
            bg: 'hsl(var(--shiki-dark-bg)/ <alpha-value>)',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
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

  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('tailwind-scrollbar'),
  ],
} satisfies Config;
