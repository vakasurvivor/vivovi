import { posts } from '#site/content';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SortPostsList from './_components/sortPosts-list';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'VIVOVI - 備忘録、それとも忘備録。WEB制作・開発を中心とした技術ブログです。',
};

export default async function AllPosts() {
  if (!posts) {
    notFound();
  }
  return (
    <div className="mt-8 rounded-md px-8 max-md:px-6 max-sm:px-4">
      <div className="mx-auto max-w-4xl">
        <SortPostsList posts={posts} />
      </div>
    </div>
  );
}
