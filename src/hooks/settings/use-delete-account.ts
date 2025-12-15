import { useMutation } from '@tanstack/react-query';
import { deleteAccount } from '@/lib/actions/settings.actions';

export const useDeleteAccount = () => {
  const { isPending, error, mutateAsync } = useMutation({
    mutationFn: async () => {
      const response = await deleteAccount();

      if ('code' in response) {
        throw new Error(response.message || 'Failed to delete account');
      }
      return response;
    },
  });

  return { isPending, error, mutateAsync };
};
