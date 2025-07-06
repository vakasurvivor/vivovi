'use client';

// Next.js
import Link from 'next/link';
// Components
import Nav from './nav';
// utils/hooks
import { useMatchMedia } from '@/hooks/use-matchMedia';
import { cn } from '@/utils/cn';
// Animation
import { ScrollContext } from '@/app/(top)/scroll-provider';
import { motion, useScroll, useSpring } from 'motion/react';
import { useContext, useEffect, useState } from 'react';

export default function Header({ className }: { className: string }) {
  const { isFooterInView } = useContext(ScrollContext);

  // 判定
  const [breakpoint, setBreakpoint] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const rootStyles = getComputedStyle(document.documentElement);
      setBreakpoint(rootStyles.getPropertyValue('--breakpoint-md'));
    }
  }, []);
  const displayMobile = useMatchMedia(`(width < ${breakpoint})`);

  // Scroll Animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
    restDelta: 0.001,
  });

  return (
    <motion.header
      className={cn(
        'bg-background/40 w-full px-4',
        'natural-border border-b',
        'font-inter backdrop-blur-sm',
        'h-(--header-height)',
        className,
      )}
      animate={{
        y: isFooterInView
          ? displayMobile
            ? 'calc((var(--header-height) - var(--scroll-progress-border)) * -1)'
            : '-100%'
          : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div
        className={cn(
          'mx-auto',
          'h-14 max-w-5xl',
          'flex items-center justify-between',
        )}
      >
        <h1 className="font-bold">
          <Link href="/" className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.122358 10.2857C0.0407862 10.854 0 11.427 0 12C0 12.573 0.040785 13.146 0.122355 13.7143H0.121526C0.264871 14.7164 0.532033 15.6786 0.907017 16.5849C1.34717 17.651 1.94753 18.6666 2.70809 19.5949L2.70863 19.5947C3.21633 20.215 3.78495 20.7837 4.40534 21.2914L4.40514 21.2919C5.33497 22.0538 6.35247 22.6549 7.42064 23.0953C8.32529 23.469 9.28561 23.7354 10.2857 23.8785V23.8776C10.854 23.9592 11.427 24 12 24C12.573 24 13.146 23.9592 13.7143 23.8776V23.8785C14.7145 23.7354 15.6749 23.469 16.5796 23.0952C17.6477 22.6548 18.6651 22.0537 19.5949 21.2919L19.5947 21.2914C20.215 20.7837 20.7837 20.215 21.2914 19.5947L21.2919 19.5949C22.0522 18.6669 22.6524 17.6517 23.0925 16.5859C23.4678 15.6794 23.7351 14.7168 23.8785 13.7143H23.8776C23.9592 13.146 24 12.573 24 12C24 11.427 23.9592 10.854 23.8776 10.2857H23.8785C23.7346 9.2802 23.4662 8.31489 23.0892 7.40596C22.6494 6.34315 22.0503 5.33071 21.2919 4.40514L21.2914 4.40533C20.7837 3.78494 20.2151 3.21632 19.5947 2.70861L19.5949 2.70809C18.6717 1.95169 17.6621 1.35375 16.6024 0.914253C15.691 0.535462 14.7229 0.265781 13.7143 0.121515V0.122357C12.5777 -0.0407856 11.4223 -0.0407856 10.2857 0.122357V0.121515C9.27687 0.265819 8.3085 0.535604 7.39692 0.914552C6.3374 1.35402 5.32808 1.95186 4.40514 2.70809L4.40533 2.70861C3.78494 3.21632 3.21632 3.78494 2.70861 4.40533L2.70809 4.40514C1.95011 5.33022 1.35125 6.34207 0.911507 7.40427C0.534165 8.3137 0.265442 9.27957 0.121526 10.2857H0.122358ZM5.343 5.34502L5.34614 5.34614L6.84824 9.55722L0 12L6.84906 14.4431L5.34655 18.6537L5.34301 18.655C5.34377 18.6557 5.34453 18.6565 5.34529 18.6572L5.34655 18.6537L9.52893 17.1618C8.3583 16.5917 7.41317 15.6305 6.86348 14.4482L6.84906 14.4431L6.85431 14.4284C6.52255 13.7075 6.33753 12.9052 6.33753 12.0597C6.33753 11.1943 6.53134 10.3742 6.87791 9.6404L6.84824 9.55722L6.93304 9.52697C7.48925 8.41432 8.4005 7.51008 9.51832 6.96274L9.55896 6.84886L9.67342 6.88969C10.3858 6.56732 11.1766 6.38785 12.0094 6.38785C12.8389 6.38785 13.6269 6.56593 14.3371 6.88595L14.441 6.84886L14.4777 6.95167C15.6087 7.49917 16.5302 8.4112 17.0898 9.53512L17.1518 9.55722L17.1301 9.61782C17.4834 10.3574 17.6812 11.1854 17.6812 12.0597C17.6812 12.9099 17.4942 13.7163 17.159 14.4402L24 12L17.1518 9.55722L18.6539 5.34614L18.657 5.34502C18.6563 5.34435 18.6557 5.34367 18.655 5.343L18.6539 5.34614L14.441 6.84886L12 0.00808674L9.55896 6.84886L5.34614 5.34614L5.34502 5.343C5.34434 5.34367 5.34367 5.34434 5.343 5.34502ZM18.657 18.655L18.6534 18.6537L17.1539 14.4513C16.6027 15.6348 15.6552 16.5965 14.4819 17.1657L18.6534 18.6537L18.6547 18.6572C18.6555 18.6565 18.6562 18.6557 18.657 18.655ZM12 24L9.56745 17.1804C10.307 17.5337 11.1351 17.7316 12.0094 17.7316C12.8748 17.7316 13.6949 17.5378 14.4287 17.1912L12 24ZM16.0095 12.0597C16.0095 13.6271 15.1081 14.9839 13.7953 15.64L12.8926 15.962C12.6085 16.0261 12.3129 16.0599 12.0094 16.0599C11.6866 16.0599 11.3728 16.0216 11.0721 15.9494L10.2733 15.6645C8.93358 15.0181 8.00924 13.6469 8.00924 12.0597C8.00924 9.85048 9.80017 8.05955 12.0094 8.05955C14.2186 8.05955 16.0095 9.85048 16.0095 12.0597Z"
                fill="currentColor"
              />
            </svg>
            VIVOVI
          </Link>
        </h1>
        <Nav />
      </div>

      {displayMobile && (
        <motion.div
          className={cn(
            'absolute inset-0 top-full origin-left',
            'bg-muted-foreground h-(--scroll-progress-border)',
          )}
          style={{
            scaleX,
            translate: '0 -25%',
          }}
        />
      )}
    </motion.header>
  );
}
