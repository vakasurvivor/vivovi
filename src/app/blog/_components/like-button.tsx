'use client';

import { togglePostLikeCountAction } from '@/app/actions/togglePostLikeCountAction';
import { cn } from '@/utils';
import { Heart } from 'lucide-react';
import { useActionState, useEffect, useState } from 'react';

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
  const [initialIsLiked, setInitialIsLiked] = useState<boolean>(false);

  const getLikedSlugsFromLocalStorage = (): string[] => {
    const likedPosts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!likedPosts) return [];
    try {
      return JSON.parse(likedPosts);
    } catch {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      return [];
    }
  };

  // --- LocalStorage 初期状態を server action 初期値に統合 ---
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInitialIsLiked(getLikedSlugsFromLocalStorage().includes(slug));
  }, [slug]);

  const [state, formAction, isPending] = useActionState(
    togglePostLikeCountAction,
    {
      slug,
      isLiked: initialIsLiked,
      likeCount: initialLikeCount,
    },
  );

  // --- localStorage 同期 ---
  useEffect(() => {
    const likedSlugs = getLikedSlugsFromLocalStorage();

    if (state.isLiked) {
      // like true → slug を追加
      if (!likedSlugs.includes(slug)) {
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify([...likedSlugs, slug]),
        );
      }
    } else {
      // like false → slug を削除
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(likedSlugs.filter(s => s !== slug)),
      );
    }
  }, [state.isLiked, slug]);

  // --- optimistic UI: 表示は server でなく state を採用 ---
  const displayedIsLiked = state.isLiked;
  const displayedLikeCount = state.likeCount;

  return (
    <form action={formAction}>
      <button
        type="submit"
        disabled={isPending}
        className={cn(
          'flex cursor-pointer items-center gap-1 text-sm [font-feature-settings:"tnum"]',
          displayedIsLiked ? 'text-foreground' : 'text-muted-foreground',
          className,
        )}
      >
        <Heart
          size={16}
          className={cn(
            'size-4',
            displayedIsLiked ? 'text-red-400' : 'text-gray-500',
          )}
          fill={displayedIsLiked ? 'red' : 'none'}
        />
        {displayedLikeCount}
      </button>
    </form>
  );
}
