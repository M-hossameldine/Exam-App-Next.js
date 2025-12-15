import { useMutation } from '@tanstack/react-query';
import { verifyResetCode } from '@/lib/actions/auth.actions';
import { VerifyResetCodeFields } from '@/lib/types/auth';

export const useVerifyResetCode = () => {
  const { isPending, error, mutateAsync } = useMutation({
    mutationFn: async (payload: VerifyResetCodeFields) => {
      const response = await verifyResetCode(payload);

      if ('code' in response) {
        throw new Error(response.message || 'Invalid OTP');
      }

      return response;
    },
  });

  return { isPending, error, mutateAsync };
};
