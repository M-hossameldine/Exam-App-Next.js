import { User } from 'next-auth';
import z from 'zod';
import { loginSchema } from '../schemas/auth.schema';

export type LoginFields = z.infer<typeof loginSchema>;

export type LoginResponse = {
  token: string;
  user: User['user'];
};
