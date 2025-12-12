import { useInfiniteQuery } from '@tanstack/react-query';
import { getExams } from '@/lib/apis/exams';
import { ExamsSuccessResponse } from '@/lib/types/exams';

export const useExams = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery<ExamsSuccessResponse>({
      queryKey: ['exams'],
      queryFn: ({ pageParam = 1 }) => getExams(pageParam as number),
      initialPageParam: 1,
      getNextPageParam: lastPage => {
        if (lastPage.metadata.currentPage === lastPage.metadata.numberOfPages) {
          return undefined;
        }

        return lastPage.metadata.nextPage ?? undefined;
      },
    });

  const exams = data?.pages.flatMap(page => page.exams) || [];

  return {
    data: exams,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  };
};
