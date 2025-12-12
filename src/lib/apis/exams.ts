import { ExamsResponse, ExamsSuccessResponse } from '../types/exams';

export const getExams = async (page: number): Promise<ExamsSuccessResponse> => {
  const response = await fetch(`/api/exams?page=${page}&limit=10`);

  if (!response.ok) {
    throw new Error('Failed to fetch exams');
  }

  const payload: ExamsResponse = await response.json();

  if (payload.message !== 'success') {
    throw new Error(payload.message);
  }

  return payload as ExamsSuccessResponse;
};
