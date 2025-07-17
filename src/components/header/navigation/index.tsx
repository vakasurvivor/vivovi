'use client';

import { useMatchMedia } from '@/hooks/use-matchMedia';
import { useEffect, useState } from 'react';
import DesktopNavigation from './desktop/desktop-navigation';
import MobileNavigation from './mobile/mobile-navigation';

export default function Navigation() {
  return (
    <ComponentSwitcher
      desktop={<DesktopNavigation />}
      mobile={<MobileNavigation />}
    />
  );
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

  const [breakpointMd, setBreakpointMd] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBreakpointMd(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--breakpoint-md',
        ),
      );
    }
  }, []);

  const displayMobile = useMatchMedia(`(width < ${breakpointMd})`);
  const displayDesktop = useMatchMedia(`(width >= ${breakpointMd})`);

  if (displayMobile) return mobile;
  if (displayDesktop) return desktop;
  if (initial === 'mobile') return mobile;
  if (initial === 'desktop') return desktop;

  return <></>;
}
