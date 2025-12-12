import { DiplomasResponse, DiplomasSuccessResponse } from '../types/diplomas';

export const getDiplomas = async (
  page: number
): Promise<DiplomasSuccessResponse> => {
  const response = await fetch(`/api/diplomas?page=${page}&limit=3`, {});

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const payload: DiplomasResponse = await response.json();

  if (payload.message !== 'success') {
    throw new Error(payload.message);
  }

  return payload as DiplomasSuccessResponse;
};
