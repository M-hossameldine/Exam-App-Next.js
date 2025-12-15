import { forgotPasswordEmailSchema } from './../schemas/auth.schema';
import { User } from 'next-auth';
import z from 'zod';
import { loginSchema, forgotPasswordEmailSchema } from '../schemas/auth.schema';

export type LoginFields = z.infer<typeof loginSchema>;

export type LoginResponse = {
  token: string;
  user: User['user'];
};

// forgot password
export type ForgotPasswordEmailResponse = ApiResponse<{
  info: string;
}>;
export type ForgotPasswordEmailSuccessResponse = SuccessResponse<{
  info: string;
}>;

export type ForgotPasswordEmailFields = z.infer<
  typeof forgotPasswordEmailSchema
>;
