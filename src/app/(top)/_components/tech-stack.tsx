import { cn } from '@/utils/cn';
import TechItems from './tech-items';
import Title from './title';

export default function TechStack({ className }: { className?: string }) {
  return (
    <div className={cn('mx-auto', className)}>
      <Title subTitle="Tech Stack" className="pt-40">
        技術選定&nbsp;（抜粋）
      </Title>
      <p className="text-foreground/30 mt-3 text-sm">
        ※
        当サイトは、以下の主要な技術で構成されています。学習目的なため技術選定が安定しておりません。頻繁に入れ替わるかと思います。
      </p>
      <TechItems className="my-12" />
    </div>
  );
}
