import { cn } from '@/lib/utils/tailwind-merge';

import Link from 'next/link';

import { type LucideIcon } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

export type PageHeaderProps = {
  title: string;
  icon: LucideIcon;
  goBackUrl?: string;
  className?: string;
};

export default function PageHeader({
  title,
  icon: Icon,
  goBackUrl,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn('flex gap-2.5 items-stretch h-20 m-6', className)}>
      {goBackUrl && (
        <Link
          href={goBackUrl}
          className="flex items-center justify-center w-9 text-primary border border-primary"
        >
          <ChevronLeft size={24} />
        </Link>
      )}

      <div className="flex gap-4 items-center p-4 bg-primary text-primary-foreground w-full">
        <Icon className="w-11 h-11" />

        <h1 className="text-3xl font-semibold">{title}</h1>
      </div>
    </header>
  );
}
