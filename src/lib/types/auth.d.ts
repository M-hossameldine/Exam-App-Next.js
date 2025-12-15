import { sendOtpViaEmailSchema } from './../schemas/auth.schema';
import { User } from 'next-auth';
import z from 'zod';
import {
  loginSchema,
  sendOtpViaEmailSchema,
  verifyResetCodeSchema,
} from '../schemas/auth.schema';

// Login
export type LoginFields = z.infer<typeof loginSchema>;

export type LoginResponse = {
  token: string;
  user: User['user'];
};

export type SignupResponse = {
  token: string;
  user: User['user'];
};

// Forgot password - Email Step
export type ForgotPasswordFields = z.infer<typeof sendOtpViaEmailSchema>;

export type ForgotPasswordResponse = ApiResponse<{
  info: string;
}>;

// Reset password - Otp Step
export type VerifyResetCodeFields = z.infer<typeof verifyResetCodeSchema>;

export type VerifyResetCodeResponse = ApiResponse<{ status: 'Success' }>;
export type VerifyResetCodeSuccessResponse = SuccessResponse<{
  status: 'Success';
}>;
