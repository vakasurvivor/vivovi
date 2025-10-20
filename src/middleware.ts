// middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // リクエストされたパスが /about で、かつメンテナンスモードの場合
  // if (request.nextUrl.pathname === '/registry') {
  //   const url = request.nextUrl.clone();
  //   url.pathname = '/maintenance';
  //   return NextResponse.rewrite(url);
  // }

  // 通常通りリクエストを続行
  return NextResponse.next();
}

// Middlewareを適用するパスを限定
export const config = {
  matcher: ['/registry', '/maintenance'],
};
