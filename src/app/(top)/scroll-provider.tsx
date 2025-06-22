// context/ScrollContext.tsx
'use client';

import React, { createContext, ReactNode, useState } from 'react';

// Contextの型定義
interface ScrollContextType {
  isFooterInView: boolean;
  setIsFooterInView: React.Dispatch<React.SetStateAction<boolean>>;
}

// Contextの作成と初期値設定
export const ScrollContext = createContext<ScrollContextType>({
  isFooterInView: false,
  setIsFooterInView: () => {},
});

// Providerコンポーネント
interface ScrollProviderProps {
  children: ReactNode;
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  const [isFooterInView, setIsFooterInView] = useState(false);

  return (
    <ScrollContext.Provider value={{ isFooterInView, setIsFooterInView }}>
      {children}
    </ScrollContext.Provider>
  );
}
