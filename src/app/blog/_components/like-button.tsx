'use client';

import { cn } from '@/utils/cn';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LikeButton({
  className,
  slug,
  initialLikeCount,
}: {
  className?: string;
  slug: string;
  initialLikeCount: number;
}) {
  const LOCAL_STORAGE_KEY = 'liked-posts';
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(initialLikeCount);

  // 初期化
  useEffect(() => {
    const likedSlugs = getLikedSlugsFromLocalStorage();
    setIsLiked(likedSlugs.includes(slug));
  }, []);

  async function handleLikePost() {
    if (typeof window === 'undefined') return;

    const currentIsLiked = isLiked;
    const currentLikeCount = likeCount;

    let updatedLikedSlugs = getLikedSlugsFromLocalStorage();
    let newLikeCount = likeCount;
    let newIsLiked = !isLiked;

    if (currentIsLiked) {
      updatedLikedSlugs = updatedLikedSlugs.filter(s => s !== slug);
      newLikeCount = Math.max(0, currentLikeCount - 1);
    } else {
      if (!updatedLikedSlugs.includes(slug)) {
        updatedLikedSlugs.push(slug);
      }
      newLikeCount = currentLikeCount + 1;
    }

    // 楽観的に「いいね」の状態を更新し、画面に反映する
    setIsLiked(newIsLiked);
    setLikeCount(newLikeCount);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedLikedSlugs));

    // Route Handlers を経由して Database に反映する
    try {
      const response = await fetch(`/api/posts/${slug}/like`, {
        method: currentIsLiked ? 'DELETE' : 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to update like on server.');
      }
    } catch (error) {
      console.error('Error liking post on server:', error);

      // 連携に失敗した場合は「いいね」の状態を元に戻す
      setIsLiked(currentIsLiked);
      setLikeCount(currentLikeCount);
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(getLikedSlugsFromLocalStorage()),
      );
    }
  }

  // localStorage から「いいね」状態を取得する関数
  const getLikedSlugsFromLocalStorage = (): string[] => {
    if (typeof window === 'undefined') return [];
    const likedPosts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (likedPosts) {
      try {
        return JSON.parse(likedPosts);
      } catch {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    }
    return [];
  };

  return (
    <button
      type="button"
      onClick={handleLikePost}
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
