import { Post } from '#site/content';

// 汎用的な型 T を定義し、createdAt または updatedAt プロパティを持つことを制約する
type SortablePost = Post & {
  likeCount: number;
  createdAt: string;
  updatedAt?: string;
};

// 日付順
const sortByDateDescending = <T extends SortablePost>(posts: Array<T>) => {
  return posts.sort(
    (a, b) =>
      new Date(b.createdAt as string).getTime() -
      new Date(a.createdAt as string).getTime(),
  );
};

const sortByDateAscending = <T extends SortablePost>(posts: Array<T>) => {
  return posts.sort(
    (a, b) =>
      new Date(a.createdAt as string).getTime() -
      new Date(b.createdAt as string).getTime(),
  );
};

// 人気順
const sortByLikeCountDescending = <T extends SortablePost>(posts: Array<T>) => {
  return posts.sort((a, b) => b.likeCount - a.likeCount);
};

const sortByLikeCountAscending = <T extends SortablePost>(posts: Array<T>) => {
  return posts.sort((a, b) => a.likeCount - b.likeCount);
};

// 閲覧順
// pageViewOrder

// 更新順
const sortByUpdateDateDescending = <T extends SortablePost>(
  posts: Array<T>,
) => {
  return posts.sort(
    (a, b) =>
      new Date(b.updatedAt as string).getTime() -
      new Date(a.updatedAt as string).getTime(),
  );
};

const sortByUpdateDateAscending = <T extends SortablePost>(posts: Array<T>) => {
  return posts.sort(
    (a, b) =>
      new Date(a.updatedAt as string).getTime() -
      new Date(b.updatedAt as string).getTime(),
  );
};
export {
  sortByDateAscending,
  sortByDateDescending,
  sortByLikeCountAscending,
  sortByLikeCountDescending,
  sortByUpdateDateAscending,
  sortByUpdateDateDescending,
};
