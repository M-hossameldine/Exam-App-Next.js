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
