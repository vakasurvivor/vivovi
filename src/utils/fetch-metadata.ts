import metascraper from 'metascraper';
import metascraperDescription from 'metascraper-description';
import metascraperImage from 'metascraper-image';
import metascraperLogo from 'metascraper-logo-favicon';
import metascraperPublisher from 'metascraper-publisher';
import metascraperTitle from 'metascraper-title';
import sharp from 'sharp';

export interface LinkCardData {
  url: string;
  title: string;
  description?: string;
  provider?: string;
  image: string;
  icon: string;
}

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
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Googlebot' },
    });
    const html = await response.text();
    const metadata = await metascraperInstance({ html, url });

    if (
      typeof metadata.logo !== 'string' ||
      typeof metadata.image !== 'string'
    ) {
      return null;
    }

    const optimizedImage = await optimizeImage({
      imageUrl: metadata.image,
      width: 500,
      height: 250,
    });

    const optimizedIcon = await optimizeImage({
      imageUrl: metadata.logo,
      width: 48,
      height: 48,
    });

    return {
      url,
      title: metadata.title || '',
      description: metadata.description || '',
      provider: metadata.publisher || '',
      image: optimizedImage || '',
      icon: optimizedIcon || '',
    };
  } catch (e) {
    console.error('Error fetching or processing metadata:', e);
    return null;
  }
};

interface OptimizeImageProps {
  imageUrl: string;
  width: number;
  height: number;
}

// optimizeImage
async function optimizeImage({
  imageUrl,
  width,
  height,
}: OptimizeImageProps): Promise<string | null> {
  try {
    const res = await fetch(imageUrl);
    const buffer = Buffer.from(await res.arrayBuffer());
    // sharpを使用して、画像を最適化する
    const optimizedImageBuffer = await sharp(buffer)
      .resize(width, height) // サイズの変更
      .webp({ quality: 90 }) // WebPフォーマットに変換し、クオリティを調整
      .toBuffer();
    return `data:image/webp;base64,${optimizedImageBuffer.toString('base64')}`;
  } catch (e) {
    console.error('Error optimizing image:', e);
    return null;
  }
}

export { fetchMetadata };
