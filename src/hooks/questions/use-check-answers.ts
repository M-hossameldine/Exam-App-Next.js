import { useMutation } from '@tanstack/react-query';
import { checkAnswers } from '@/lib/actions/questions.actions';
import { CheckAnswersPayload } from '@/lib/types/questions';

export const useCheckAnswers = () => {
  return useMutation({
    mutationKey: ['check-answers'],
    mutationFn: async (payload: CheckAnswersPayload) => {
      const response = await checkAnswers(payload);
      return response;
    },
  });
};
