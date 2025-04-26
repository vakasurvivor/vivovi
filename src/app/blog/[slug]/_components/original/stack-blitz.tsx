import { cn } from '@/utils/cn';

interface CustomStackBlitzProps {
  url: string;
  ctl?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function StackBlitz({
  url,
  ctl = 0,
  className,
}: CustomStackBlitzProps) {
  return (
    <iframe
      src={`${url}&ctl=${ctl}`}
      className={cn(
        'border-foreground/5 h-[520px] rounded-lg border shadow-md',
        'w-[100cqi] max-md:w-full',
        'mx-[calc(50%-50cqi)] my-8 max-md:mx-0',
        className,
      )}
    ></iframe>
  );
}
