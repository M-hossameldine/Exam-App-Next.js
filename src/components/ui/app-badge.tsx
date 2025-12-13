import { cn } from '@/lib/utils/tailwind-merge';

import { FolderCode } from 'lucide-react';

type AppBadgeProps = {
  className?: string;
};

export const AppBadge = ({ className }: AppBadgeProps) => {
  return (
    <p
      className={cn(
        'flex items-start gap-2.5 text-xl font-semibold text-primary',
        className
      )}
    >
      <span className="relative mt-0.5" aria-hidden="true">
        <FolderCode className="absolute top-0 left-0 w-6 h-6 fill-primary" />
        <FolderCode className="absolute top-0 left-0 w-6 h-6 [&_path:nth-child(3)]:stroke-primary [&_path]:stroke-primary-foreground" />
      </span>
      <span className="ps-6">Exam App</span>
    </p>
  );
};
