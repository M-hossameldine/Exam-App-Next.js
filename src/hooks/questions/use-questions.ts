import { useQuery } from '@tanstack/react-query';
import { getQuestions } from '@/lib/apis/questions';
import { QuestionsSuccessResponse } from '@/lib/types/questions';

export const useQuestions = (examId: string) => {
  const { data, isLoading, isError, error } =
    useQuery<QuestionsSuccessResponse>({
      queryKey: ['questions', examId],
      queryFn: () => getQuestions(examId),
    });

  return { data, isLoading, isError, error };
};
