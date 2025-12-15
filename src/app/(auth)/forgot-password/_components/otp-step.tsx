'use client';

import { useVerifyResetCode } from '@/hooks/auth/user-verify-reset-code';
import { zodResolver } from '@hookform/resolvers/zod';

import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import InputContainer from '@/components/ui/input-container';
import { AppInputOTP } from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';
import StepWrapper from './step-wrapper';

import { VerifyResetCodeFields } from '@/lib/types/auth';
import { verifyResetCodeSchema } from '@/lib/schemas/auth.schema';

type OtpStepProps = {
  onGoBack: () => void;
  email: string;
  onSubmitOtp: () => void;
};

export default function OtpStep({
  onGoBack,
  email,
  onSubmitOtp,
}: OtpStepProps) {
  // Mutations
  const { mutateAsync, isPending, error: submitError } = useVerifyResetCode();

  // Form
  const form = useForm<VerifyResetCodeFields>({
    defaultValues: {
      resetCode: '',
    },
    resolver: zodResolver(verifyResetCodeSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<VerifyResetCodeFields> = async data => {
    try {
      await mutateAsync(data);
      onSubmitOtp();
    } catch {}
  };

  return (
    <Form {...form}>
      <StepWrapper
        title="Verify OTP"
        submitButtonText="Verify Code"
        error={submitError?.message}
        onGoBack={onGoBack}
        isLoading={isPending}
        onSubmit={form.handleSubmit(onSubmit)}
        instruction={
          <>
            Please enter the 6-digits code we have sent to:{' '}
            <span className="text-secondary">{email}.</span>
            <Button
              type="button"
              variant="link"
              size="sm"
              className="font-medium underline"
              onClick={onGoBack}
            >
              Edit
            </Button>
          </>
        }
      >
        <div className="flex justify-center items-center flex-col gap-6">
          <FormField
            control={form.control}
            name="resetCode"
            render={({ field }) => (
              <FormItem>
                <InputContainer className="flex justify-center">
                  <FormControl>
                    <AppInputOTP {...field} />
                  </FormControl>

                  <FormMessage className="text-center mt-2" />
                </InputContainer>
              </FormItem>
            )}
          />

          <p className="text-sm font-medium text-secondary-500">
            Didn’t receive the code?
            <Button type="button" variant="link" size="sm">
              Resend
            </Button>
          </p>
        </div>
      </StepWrapper>
    </Form>
  );
}
