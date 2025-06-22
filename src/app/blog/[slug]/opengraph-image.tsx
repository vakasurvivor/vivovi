import { ImageResponse } from 'next/og';

export const runtime = 'edge'; // Edgeで実行されることを明示

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'デフォルトのタイトル';

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'white',
          color: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {title}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
