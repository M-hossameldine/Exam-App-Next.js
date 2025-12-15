import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email({
    error: issue =>
      issue.input === undefined || issue.input === ''
        ? 'Your email is required'
        : 'Please enter a valid email address',
  }),
  password: z
    .string('Your password is required')
    .nonempty('Your Password is required'),
});

export const signupSchema = z.object({
  username: z.string().nonempty('Username is required'),
  firstName: z.string().nonempty('First name is required'),
  lastName: z.string().nonempty('Last name is required'),
  email: z.email({
    error: issue =>
      issue.input === undefined || issue.input === ''
        ? 'Your email is required'
        : 'Please enter a valid email address',
  }),
  password: z
    .string('Your password is required')
    .nonempty('Your Password is required'),
  rePassword: z
    .string('Your confirm password is required')
    .nonempty('Your confirm Password is required'),
  phone: z.string('Your phone is required').nonempty('Your phone is required'),
});

export const sendOtpViaEmailSchema = z.object({
  email: z.email({
    error: issue =>
      issue.input === undefined || issue.input === ''
        ? 'Your email is required'
        : 'Please enter a valid email address',
  }),
});

export const verifyResetCodeSchema = z.object({
  resetCode: z
    .string()
    .nonempty('Your OTP is required')
    .length(6, 'OTP must be 6 digits'),
});

export const resetPasswordSchema = z.object({
  email: z.email({
    error: issue =>
      issue.input === undefined || issue.input === ''
        ? 'Your email is required'
        : 'Please enter a valid email address',
  }),
  newPassword: z.string().nonempty('Your new password is required'),
  confirmedPassword: z.string().nonempty('Your confirmed password is required'),
});
