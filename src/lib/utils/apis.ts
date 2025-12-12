import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export const getAuthorizedApiHeaders = async (request: NextRequest) => {
  const token = await getToken({ req: request });

  return {
    token: token?.accessToken ?? '',
    'Content-Type': 'application/json',
    'Accept-Language': 'ar',
  };
};
