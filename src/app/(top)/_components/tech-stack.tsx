import Title from '@/components/title';
import { cn } from '@/utils';
import TechItems from './tech-items';

export default function TechStack({ className }: { className?: string }) {
  return (
    <div className={cn('mx-auto', className)}>
      <Title subTitle="Tech Stack" className="pt-40">
        技術選定&nbsp;（抜粋）
      </Title>
      <p className="text-foreground/30 mt-6 text-sm">
        ※
        当サイトは、主にフロントエンド開発の学習を目的として構築されています。そのため、使用している技術スタック（フレームワーク、ライブラリ、ビルドツールなど）は常に見直しや試行を重ねており、開発の過程で頻繁に変更・入れ替えが行われる可能性があります。安定稼働よりも技術的な探究や検証を優先しているため、実装内容や構成は予告なく変化する場合があります。ご了承のうえ、ご覧いただければ幸いです。
      </p>
      <TechItems className="my-12" />
    </div>
  );
}
