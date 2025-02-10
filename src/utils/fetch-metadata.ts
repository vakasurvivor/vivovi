import metascraper from 'metascraper';
import metascraperDescription from 'metascraper-description';
import metascraperImage from 'metascraper-image';
import metascraperLogo from 'metascraper-logo-favicon';
import metascraperPublisher from 'metascraper-publisher';
import metascraperTitle from 'metascraper-title';
import { Buffer } from 'node:buffer';
import sharp from 'sharp';

export type LinkCardData = {
  url: string;
  title: string;
  description?: string;
  provider?: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
  icon?: {
    url: string;
    width: number;
    height: number;
  };
};

const metascraperInstance = metascraper([
  metascraperImage(),
  metascraperLogo(),
  metascraperTitle(),
  metascraperDescription(),
  metascraperPublisher(),
]);

// fetchMetadata
const fetchMetadata = async (url: string): Promise<LinkCardData | null> => {
  try {
    const response = await fetch(url, { cache: 'force-cache' });
    const html = await response.text();
    const metadata = await metascraperInstance({ html, url });

    const optimizedImage = metadata.image
      ? await optimizeImage({
          url: metadata.image,
          width: 500,
          height: null,
          quality: 90,
        })
      : undefined;

    const optimizedIcon = metadata.logo
      ? await optimizeImage({
          url: metadata.logo,
          width: 50,
          height: 50,
        })
      : undefined;

    return {
      url,
      title: metadata.title || '',
      description: metadata.description || '',
      provider: metadata.publisher || '',
      image: optimizedImage,
      icon: optimizedIcon,
    };
  } catch (e) {
    console.error('Error fetching or processing metadata:', e);
    return null;
  }
};

type OptimizeImageProps = {
  url: string;
  width: number;
  height: number | null;
  quality?: number;
};

async function optimizeImage({
  url,
  width,
  height,
  quality = 100,
}: OptimizeImageProps): Promise<
  | {
      url: string;
      width: number;
      height: number;
    }
  | undefined
> {
  try {
    const res = await fetch(url);
    const buffer = Buffer.from(await res.arrayBuffer());
    // sharpを使用して、画像を最適化する
    const optimizedImageBuffer = await sharp(buffer)
      .resize(width, height) // サイズの変更
      .webp({ quality }) // WebPフォーマットに変換し、クオリティを調整
      .toBuffer();

    // 最適化した画像をbase64形式に変換
    const optimizedUrl = `data:image/webp;base64,${optimizedImageBuffer.toString('base64')}`;
    // 最適化した画像の width と height を取得
    const { width: optimizedWidth, height: optimizedHeight } =
      await sharp(optimizedImageBuffer).metadata();

    return {
      url: optimizedUrl,
      width: optimizedWidth as number,
      height: optimizedHeight as number,
    };
  } catch (e) {
    console.error('Error optimizing image:', e);
    return undefined;
  }
}

export { fetchMetadata };
