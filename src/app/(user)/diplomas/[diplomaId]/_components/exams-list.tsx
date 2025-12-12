'use client';

import { useExams } from '@/hooks/exams/use-exams';
import { useParams } from 'next/navigation';

import InfiniteScroll from 'react-infinite-scroll-component';
import ExamCard from './exam-card';

export default function ExamsList() {
  const { diplomaId } = useParams<{ diplomaId: string }>();

  const {
    data: exams,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useExams();

  return (
    <ul id="scrollableDiv" className="h-[calc(100vh-150px)] overflow-y-auto">
      <InfiniteScroll
        dataLength={exams?.length || 0}
        next={fetchNextPage}
        hasMore={hasNextPage ?? false}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        <ul className="flex flex-col gap-4">
          {exams?.map?.(exam => (
            <ExamCard key={exam._id} exam={exam} diplomaId={diplomaId} />
          ))}

          {!(hasNextPage || isFetchingNextPage || isLoading) && (
            <p className="text-secondary-600 mt-2.5 mx-auto">End of list</p>
          )}
        </ul>
      </InfiniteScroll>
    </ul>
  );
}
