'use client';

import { useLogin } from '@/hooks/auth/use-login';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import InputContainer from '@/components/ui/input-container';
import { Input } from '@/components/ui/input';
import { InputPassword } from '@/components/ui/input-password';
import FormFooter from '@/app/(auth)/_components/form-footer';

import { LoginFields } from '@/lib/types/auth';
import { loginSchema } from '@/lib/schemas/auth.schema';

export default function LoginForm() {
  // Mutations
  const { loginMutation, isPending, error: submitError } = useLogin();
  console.log(submitError?.message);

  // Form
  const form = useForm<LoginFields>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<LoginFields> = async data => {
    console.log(data);
    loginMutation(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h1 className="text-3xl font-bold mb-10">Login</h1>

        {/* Email */}
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <InputContainer
                  labelText="Email"
                  labelHtmlFor="email"
                  error={error?.message}
                >
                  <FormControl>
                    <Input
                      {...field}
                      id="email"
                      placeholder="user@example.com"
                    />
                  </FormControl>
                </InputContainer>
              </FormItem>
            )}
          />

          {/* Password */}
          <div className="flex flex-col gap-2.5">
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <InputContainer
                    labelText="Password"
                    labelHtmlFor="password"
                    error={error?.message}
                  >
                    <FormControl>
                      <InputPassword {...field} id="password" />
                    </FormControl>
                  </InputContainer>
                </FormItem>
              )}
            />

            <Link
              className="text-sm font-medium text-primary ms-auto"
              href="/forgot-password"
            >
              Forgot your password?
            </Link>
          </div>
        </div>

        <FormFooter
          isLoading={isPending}
          submitButtonText="Login"
          altActionDescription="Don't have an account?"
          altActionText="Create yours"
          altActionHref="/signup"
          error={submitError?.message}
        />
      </form>
    </Form>
  );
}
