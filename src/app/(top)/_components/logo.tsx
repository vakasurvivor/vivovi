'use client';

import { cn } from '@/utils/cn';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Logo({ className }: { className?: string }) {
  const { theme } = useTheme();
  return (
    <div className={cn('relative', className)}>
      <div
        className={cn(
          'relative z-10 aspect-[870/200] w-full',
          'bg-black dark:bg-white',
          '[mask-image:url(/img/VIV_VI.svg)] [mask-size:contain] [mask-repeat:no-repeat]',
        )}
      ></div>
      <div
        className={cn(
          'absolute top-0 left-0 z-10',
          'aspect-[870/200] w-full',
          'bg-black dark:bg-white',
          '[mask-image:url(/img/icons.svg)] [mask-size:contain] [mask-repeat:no-repeat]',
        )}
      ></div>
      <div
        className={cn(
          'aspect-square w-[29%]',
          'absolute top-[-11%] left-[47%] z-20',
        )}
      >
        <div
          className={cn(
            'aspect-square w-[77%]',
            'absolute inset-0 z-20 m-auto',
            'bg-gradient-to-t from-blue-700 to-blue-400',
            'animate-spin duration-[40s]',
            '[mask-image:url(/img/logo.svg)] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]',
          )}
        ></div>
        <div
          className={cn(
            'aspect-square w-full',
            'absolute inset-0 z-20 m-auto',
            'bg-gradient-to-t from-blue-700 from-88% to-blue-400',
            'direction-reverse animate-spin duration-[60s]',
            '[mask-image:url(/img/docker.svg)] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]',
          )}
        ></div>
      </div>

      <div className="absolute top-[-21%] right-0 z-20 aspect-square w-[10%] translate-x-[20%]">
        <Image
          src="img/linux.svg"
          alt="SVG画像"
          width="200"
          height="200"
        ></Image>
      </div>
    </div>
  );
}
