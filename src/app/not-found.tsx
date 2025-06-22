import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-background grid h-[calc(100dvh-var(--header-height))] place-items-center">
      <div>
        <span className="text-6xl font-bold">404</span>
        <h1>
          ご指定のページが見つかりません。 [ Status Code : 404 Not Found ]
        </h1>
        <div className="mt-4">
          <p>大変に申し訳ございません。以下のいずれかの理由が考えられます。</p>
          <ul>
            <li>ご記載のURLが間違っている可能性があります。</li>
            <li>ページが移動または削除された可能性があります。</li>
          </ul>
        </div>
        <Button asChild variant="ghost" className={cn('font-bold')}>
          <Link href="/">Top へ戻る</Link>
        </Button>
      </div>
    </div>
  );
}
