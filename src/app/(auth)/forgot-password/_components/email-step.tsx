"use client";

import InputContainer from "@/components/ui/input-container";
import { Input } from "@/components/ui/input";
import StepWrapper from "./step-wrapper";

import { MoveRight } from "lucide-react";

export default function EmailStep() {
  return (
    <StepWrapper
      title="Forgot Password"
      instruction="Don’t worry, we will help you recover your account."
      submitButtonText={
        <>
          Continue <MoveRight size={18} aria-hidden />
        </>
      }
      error=""
    >
      <div className="flex flex-col gap-4">
        <InputContainer labelText="Email" labelHtmlFor="email">
          <Input type="email" id="email" placeholder="user@example.com" />
        </InputContainer>
      </div>
    </StepWrapper>
  );
}
