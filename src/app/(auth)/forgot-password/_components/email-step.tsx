'use client';

import { useForgotPasswordEmail } from '@/hooks/auth/use-forgot-password-email';
import { zodResolver } from '@hookform/resolvers/zod';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import InputContainer from '@/components/ui/input-container';
import { Input } from '@/components/ui/input';
import StepWrapper from './step-wrapper';

import { ForgotPasswordFields } from '@/lib/types/auth';
import { sendOtpViaEmailSchema } from '@/lib/schemas/auth.schema';

import { MoveRight } from 'lucide-react';

type EmailStepProps = {
  onSubmitEmail: (email: string) => void;
};

export default function EmailStep({ onSubmitEmail }: EmailStepProps) {
  // Mutations
  const {
    mutateAsync,
    isPending,
    error: submitError,
  } = useForgotPasswordEmail();

  // Form
  const form = useForm<ForgotPasswordFields>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(sendOtpViaEmailSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<ForgotPasswordFields> = async data => {
    try {
      await mutateAsync(data);

      onSubmitEmail(data.email);
    } catch {}
  };

  return (
    <Form {...form}>
      <StepWrapper
        onSubmit={form.handleSubmit(onSubmit)}
        title="Forgot Password"
        instruction="Don’t worry, we will help you recover your account."
        submitButtonText={
          <>
            Continue <MoveRight size={18} aria-hidden />
          </>
        }
        isLoading={isPending}
        error={submitError?.message}
      >
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
        </div>
      </StepWrapper>
    </Form>
  );
}
