import { cn } from '@/utils/cn';
import Image, { type ImageProps } from 'next/image';
import { ComponentPropsWithoutRef } from 'react';

/**
 * @param {CustomImgProps} props - MDXコードブロック編集によってpreJSX要素に渡されるprops
 * @returns {JSX.Element} - カスタマイズされたimgJSX要素
 */

export default function CustomImg(
  props: ComponentPropsWithoutRef<'img'> & ImageProps,
) {
  const { src, alt, ...rest } = props;

  return (
    <Image
      src={src || ''}
      alt={alt}
      width={824}
      height={600}
      className={cn(
        'relative',
        'my-8',
        'block',
        'overflow-hidden',
        'rounded-lg shadow-lg',
        'border border-border/40',
        'has-[+sup]:mb-0 [&+sup]:mr-1',
        // '[&+sup]:align-bottom',
      )}
      {...rest}
    />
  );
}