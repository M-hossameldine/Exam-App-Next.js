import { DiplomasResponse, DiplomasSuccessResponse } from '../types/diplomas';

export const getDiplomas = async (): Promise<DiplomasSuccessResponse> => {
  const response = await fetch(`/api/diplomas`, {});

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const payload: DiplomasResponse = await response.json();

  if (payload.message !== 'success') {
    throw new Error(payload.message);
  }

  return payload as DiplomasSuccessResponse;
};
