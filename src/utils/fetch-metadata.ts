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
  description: string | null;
  provider: string | null;
  image: {
    url: string;
    width: number;
    height: number;
  } | null;
  icon: {
    url: string;
    width: number;
    height: number;
  } | null;
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
    const res = await fetch(url, { cache: 'force-cache' });
    if (!res.ok) throw new Error(`HTTP error status: ${res.status}`);

    const html = await res.text();
    const metadata = await metascraperInstance({ html, url });

    const image = metadata.image
      ? await optimizeImage({
          url: metadata.image,
          width: 500,
          height: null,
          quality: 90,
        })
      : null;

    const icon = metadata.logo
      ? await optimizeImage({
          url: metadata.logo,
          width: 50,
          height: 50,
        })
      : null;

    return {
      url,
      title: metadata.title || '',
      description: metadata.description || null,
      provider: metadata.publisher || null,
      image,
      icon,
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
}: OptimizeImageProps): Promise<{
  url: string;
  width: number;
  height: number;
} | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Image fetch failed: ${res.status}`);

    const buffer = Buffer.from(await res.arrayBuffer());

    // sharpで画像を最適化
    const optimizedImageBuffer = await sharp(buffer)
      .resize(width, height)
      .webp({ quality })
      .toBuffer();

    // 最適化した画像の width と height を取得
    const { width: optimizedWidth, height: optimizedHeight } =
      await sharp(optimizedImageBuffer).metadata();

    if (!optimizedWidth || !optimizedHeight) {
      throw new Error('Failed to retrieve image dimensions');
    }

    return {
      url: `data:image/webp;base64,${optimizedImageBuffer.toString('base64')}`,
      width: optimizedWidth,
      height: optimizedHeight,
    };
  } catch (e) {
    console.error('Error optimizing image:', e);
    return null;
  }
}

export { fetchMetadata };
