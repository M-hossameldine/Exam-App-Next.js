import { NextRequest, NextResponse } from 'next/server';
import {
  getCommonApiHeaders,
  getRouteHandlerAuthHeader,
} from '@/lib/utils/apis.utils';

import { API } from '@/lib/constants/api.constants';

const BASE_URL = `${API}/questions`;

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const examId = searchParams.get('examId');

  const headers = await getCommonApiHeaders(request);
  const authHeader = await getRouteHandlerAuthHeader(request);

  const response = await fetch(`${BASE_URL}?exam=${examId}`, {
    method: 'GET',
    headers: {
      ...headers,
      ...authHeader,
    },
    cache: 'no-store',
  });

  const payload = await response.json();

  const updatedPayload = {
    ...payload,
    // * add exam to payload to avoid calling its endpoint
    exam: payload?.questions?.[0]?.exam || null,
  };

  return NextResponse.json(updatedPayload);
}
