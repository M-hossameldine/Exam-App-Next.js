import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { resetPassword } from '@/lib/actions/auth.actions';
import { ResetPasswordFields } from '@/lib/types/auth';

export const useResetPassword = () => {
  const router = useRouter();

  const { isPending, error, mutateAsync } = useMutation({
    mutationFn: async (
      payload: Omit<ResetPasswordFields, 'confirmedPassword'>
    ) => {
      const response = await resetPassword(payload);

      if ('code' in response) {
        throw new Error(response.message || 'Failed to reset password');
      }

      return response;
    },
    onSuccess: () => {
      router.push('/login');
    },
  });

  return { isPending, error, mutateAsync };
};
