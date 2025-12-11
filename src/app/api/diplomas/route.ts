import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { API, LANGUAGE_HEADER } from '@/lib/constants/api.constants';

const BASE_URL = `${API}/subjects`;

export async function GET(request: NextRequest) {
  const token = await getToken({ req: request });

  const response = await fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      token: token?.accessToken ?? '',
      'Content-Type': 'application/json',
      ...LANGUAGE_HEADER,
    },
    cache: 'no-store',
  });

  const payload = await response.json();

  return NextResponse.json(payload);
}
