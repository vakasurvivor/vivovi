import type { SandpackTheme } from '@codesandbox/sandpack-react';

const font = {
  body: 'var(--font-inter), var(--font-noto-sans-jp), "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif,',
  mono: 'var(--font-commit-mono), var(--font-noto-sans-jp), "Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
  size: '14px',
  lineHeight: '24px',
};

export const lightModeTheme: SandpackTheme = {
  colors: {
    surface1: 'var(--shiki-background)',
    surface2: 'hsl(var(--foreground) / 0.05)',
    surface3: '#60a5fa18',
    clickable: '#959da5',
    base: '#24292e',
    disabled: '#d1d4d8',
    hover: '#C5C5C5',
    accent: '#60a5fa',
  },
  syntax: {
    keyword: '#FF7B72',
    property: '#E6EDF3',
    plain: '#E6EDF3',
    static: '#79C0FF',
    string: '#A5D6FF',
    definition: '#D2A8FF',
    punctuation: '#E6EDF',
    tag: '#7EE787',
    comment: {
      color: '#6a737d',
      fontStyle: 'normal',
    },
  },
  font: { ...font },
};

export const darkModeTheme: SandpackTheme = {
  colors: {
    surface1: 'var(--shiki-background)',
    surface2: 'hsl(var(--foreground) / 0.05)',
    surface3: '#60a5fa18',
    clickable: '#959da5',
    base: '#24292e',
    disabled: '#d1d4d8',
    hover: '#C5C5C5',
    accent: '#60a5fa',
  },
  syntax: {
    keyword: '#FF7B72',
    property: '#E6EDF3',
    plain: '#E6EDF3',
    static: '#79C0FF',
    string: '#A5D6FF',
    definition: '#D2A8FF',
    punctuation: '#E6EDF',
    tag: '#7EE787',
    comment: {
      color: '#6a737d',
      fontStyle: 'normal',
    },
  },
  font: { ...font },
};
