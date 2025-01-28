import { Post } from '#site/content';

// 新しい順
const getNewestPosts = (posts: Array<Post>) => {
  return posts.sort(
    (a, b) =>
      new Date(b.updatedAt || b.createdAt).getTime() -
      new Date(a.updatedAt || a.createdAt).getTime(),
  );
};

// 古い順
const getOldestPosts = (posts: Array<Post>) => {
  return posts.sort(
    (a, b) =>
      new Date(a.updatedAt || a.createdAt).getTime() -
      new Date(b.updatedAt || b.createdAt).getTime(),
  );
};

export { getNewestPosts, getOldestPosts };
