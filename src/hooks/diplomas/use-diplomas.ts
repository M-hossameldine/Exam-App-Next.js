import { useInfiniteQuery } from '@tanstack/react-query';
import { getDiplomas } from '@/lib/apis/diplomas';
import { DiplomasSuccessResponse } from '@/lib/types/diplomas';

export const useDiplomas = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isPending,
  } = useInfiniteQuery<DiplomasSuccessResponse>({
    queryKey: ['diplomas'],
    queryFn: ({ pageParam = 1 }) => getDiplomas(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (lastPage.metadata.currentPage === lastPage.metadata.numberOfPages) {
        return undefined;
      }

      return lastPage.metadata.nextPage ?? undefined;
    },
  });

  const diplomas = data?.pages.flatMap(page => page.subjects) || [];

  return {
    data: diplomas,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isPending,
    isFetchingNextPage,
  };
};
