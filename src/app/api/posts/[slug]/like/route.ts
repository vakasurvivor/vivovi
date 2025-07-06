import { prisma } from '@/libs/prismaClient';
import { NextRequest, NextResponse, URLPattern } from 'next/server';

// URLPatternを使ってslugを抽出
function extractSlug(request: NextRequest): string | null {
  const pattern = new URLPattern({ pathname: '/api/posts/:slug/like' });
  const match = pattern.exec(request.nextUrl.pathname);
  return match?.pathname.groups.slug ?? null;
}

// いいねの数を取得するAPI
export async function GET(request: NextRequest) {
  const slug = extractSlug(request);

  if (!slug) {
    return NextResponse.json({ error: 'Slug not provided' }, { status: 400 });
  }

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      select: {
        likes: true,
      },
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ likes: post.likes });
  } catch (error) {
    console.error('Error fetching likes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch likes' },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}

// いいねの数をインクリメントするAPI
export async function POST(request: NextRequest) {
  const slug = extractSlug(request);

  if (!slug) {
    return NextResponse.json({ error: 'Slug not provided' }, { status: 400 });
  }

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: {
        likes: {
          increment: 1,
        },
      },
      select: {
        likes: true,
      },
    });

    return NextResponse.json({ likes: post.likes });
  } catch (error) {
    console.error('Error updating likes:', error);
    return NextResponse.json(
      { error: 'Failed to update likes' },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}

// いいねの数をデクリメントするAPI
export async function DELETE(request: NextRequest) {
  const slug = extractSlug(request);

  if (!slug) {
    return NextResponse.json({ error: 'Slug not provided' }, { status: 400 });
  }

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: {
        likes: {
          decrement: 1,
        },
      },
      select: {
        likes: true,
      },
    });

    return NextResponse.json({ likes: post.likes });
  } catch (error) {
    console.error('Error updating likes:', error);
    return NextResponse.json(
      { error: 'Failed to update likes' },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
