"use client";

import { useState } from "react";

import EmailStep from "./email-step";
import OtpStep from "./otp-step";
import NewPasswordStep from "./new-password-step";

export default function ForgotPasswordForm() {
  const [step, setStep] = useState<"email" | "otp" | "new-password">("email");

  const handleOtpGoBack = () => {
    setStep("email");
  };

  return (
    <div>
      {step === "email" ? (
        <EmailStep />
      ) : step === "otp" ? (
        <OtpStep onGoBack={handleOtpGoBack} email={"user@example.com"} />
      ) : (
        <NewPasswordStep />
      )}
    </div>
  );
}
