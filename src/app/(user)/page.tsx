import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

import { getDiplomas } from '@/lib/apis/diplomas';

import DiplomasList from './_components/diplomas-list';

export default async function Page() {
  const queryClient = new QueryClient();

  // Server-side prefetch
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getDiplomas,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div>
        {/* TODO: add header */}

        <DiplomasList />
      </div>
    </HydrationBoundary>
  );
}
