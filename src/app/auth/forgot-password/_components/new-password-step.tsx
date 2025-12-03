import InputContainer from "@/components/ui/input-container";
import { InputPassword } from "@/components/ui/input-password";
import StepWrapper from "./step-wrapper";

export default function NewPasswordStep() {
  return (
    <StepWrapper
      title="Create a New Password"
      instruction="Create a new strong password for your account."
      submitButtonText={"Verify Code"}
      error=""
    >
      <div className="flex flex-col gap-4">
        <InputContainer labelText="New Password" labelHtmlFor="password">
          <InputPassword id="password" />
        </InputContainer>

        <InputContainer
          labelText="Confirm New Password"
          labelHtmlFor="confirmed-password"
        >
          <InputPassword id="confirmed-password" />
        </InputContainer>
      </div>
    </StepWrapper>
  );
}
