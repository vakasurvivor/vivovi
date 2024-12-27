import VivoviLogo from '@/components/vivovi-logo';
import BodyCopy from './_components/body-copy';
import SvgLogoAnimation from './_components/svg-logo-animation';

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* mt-[var(--header-height)] */}
      {/* pl-8 max-md:pl-4" */}
      <VivoviLogo className="pl-10" />
      {/* clamp min:320px max:1024px */}
      <div className="min-h-[calc(100dvh-var(--header-height))] w-full">
        <BodyCopy />
        <SvgLogoAnimation />
      </div>
    </div>
  );
}
