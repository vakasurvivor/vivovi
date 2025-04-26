// app/api/posts/[slug]/like/route.ts
import { prisma } from '@/libs/prismaClient';
import { NextResponse } from 'next/server';

// いいねの数を取得するAPI
export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = await params;

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

// いいねの数を更新（インクリメント）するAPI
export async function POST(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = await params;

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

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

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

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = await params;

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

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

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
