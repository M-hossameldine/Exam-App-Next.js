'use client';

import { useState } from 'react';

import { useResendOtpTimer } from '../_hooks/use-resend-otp-timer';

import EmailStep from './email-step';
import OtpStep from './otp-step';
import NewPasswordStep from './new-password-step';

export default function ForgotPasswordForm() {
  // States
  const [step, setStep] = useState<'email' | 'otp' | 'new-password'>('email');
  const [email, setEmail] = useState<string>('');
  const { canResend, remainingSeconds, start, reset } = useResendOtpTimer();

  // Functions
  const handleOtpGoBack = () => {
    setStep('email');
    reset();
  };

  const handleSubmitEmail = (email: string) => {
    setEmail(email);
    setStep('otp');
    start();
  };

  const handleSubmitOtp = () => {
    setStep('new-password');
  };

  return (
    <div>
      {step === 'email' ? (
        <EmailStep onSubmitEmail={handleSubmitEmail} />
      ) : step === 'otp' ? (
        <OtpStep
          onGoBack={handleOtpGoBack}
          email={email}
          onSubmitOtp={handleSubmitOtp}
          canResend={canResend}
          remainingSeconds={remainingSeconds}
          start={start}
        />
      ) : (
        <NewPasswordStep email={email} />
      )}
    </div>
  );
}
