type PageToken = number | string;

interface Options {
  boundaryCount?: number; // 先頭/末尾に常に表示するページ数（default: 2）
  siblingCount?: number; // 現在ページの前後に表示するページ数（default: 2）
  ellipsis?: string; // 省略トークン（default: 'ellipsis'）
  frontExpand?: number; // 前半で拡張表示するページ数（default: 0）
  backExpand?: number; // 後半で拡張表示するページ数（default: 0）
}

/**
 * ページ番号配列を生成する汎用関数
 */
export const getPaginationSequence = (
  totalPages: number,
  currentPage: number,
  options: Options = {},
): PageToken[] => {
  const {
    boundaryCount = 2,
    siblingCount = 2,
    ellipsis = 'ellipsis',
    frontExpand = 0,
    backExpand = 0,
  } = options;

  const total = Math.max(0, Math.floor(totalPages));
  const current = Math.min(
    Math.max(1, Math.floor(currentPage)),
    Math.max(1, total),
  );

  if (total <= 0) return [];

  // 単純ケース：小さいページ数なら全て表示
  const minAllVisible = boundaryCount * 2 + siblingCount * 2 + 1;
  if (total <= minAllVisible + 2) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  // ======== ページ集合を構築 =========
  const pagesSet = new Set<number>();

  // 先頭/末尾固定
  for (let i = 1; i <= Math.min(boundaryCount, total); i++) pagesSet.add(i);
  for (let i = Math.max(1, total - boundaryCount + 1); i <= total; i++)
    pagesSet.add(i);

  // 現在ページの前後
  for (
    let i = Math.max(1, current - siblingCount);
    i <= Math.min(total, current + siblingCount);
    i++
  )
    pagesSet.add(i);

  // ======== 前半/後半拡張ロジック =========
  if (current <= frontExpand) {
    // 前半：例えば current が 1〜6 の範囲なら多めに表示
    for (let i = 1; i <= Math.min(frontExpand + boundaryCount, total); i++)
      pagesSet.add(i);
  } else if (current >= total - backExpand + 1) {
    // 後半：例えば current が total−6 以降なら末尾側を広げる
    for (
      let i = Math.max(1, total - backExpand - boundaryCount + 1);
      i <= total;
      i++
    )
      pagesSet.add(i);
  }

  // ======== 整形と省略記号挿入 =========
  const numericPages = Array.from(pagesSet).sort((a, b) => a - b);

  const result: PageToken[] = [];
  for (let i = 0; i < numericPages.length; i++) {
    const page = numericPages[i];
    const prev = i > 0 ? numericPages[i - 1] : null;

    if (prev !== null && page - prev > 1) result.push(ellipsis);
    result.push(page);
  }

  return result;
};
