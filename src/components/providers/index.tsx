'use client';

import { NextAuthProvider } from './_components/next-auth.provider';
import ReactQueryProvider from './_components/react-query-provider';
import { SessionProvider } from 'next-auth/react';

type ProviderProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProviderProps) {
  return (
    <NextAuthProvider>
      <ReactQueryProvider>
        <SessionProvider>{children}</SessionProvider>
      </ReactQueryProvider>
    </NextAuthProvider>
  );
}
