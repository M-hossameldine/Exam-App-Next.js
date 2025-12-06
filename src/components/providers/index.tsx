import { NextAuthProvider } from "./_components/next-auth.provider";

type ProviderProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProviderProps) {
  return <NextAuthProvider>{children}</NextAuthProvider>;
}
