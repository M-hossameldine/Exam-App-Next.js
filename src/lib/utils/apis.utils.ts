import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export const getRouteHandlerAuthHeader = async (request: NextRequest) => {
  const token = await getToken({ req: request });

  return {
    token: token?.accessToken ?? '',
  };
};

export const getCommonApiHeaders = async (request: NextRequest) => {
  const token = await getToken({ req: request });

  return {
    token: token?.accessToken ?? '',
    'Content-Type': 'application/json',
    'Accept-Language': 'ar',
  };
};
