import PageLinks from '../page-links';
import SnsExternalLinks from '../sns-external-links';
import ThemeToggle from '../theme-toggle-icon';

export default function DesktopNavigation() {
  return (
    <nav className="flex h-full items-center">
      <PageLinks />
      <SnsExternalLinks />
      <div className="grid h-full place-items-center">
        <ThemeToggle className="ml-4 block" />
      </div>
    </nav>
  );
}
