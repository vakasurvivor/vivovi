'use client';

import { cn } from '@/utils/cn';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LikeButton({
  slug,
  initialLikeCount,
  className,
}: {
  slug: string;
  initialLikeCount: number;
  className?: string;
}) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(initialLikeCount);

  useEffect(() => {
    // localStorageから該当記事の「いいね」状態を読み込む
    const likedPosts = localStorage.getItem('likedPosts');

    if (likedPosts) {
      const likedSlugs = JSON.parse(likedPosts);
      setIsLiked(likedSlugs.includes(slug));
    }
  }, [slug]);

  function handleLike() {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);

    // ローカルストレージを更新する
    const likedPosts = localStorage.getItem('likedPosts');
    let likedSlugs: string[] = [];
    if (likedPosts) {
      likedSlugs = JSON.parse(likedPosts);
    }

    if (newLikedState) {
      // いいねを追加
      if (!likedSlugs.includes(slug)) {
        likedSlugs.push(slug);
      }
      // いいねの総数を楽観的に更新（APIとの同期は別）
      setLikeCount(prevCount => prevCount + 1);
    } else {
      // いいねを解除
      likedSlugs = likedSlugs.filter(s => s !== slug);
      // いいねの総数を楽観的に更新
      setLikeCount(prevCount => Math.max(0, prevCount - 1));
    }

    localStorage.setItem('likedPosts', JSON.stringify(likedSlugs));

    // サーバー側のいいね数を更新するAPI呼び出しは残しておいても良い
    fetch(`/api/posts/${slug}/like`, {
      method: newLikedState ? 'POST' : 'DELETE', // いいね解除の場合はDELETEメソッドなどを使用
    }).catch(error => {
      console.error('Error liking/unliking post on server:', error);
      // エラーが発生した場合のロールバック処理（必要に応じて）
    });
  }
  return (
    <button
      type="button"
      onClick={handleLike}
      className={cn(
        'flex cursor-pointer items-center gap-1 text-sm [font-feature-settings:"tnum"]',
        isLiked ? 'text-foreground' : 'text-muted-foreground',
        className,
      )}
    >
      <Heart
        size={16}
        className={cn('size-4', isLiked ? 'text-red-400' : 'text-gray-500')}
        fill={isLiked ? 'red' : 'none'}
      />
      {likeCount}
    </button>
  );
}
