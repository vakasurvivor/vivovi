import type { SandpackTheme } from '@codesandbox/sandpack-react';

const font = {
  body: 'var(--font-inter), var(--font-noto-sans-jp), "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif,',
  mono: 'var(--font-commit-mono), var(--font-noto-sans-jp), "Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
  size: '14px',
  lineHeight: '24px',
};

export const githubLightDefault: SandpackTheme = {
  colors: {
    surface1: '#f6f9fe',
    surface2: 'hsl(var(--foreground) / 0.05)',
    surface3: '#60a5fa30',
    clickable: '#959da5',
    base: '#24292e',
    disabled: '#d1d4d8',
    hover: '#24292e',
    accent: '#3b82f6',
  },
  syntax: {
    keyword: '#CF222E',
    property: '#1F2328',
    plain: '#24292e',
    static: '#032f62',
    string: '#0A3069',
    definition: '#8250DF',
    punctuation: '#24292e',
    tag: '#22863a',
    comment: {
      color: '#6a737d',
      fontStyle: 'normal',
    },
  },
  font: { ...font },
};

export const githubDarkDefault: SandpackTheme = {
  colors: {
    surface1: '#0e1016',
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

// 1f2937
// hsl(215, 28%, 17%)
