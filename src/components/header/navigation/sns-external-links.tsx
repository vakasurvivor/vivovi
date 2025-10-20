import DiscordIcon from '@/components/discord-icon';
import GitHubIcon from '@/components/github-icon';
import XIcon from '@/components/x-icon';
import { cn } from '@/utils';
import Link from 'next/link';

const icons = [
  {
    icon: GitHubIcon,
    href: 'https://github.com',
  },
  {
    icon: XIcon,
    href: 'https://x.com',
  },
  {
    icon: DiscordIcon,
    href: 'https://discord.com',
  },
];

export default function SnsExternalLinks({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        '[&>a]:dark:border-border/14 [&>a]:border-border/7 flex h-full items-stretch',
        className,
      )}
    >
      {icons.map((icon, index) => {
        return (
          <Link
            key={index}
            href={icon.href}
            target="_blank"
            className="grid place-items-center border-r p-4 first:border-l hover:bg-slate-600/20 hover:[&>*]:opacity-100"
          >
            <icon.icon className="size-4 opacity-70 transition-all dark:opacity-50" />
          </Link>
        );
      })}
    </div>
  );
}
