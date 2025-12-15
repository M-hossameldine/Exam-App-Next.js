'use client';

import { useAuth } from '@/hooks/auth/use-auth';
import { zodResolver } from '@hookform/resolvers/zod';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import InputContainer from '@/components/ui/input-container';
import { Input } from '@/components/ui/input';
import { InputPassword } from '@/components/ui/input-password';
import { InputPhone } from '@/components/ui/input-phone';
import FormFooter from '../../_components/form-footer';

import { SignupFields } from '@/lib/types/auth';
import { signupSchema } from '@/lib/schemas/auth.schema';

export default function SignupForm() {
  // Mutations
  const { mutate: signupMutation, isPending, error: submitError } = useAuth();

  // Form
  const form = useForm<SignupFields>({
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      rePassword: '',
      phone: '',
      username: '',
    },
    resolver: zodResolver(signupSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<SignupFields> = async data => {
    signupMutation({
      ...data,
      phone: data.phone.replace('+2', ''),
      mode: 'signup',
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h1 className="text-3xl font-bold mb-10">Signup</h1>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2.5">
            {/* First name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <InputContainer
                    className="flex-1"
                    labelText="First name"
                    labelHtmlFor="firstName"
                    error={error?.message}
                  >
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        id="firstName"
                        placeholder="John"
                      />
                    </FormControl>
                  </InputContainer>
                </FormItem>
              )}
            />

            {/* Last name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <InputContainer
                    className="flex-1"
                    labelText="Last name"
                    labelHtmlFor="lastName"
                    error={error?.message}
                  >
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        id="lastName"
                        placeholder="Doe"
                      />
                    </FormControl>
                  </InputContainer>
                </FormItem>
              )}
            />
          </div>

          {/* Username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <InputContainer
                  labelText="Username"
                  labelHtmlFor="username"
                  error={error?.message}
                >
                  <FormControl>
                    <Input
                      {...field}
                      type="username"
                      id="username"
                      placeholder="user123"
                    />
                  </FormControl>
                </InputContainer>
              </FormItem>
            )}
          />

          {/* Email */}
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

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <InputContainer
                  labelText="Phone"
                  labelHtmlFor="phone"
                  error={error?.message}
                >
                  <FormControl>
                    <InputPhone
                      {...field}
                      id="phone"
                      onChange={value =>
                        field.onChange(
                          typeof value === 'string' ? value.trim() : value
                        )
                      }
                      value={field.value}
                    />
                  </FormControl>
                </InputContainer>
              </FormItem>
            )}
          />

          {/* Password */}
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

          {/* Confirm password */}
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <InputContainer
                  labelText="Confirm password"
                  labelHtmlFor="rePassword"
                  error={error?.message}
                >
                  <FormControl>
                    <InputPassword {...field} id="rePassword" />
                  </FormControl>
                </InputContainer>
              </FormItem>
            )}
          />
        </div>

        <FormFooter
          submitButtonText="Create Account"
          altActionDescription="Already have an account?"
          altActionText="Login"
          altActionHref="/login"
          error={submitError?.message}
          isLoading={isPending}
        />
      </form>
    </Form>
  );
}
