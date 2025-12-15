'use server';

import { DeleteAccountSuccessResponse } from '../types/settings';
import { getApiBaseHeaders, getApiAuthHeader } from '../utils/apis.utils';

import { API } from '../constants/api.constants';

const BASE_URL = `${API}/auth`;

export const deleteAccount = async () => {
  const commonHeaders = getApiBaseHeaders();
  const authHeader = await getApiAuthHeader();

  const response = await fetch(`${BASE_URL}/deleteMe`, {
    method: 'DELETE',
    headers: {
      ...commonHeaders,
      ...authHeader,
    },
  });

  const result = await response.json();

  return result as DeleteAccountSuccessResponse;
};
