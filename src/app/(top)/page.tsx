import { posts } from '#site/content';
import RecentPosts from './_components/recent-posts';

export default function Home() {
  return (
    <div className="px-8 max-md:px-6 max-sm:px-4">
      <RecentPosts posts={posts} className="max-w-4xl" />
    </div>
  );
}
