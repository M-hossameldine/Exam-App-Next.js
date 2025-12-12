import { NextRequest, NextResponse } from 'next/server';
import { API } from '@/lib/constants/api.constants';
import { getAuthorizedApiHeaders } from '@/lib/utils/apis';

const BASE_URL = `${API}/exams`;

export async function GET(request: NextRequest) {
  // Extract search params from the incoming request
  const { searchParams } = request.nextUrl;
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '10';

  const headers = await getAuthorizedApiHeaders(request);

  const response = await fetch(`${BASE_URL}?page=${page}&limit=${limit}`, {
    method: 'GET',
    headers,
    cache: 'no-store',
  });

  const payload = await response.json();

  return NextResponse.json(payload);
}
