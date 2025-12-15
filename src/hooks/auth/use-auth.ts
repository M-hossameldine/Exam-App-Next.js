import { useMutation } from '@tanstack/react-query';
import { LoginFields, SignupFields } from '@/lib/types/auth';
import { signIn } from 'next-auth/react';

import { DEFAULT_AUTHORIZED_ROUTE } from '@/lib/constants/settings.constants';

type AuthFields =
  | (LoginFields & { mode: 'signin' })
  | (SignupFields & { mode: 'signup' });

export function useAuth() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (fields: AuthFields) => {
      const response = await signIn('credentials', {
        ...fields,
        redirect: false,
      });

      if (!response?.ok) {
        throw new Error(
          response?.error || 'Failed to login, please try again.'
        );
      }

      return response;
    },
    onSuccess: () => {
      // * used location.search instead of useSearchParams to avoid unnecessary re-renders, since the search params are not manipulated
      const callbackUrl =
        new URLSearchParams(location.search).get('callbackUrl') ||
        DEFAULT_AUTHORIZED_ROUTE;

      // * used window.location.href instead of router.push to fully refresh the page and make sure the user data is updated correctly
      window.location.href = callbackUrl;
    },
  });

  return {
    isPending,
    error,
    mutate,
  };
}
