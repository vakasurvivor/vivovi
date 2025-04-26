import { cn } from '@/utils/cn';

interface CustomCodeSandboxProps {
  url: string;
  className?: string;
  children?: React.ReactNode;
}

export default function CodeSandbox({
  url,
  className,
}: CustomCodeSandboxProps) {
  return (
    <iframe
      src={`${url}&theme=dark&fontsize=14&codemirror=1&hidenavigation=1`}
      className={cn(
        'border-foreground/5 my-12 h-[500px] w-full rounded-lg border shadow-md max-sm:mx-[calc(50%-50cqi)] max-sm:w-[100cqi]',
        className,
      )}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
}
