/**
 * CDN経由でsvgを取得するためのURLを出力する関数
 * @param {string} extension 拡張子、もしくは「SimpleIcons」に存在するSVG名
 * @returns {string} URL
 */

function getSvgIconCdnUrl(language: string) {
  // local
  const localMap = [
    // browser
    { pattern: /^html$/i, svgName: 'html' },
    { pattern: /^vscode$/i, svgName: 'visual-studio-code' },
    { pattern: /^terminal$/i, svgName: 'terminal' },
  ];
  for (const { pattern, svgName } of localMap) {
    if (pattern.test(language)) {
      return `/img/${svgName}.svg`;
    }
  }

  // svgl
  const svglMap = [
    // browser
    { pattern: /^css$/i, svgName: 'css' },
    { pattern: /^chrome$/i, svgName: 'chrome' },
    { pattern: /^safari$/i, svgName: 'safari' },
    { pattern: /^firefox$/i, svgName: 'firefox' },
    { pattern: /^edge$/i, svgName: 'edge' },
  ];
  for (const { pattern, svgName } of svglMap) {
    if (pattern.test(language)) {
      return `https://svgl.app/library/${svgName}.svg`;
    }
  }

  // SimpleIcons;

  const simpleIconsMap = [
    // { pattern: /^html$/i, svgName: 'html5' },
    // { pattern: /^css$/i, svgName: 'css3' },
    { pattern: /^(scss|sass)$/i, svgName: 'sass' },
    { pattern: /^(js|jsx)?$/i, svgName: 'javascript/444/_' },
    { pattern: /^(ts|tsx)?$/i, svgName: 'typescript' },
    { pattern: /^(md|markdown)$/i, svgName: 'markdown/444/eee' },
    { pattern: /^npm$/i, svgName: 'npm/_/eee' },
    { pattern: /^pnpm$/i, svgName: 'pnpm/_/eee' },
    { pattern: /^yarn$/i, svgName: 'yarn/_/eee' },
    { pattern: /^bun$/i, svgName: 'bun/444/eee' },
    { pattern: /^json$/i, svgName: 'json/_/eee' },
    { pattern: /^mdx$/i, svgName: 'mdx/_/eee' },
    // 必要に応じて追記
  ];

  // パターンに一致する拡張子の場合、「SimpleIcons」に対応するSVG名を返す
  for (const { pattern, svgName } of simpleIconsMap) {
    if (pattern.test(language)) {
      // https://cdn.simpleicons.org/[ICON SLUG]/[COLOR]/[DARK_MODE_COLOR]
      return `https://cdn.simpleicons.org/${svgName}`;
    }
  }

  // 一致しない場合は、入力された引数をそのまま返す
  return `https://cdn.simpleicons.org/${language}`;
}

export { getSvgIconCdnUrl };
