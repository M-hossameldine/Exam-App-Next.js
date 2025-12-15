'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ErrorBox } from '@/components/ui/error-box';
import { Spinner } from '@/components/ui/spinner';

export type FormFooterProps = {
  submitButtonText: React.ReactNode;
  altActionDescription: string;
  altActionText: string;
  altActionHref: string;
  error?: string;
  isLoading?: boolean;
};

export default function FormFooter({
  submitButtonText,
  altActionDescription,
  altActionText,
  altActionHref,
  error,
  isLoading = false,
}: FormFooterProps) {
  return (
    <div className="flex flex-col items-center gap-9 mt-10 w-full">
      {error && <ErrorBox error={error} />}

      <Button className="w-full" variant="default" disabled={isLoading}>
        {isLoading && <Spinner className="size-4 animate-spin" />}
        {submitButtonText}
      </Button>

      <p className="text-sm font-medium text-secondary-500">
        {altActionDescription}{' '}
        <Link href={altActionHref} className="text-primary">
          {altActionText}
        </Link>
      </p>
    </div>
  );
}
