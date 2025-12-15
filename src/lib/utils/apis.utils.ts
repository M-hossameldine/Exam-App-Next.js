import { NextRequest } from 'next/server';
import { headers } from 'next/headers';
import { getToken } from 'next-auth/jwt';

import { API } from '../constants/api.constants';

export const getApiAuthHeader = async (request?: NextRequest) => {
  let nextRequest = request;

  if (!request) {
    // Create the NextRequest instance the getToken expects
    const headersList = headers();
    nextRequest = new NextRequest(API, {
      headers: headersList,
    });
  }

  const token = await getToken({ req: nextRequest as NextRequest });

  return {
    token: token?.accessToken ?? '',
  };
};

export const getApiBaseHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Accept-Language': 'ar',
  };
};
