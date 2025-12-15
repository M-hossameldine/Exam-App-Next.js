'use client';

import { useState } from 'react';

import EmailStep from './email-step';
import OtpStep from './otp-step';
import NewPasswordStep from './new-password-step';

export default function ForgotPasswordForm() {
  // States
  const [step, setStep] = useState<'email' | 'otp' | 'new-password'>('email');
  const [email, setEmail] = useState<string>('');

  // Functions
  const handleOtpGoBack = () => {
    setStep('email');
  };

  const handleSubmitEmail = (email: string) => {
    setEmail(email);
    setStep('otp');
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
        />
      ) : (
        <NewPasswordStep />
      )}
    </div>
  );
}
