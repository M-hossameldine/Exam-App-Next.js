'use client';

import { useDiplomas } from '@/hooks/diplomas/use-diplomas';

import InfiniteScroll from 'react-infinite-scroll-component';
import DiplomaCard from './diploma-card';

export default function DiplomasList() {
  const {
    data: diplomas,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useDiplomas();

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

        {!(hasNextPage || isFetchingNextPage || isLoading) && (
          <p className="text-secondary-600 mt-6 mx-auto text-center">
            End of list
          </p>
        )}
      </InfiniteScroll>
    </ul>
  );
}
