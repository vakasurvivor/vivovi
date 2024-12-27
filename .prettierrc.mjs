/** @type {import("prettier").Config} */

const config = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',

  // tailwindcss
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'twMerge', 'cn', 'cva', 'cx'],
};

export default config;
