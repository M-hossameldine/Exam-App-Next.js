import { cn } from '@/lib/utils/tailwind-merge';

type LazyLoadingIndicatorProps = {
  className?: string;
  text?: string;
};

export default function LazyLoadingIndicator({
  className,
  text,
}: LazyLoadingIndicatorProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center min-h-20 w-full text-xl font-semibold text-secondary',
        className
      )}
    >
      {text || 'Loading Data...'}
    </div>
  );
}
