'use client';

import tailwindConfig from '@/../tailwind.config';
import { useMatchMedia } from '@/hooks/use-matchMedia';
import resolveConfig from 'tailwindcss/resolveConfig';
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';

export default function Nav() {
  return <ComponentSwitcher desktop={<DesktopNav />} mobile={<MobileNav />} />;
}

interface ComponentSwitcherProps {
  mobile: React.ReactElement;
  desktop: React.ReactElement;
  initial?: 'mobile' | 'desktop' | 'none';
}

function ComponentSwitcher({
  desktop,
  mobile,
  initial = 'none',
}: ComponentSwitcherProps): React.ReactElement {
  // tailwindcssの設定を取得
  const twConfig = resolveConfig(tailwindConfig);

  const displayMobile = useMatchMedia(`(width < ${twConfig.theme.screens.md}`);
  const displayDesktop = useMatchMedia(
    `(width >= ${twConfig.theme.screens.md}`,
  );

  if (displayMobile) return mobile;
  if (displayDesktop) return desktop;
  if (initial === 'mobile') return mobile;
  if (initial === 'desktop') return desktop;

  return <></>;
}
