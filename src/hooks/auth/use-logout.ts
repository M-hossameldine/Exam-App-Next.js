import { useMutation } from '@tanstack/react-query';
import { signOut } from 'next-auth/react';

export const useLogout = () => {
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: async () => {
      await signOut();
    },
  });
};
