import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { LoginResponse } from './lib/types/auth';

type AuthMode = 'signin' | 'signup';

export const authOptions: NextAuthOptions = {
  pages: { signIn: '/login' },
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        mode: {},
        // shared
        email: {},
        password: {},

        // signup-only
        username: {},
        firstName: {},
        lastName: {},
        rePassword: {},
        phone: {},
      },
      authorize: async credentials => {
        const mode = (credentials?.mode as AuthMode) ?? 'signin';

        const url =
          mode === 'signup'
            ? `${process.env.API}/auth/signup`
            : `${process.env.API}/auth/signin`;

        const body =
          mode === 'signup'
            ? {
                username: credentials?.username,
                firstName: credentials?.firstName,
                lastName: credentials?.lastName,
                email: credentials?.email,
                password: credentials?.password,
                rePassword: credentials?.rePassword,
                phone: credentials?.phone,
              }
            : {
                email: credentials?.email,
                password: credentials?.password,
              };

        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });

        const payload: ApiResponse<LoginResponse> = await res.json();

        if (!res.ok || 'code' in payload) {
          throw new Error(payload.message ?? 'Authentication failed');
        }

        // MUST return an object with `id`
        return {
          id: payload.user._id, // * authorize must return an object with an id property
          accessToken: payload.token,
          user: payload.user,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => ({
      // * user & token provided by authorize callback return
      ...token,
      ...(user ? { accessToken: user.accessToken, user: user.user } : {}),
    }),
    session: ({ session, token }) => ({
      ...session,
      // * don't pass the accessToken to the session as it could be vulnerable on the client side
      user: token.user,
    }),
  },
};
