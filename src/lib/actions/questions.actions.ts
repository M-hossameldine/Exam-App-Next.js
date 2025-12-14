'use server';

import {
  CheckAnswersPayload,
  CheckAnswersSuccessResponse,
} from '../types/questions';
import { getApiBaseHeaders, getApiAuthHeader } from '../utils/apis.utils';

import { API } from '../constants/api.constants';

const BASE_URL = `${API}/questions`;

export const checkAnswers = async (payload: CheckAnswersPayload) => {
  const commonHeaders = await getApiBaseHeaders();
  const authHeader = await getApiAuthHeader();

  const response = await fetch(`${BASE_URL}/check`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      ...commonHeaders,
      ...authHeader,
    },
  });

  const result = await response.json();

  return result as CheckAnswersSuccessResponse;
};
