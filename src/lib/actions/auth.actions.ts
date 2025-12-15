'use server';

import { getApiBaseHeaders } from '../utils/apis.utils';

import {
  ForgotPasswordFields,
  ForgotPasswordResponse,
  VerifyResetCodeFields,
  VerifyResetCodeResponse,
} from '../types/auth';
import { API } from '../constants/api.constants';

const BASE_URL = `${API}/auth`;

export const forgotPassword = async (payload: ForgotPasswordFields) => {
  const commonHeaders = getApiBaseHeaders();

  const response = await fetch(`${BASE_URL}/forgotPassword`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      ...commonHeaders,
    },
  });

  const result = await response.json();

  return result as ForgotPasswordResponse;
};

export const verifyResetCode = async (payload: VerifyResetCodeFields) => {
  const commonHeaders = getApiBaseHeaders();

  const response = await fetch(`${BASE_URL}/verifyResetCode`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      ...commonHeaders,
    },
  });

  const result = await response.json();

  return result as VerifyResetCodeResponse;
};
