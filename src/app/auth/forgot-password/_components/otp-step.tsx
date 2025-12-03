"use client";

import InputContainer from "@/components/ui/input-container";
import { AppInputOTP } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import StepWrapper from "./step-wrapper";

type OtpStepProps = {
  onGoBack: () => void;
  email: string;
};

export default function OtpStep({ onGoBack, email }: OtpStepProps) {
  const instruction = (
    <>
      Please enter the 6-digits code we have sent to:{" "}
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
  );

  return (
    <StepWrapper
      title="Verify OTP"
      instruction={instruction}
      submitButtonText="Verify Code"
      error=""
      onGoBack={onGoBack}
    >
      <div className="flex justify-center items-center flex-col gap-6">
        <InputContainer className="flex justify-center">
          <AppInputOTP />
        </InputContainer>

        <p className="text-sm font-medium text-secondary-500">
          Didn’t receive the code?
          <Button type="button" variant="link" size="sm">
            Resend
          </Button>
        </p>
      </div>
    </StepWrapper>
  );
}
