import { Playground } from '@/app/blog/[slug]/_components/original';

export default function UlPlayground() {
  return (
    <Playground
      template="vite-react-ts"
      customSetup={{
        dependencies: {
          'tailwind-merge': 'latest',
          clsx: 'latest',
          'class-variance-authority': 'latest',
        },
      }}
      files={{
        'public/arrow-right.svg': {
          code: `<svg  xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
>
  <path d="M5 12h14"/>
  <path d="m12 5 7 7-7 7"/>
</svg>
`,
          hidden: true,
        },

        'public/map-pin.svg': {
          code: `<svg xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-map-pin"
>
  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
  <circle cx="12" cy="10" r="3"/>
</svg>
`,
          hidden: true,
        },

        'public/pencil-line.svg': {
          code: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-line"><path d="M12 20h9"/></svg>`,
          hidden: true,
        },

        'public/pencil.svg': {
          code: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-line"><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/><path d="m15 5 3 3"/></svg>`,
          hidden: true,
        },

        'index.html': {
          code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    <script src="https://cdn.tailwindcss.com"></script>
      <script>
    tailwind.config = {
      theme: {
          extend: {
            animation: {
              wiggle: 'wiggle 250ms 1',
            },
            keyframes: {
              wiggle: {
                '0%, 100%': {
                  transform: 'translate(-100%, 0%)',
                  animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                },
                '50%': {
                  transform: 'translate(-100%, -25%)',
                  animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
                },
              },
            },
          },
        }
      }
  </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.tsx"></script>
  </body>
</html>
`,
          hidden: true,
        },

        'App.tsx': {
          code: `import CustomUl from './custom-ul.tsx';

export default function App() {
  return (
    <div className="min-h-screen grid place-items-center mx-4">
      <div className="mx-auto w-fit max-w-[38ch]">
        <div className="mb-8">
          <CustomUl
            svgType="arrow"
            className="max-sm:text-base max-lg:text-xl text-3xl"
          >
            <li>吾輩は猫である。名前はまだ無い。</li>
            <li>国境の長いトンネルを抜けると雪国であった。</li>
          </CustomUl>

          <CustomUl svgType="pencil" className="max-sm:text-base text-xl">
            <li>吾輩は猫である。名前はまだ無い。</li>
            <li>国境の長いトンネルを抜けると雪国であった。</li>
          </CustomUl>

          <CustomUl svgType="map" className="text-base">
            <li>吾輩は猫である。名前はまだ無い。</li>
            <li>国境の長いトンネルを抜けると雪国であった。</li>
          </CustomUl>
        </div>
      </div>
    </div>
  );
}`,
          active: true,
        },

        'custom-ul.tsx': {
          code: `import { useEffect, useRef } from 'react';
import { useMatchMedia } from './hooks/useMatchMedia';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils/cn';

type ulStyleProps = VariantProps<typeof ulStyle>;
const ulStyle = cva(
  [
    // ul
    'list-none',
    'text-base',
    'ml-7',
    [
      // ul > li
      '[&>li]:relative',
      '[&>li]:text-justify',
      '[&>li]:pl-1',
      '[&>li]:mb-4',
      [
        // ul > li::before
        '[&>li]:before:absolute',
        '[&>li]:before:content-[""]',
        '[&>li]:before:w-6',
        '[&>li]:before:h-[--svg-height]',
        '[&>li]:before:left-0',
        '[&>li]:before:-translate-x-full',
        // { mask-* }
        '[&>li]:before:[mask-size:contain]',
        '[&>li]:before:[mask-repeat:no-repeat]',
        '[&>li]:before:[mask-position:right]',
        // transitionを適用
        '[&>li]:before:transition-all',
      ],
    ],
  ],
  {
    variants: {
      svgType: {
        arrow: [
          '[&>li]:before:[mask-image:url(/arrow-right.svg)]',
          // :hover 位置を移動
          'hover:[&>li]:before:-translate-x-[120%]',
          // :hover 背景色を変化
          '[&>li]:before:bg-gradient-to-r from-teal-300 from-40% to-blue-600',
          'hover:[&>li]:before:from-pink-300',
          'hover:[&>li]:before:from-40%',
          'hover:[&>li]:before:to-red-600',
        ],

        pencil: [
          // ul > li::before
          [
            '[&>li]:before:[mask-image:url(/pencil.svg)]',
            '[&>li]:before:bg-black',
            // :hover 位置を移動
            'hover:[&>li]:before:-translate-x-[120%]',
          ],
          // ul > li::after
          [
            '[&>li]:after:absolute',
            '[&>li]:after:content-[""]',
            '[&>li]:after:left-0',
            '[&>li]:after:top-0',
            '[&>li]:after:w-6',
            '[&>li]:after:h-[--svg-height]',
            // { mask-* }
            '[&>li]:after:[mask-image:url(/pencil-line.svg)]',
            '[&>li]:after:[mask-size:contain]',
            '[&>li]:after:[mask-repeat:no-repeat]',
            '[&>li]:after:[mask-position:right]',

            '[&>li]:after:transition-all',
            // :hover 位置を移動
            '[&>li]:after:-translate-x-full',
            'hover:[&>li]:after:-translate-x-[120%]',
            // :hover 透過度を変化
            '[&>li]:after:opacity-0',
            'hover:[&>li]:after:opacity-100',
            // :hover 背景色を変化
            '[&>li]:after:bg-black',
            'hover:[&>li]:after:bg-red-600',
          ],
        ],

        map: [
          '[&>li]:before:[mask-image:url(/map-pin.svg)]',
          // :hover animationを適用
          'hover:[&>li]:before:animate-wiggle',
          // :hover 背景色を変化
          '[&>li]:before:bg-gradient-to-r from-slate-800 from-40% to-slate-800',
          'hover:[&>li]:before:from-pink-400',
          'hover:[&>li]:before:from-40%',
          'hover:[&>li]:before:to-red-700',
        ],
      },
    },
    defaultVariants: {
      svgType: 'arrow',
    },
  }
);

interface CustomUlProps extends ulStyleProps {
  className?: string;
  children: React.ReactNode;
}

export default function CustomUl({
  svgType = 'arrow',
  className,
  children,
}: CustomUlProps) {
  const ulRef = useRef(null);
  const isMaxSm = useMatchMedia('(width < 640px)');
  const isMaxlg = useMatchMedia('(width < 1024px)');

  useEffect(() => {
    if (ulRef.current) {
      const liEl = ulRef.current.querySelector('li');
      if (liEl) {
        const computedStyle = getComputedStyle(liEl);
        const fontSize = parseFloat(computedStyle.fontSize);
        const lineHeight = computedStyle.lineHeight;

        let liLineHeight;
        if (lineHeight === 'normal') {
          liLineHeight = 1.2 * fontSize;
        } else if (lineHeight.includes('px')) {
          liLineHeight = parseFloat(lineHeight);
        } else {
          liLineHeight = parseFloat(lineHeight) * fontSize;
        }

        // ul要素にCSS変数を設定
        ulRef.current.style.setProperty('--svg-height', \`\${liLineHeight}px\`);
      }
    }
  }, [isMaxSm, isMaxlg]);

  return (
    <ul ref={ulRef} className={cn(ulStyle({ svgType }), className)}>
      {children}
    </ul>
  );
}
`,
        },

        'utils/cn.ts': {
          code: `import { clsx, type ClassValue } from 'clsx';
      import { twMerge } from 'tailwind-merge';

      export function cn(...inputs: ClassValue[]) {
        return twMerge(clsx(inputs));
      }
      `,
          hidden: true,
        },

        'hooks/useMatchMedia.ts': {
          code: `import { useCallback, useMemo, useSyncExternalStore } from 'react';

export function useMatchMedia(
  mediaQuery: string,
  initialState = true
): boolean {
  const matchMediaList = useMemo(
    () =>
      typeof window === 'undefined' ? undefined : window.matchMedia(mediaQuery),
    [mediaQuery]
  );

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      matchMediaList?.addEventListener('change', onStoreChange);
      return () => matchMediaList?.removeEventListener('change', onStoreChange);
    },
    [matchMediaList]
  );

  return useSyncExternalStore(
    subscribe,
    () => matchMediaList?.matches ?? initialState,
    () => initialState
  );
}
`,
          hidden: true,
        },
      }}
    />
  );
}
