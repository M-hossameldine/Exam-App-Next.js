'use client';

import { useQuery } from '@tanstack/react-query';
import { getDiplomas } from '@/lib/apis/diplomas';
import { DiplomasSuccessResponse } from '@/lib/types/diplomas';

import DiplomaCard from './diploma-card';

export default function DiplomasList() {
  const { data, isLoading, error } = useQuery<DiplomasSuccessResponse>({
    queryKey: ['diplomas'],
    queryFn: getDiplomas,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <ul className="grid grid-cols-3 gap-2.5">
      {data?.subjects?.map?.(diploma => (
        <DiplomaCard key={diploma._id} diploma={diploma} />
      ))}
    </ul>
  );
}
