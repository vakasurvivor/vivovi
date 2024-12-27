import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from 'react';

export function useMatchMedia(
  mediaQuery: string,
  initialState = false,
): boolean {
  const matchMediaList = useMemo(
    () =>
      typeof window === 'undefined' ? undefined : window.matchMedia(mediaQuery),
    [mediaQuery],
  );

  const [matches, setMatches] = useState(
    () => matchMediaList?.matches ?? initialState,
  );

  useLayoutEffect(() => {
    setMatches(matchMediaList!.matches);
  }, [matchMediaList]);

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      matchMediaList?.addEventListener('change', onStoreChange);
      return () => matchMediaList?.removeEventListener('change', onStoreChange);
    },
    [matchMediaList],
  );

  return useSyncExternalStore(
    subscribe,
    () => matchMediaList?.matches ?? matches,
    () => initialState,
  );
}
