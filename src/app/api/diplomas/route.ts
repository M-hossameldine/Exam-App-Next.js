import { NextRequest, NextResponse } from 'next/server';
import { getApiBaseHeaders, getApiAuthHeader } from '@/lib/utils/apis.utils';
import { API } from '@/lib/constants/api.constants';

const BASE_URL = `${API}/subjects`;

export async function GET(request: NextRequest) {
  // Extract search params from the incoming request
  const { searchParams } = request.nextUrl;
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '10';

  const headers = getApiBaseHeaders();
  const authHeader = await getApiAuthHeader(request);

  const response = await fetch(`${BASE_URL}?page=${page}&limit=${limit}`, {
    method: 'GET',
    headers: {
      ...headers,
      ...authHeader,
    },
    cache: 'no-store',
  });

  const payload = await response.json();

  return NextResponse.json(payload);
}
