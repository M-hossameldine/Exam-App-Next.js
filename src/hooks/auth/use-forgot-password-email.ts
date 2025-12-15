import { useMutation } from '@tanstack/react-query';

import { forgotPassword } from '@/lib/actions/auth.actions';
import { ForgotPasswordEmailFields } from '@/lib/types/auth';

export const useForgotPasswordEmail = () => {
  const { isPending, error, mutateAsync } = useMutation({
    mutationFn: async (payload: ForgotPasswordEmailFields) => {
      const response = await forgotPassword(payload);

      if ('code' in response) {
        throw new Error(response.message || 'Invalid email address');
      }

      return response;
    },
  });
  return { isPending, error, mutateAsync };
};
