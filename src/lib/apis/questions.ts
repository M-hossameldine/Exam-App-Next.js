import {
  QuestionsResponse,
  QuestionsSuccessResponse,
} from '../types/questions';

export const getQuestions = async (examId: string) => {
  const response = await fetch(`/api/questions?examId=${examId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch questions');
  }

  const payload: QuestionsResponse = await response.json();

  if (payload.message !== 'success') {
    throw new Error(payload.message);
  }

  return payload as QuestionsSuccessResponse;
};
