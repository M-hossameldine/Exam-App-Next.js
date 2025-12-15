'use server';

import { getApiBaseHeaders } from '../utils/apis.utils';

import {
  ForgotPasswordEmailFields,
  ForgotPasswordEmailResponse,
} from '../types/auth';
import { API } from '../constants/api.constants';

const BASE_URL = `${API}/auth`;

export const forgotPassword = async (payload: ForgotPasswordEmailFields) => {
  const commonHeaders = getApiBaseHeaders();

  const response = await fetch(`${BASE_URL}/forgotPassword`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      ...commonHeaders,
    },
  });

  const result = await response.json();

  return result as ForgotPasswordEmailResponse;
};
