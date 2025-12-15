'use client';

import { useResetPassword } from '@/hooks/auth/use-reset-password';
import { zodResolver } from '@hookform/resolvers/zod';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import InputContainer from '@/components/ui/input-container';
import { InputPassword } from '@/components/ui/input-password';
import StepWrapper from './step-wrapper';

import { ResetPasswordFields } from '@/lib/types/auth';
import { resetPasswordSchema } from '@/lib/schemas/auth.schema';

type NewPasswordStepProps = {
  email: string;
};

export default function NewPasswordStep({ email }: NewPasswordStepProps) {
  // Mutations
  const { mutateAsync, isPending, error: submitError } = useResetPassword();

  // Form
  const form = useForm<ResetPasswordFields>({
    defaultValues: {
      email,
      newPassword: '',
      confirmedPassword: '',
    },
    resolver: zodResolver(resetPasswordSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<ResetPasswordFields> = async data => {
    try {
      await mutateAsync({
        email,
        newPassword: data.newPassword,
      });
    } catch {}
  };

  return (
    <Form {...form}>
      <StepWrapper
        title="Create a New Password"
        instruction="Create a new strong password for your account."
        submitButtonText={'Verify Code'}
        error={submitError?.message}
        onSubmit={form.handleSubmit(onSubmit)}
        isLoading={isPending}
      >
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <InputContainer
                  labelText="New Password"
                  labelHtmlFor="newPassword"
                  error={error?.message}
                >
                  <FormControl>
                    <InputPassword {...field} id="newPassword" />
                  </FormControl>
                </InputContainer>
              </FormItem>
            )}
          />
          {/* <InputContainer labelText="New Password" labelHtmlFor="password">
            <InputPassword id="password" />
          </InputContainer> */}

          <FormField
            control={form.control}
            name="confirmedPassword"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <InputContainer
                  labelText="Confirm New Password"
                  labelHtmlFor="confirmedPassword"
                  error={error?.message}
                >
                  <FormControl>
                    <InputPassword {...field} id="confirmedPassword" />
                  </FormControl>
                </InputContainer>
              </FormItem>
            )}
          />
          {/* <InputContainer
            labelText="Confirm New Password"
            labelHtmlFor="confirmedPassword"
          >
            <InputPassword id="confirmedPassword" />
          </InputContainer> */}
        </div>
      </StepWrapper>
    </Form>
  );
}
