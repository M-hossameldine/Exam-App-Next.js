'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getDiplomas } from '@/lib/apis/diplomas';
import { DiplomasSuccessResponse } from '@/lib/types/diplomas';

import InfiniteScroll from 'react-infinite-scroll-component';
import DiplomaCard from './diploma-card';

export default function DiplomasList() {
  const { data, fetchNextPage, hasNextPage } =
    useInfiniteQuery<DiplomasSuccessResponse>({
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

  return (
    <ul id="scrollableDiv" className="h-[calc(100vh-150px)] overflow-y-auto">
      <InfiniteScroll
        dataLength={diplomas?.length || 0}
        next={fetchNextPage}
        hasMore={hasNextPage ?? false}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        <ul className="grid grid-cols-3 gap-2.5">
          {diplomas?.map?.(diploma => (
            <DiplomaCard key={diploma._id} diploma={diploma} />
          ))}
        </ul>
      </InfiniteScroll>
    </ul>
  );
}
