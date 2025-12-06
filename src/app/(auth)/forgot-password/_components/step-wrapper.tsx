import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import FormFooter, {
  type FormFooterProps,
} from "../../_components/form-footer";

type StepWrapperProps = Omit<
  FormFooterProps,
  "altActionDescription" | "altActionText" | "altActionHref"
> & {
  title: string;
  instruction: React.ReactNode;
  onGoBack?: () => void;
  children: React.ReactNode;
};

export default function StepWrapper({
  title,
  instruction,
  onGoBack,
  children,
  submitButtonText,
  error,
}: StepWrapperProps) {
  return (
    <form>
      {onGoBack && (
        <Button
          variant={"outline"}
          size={"icon"}
          className="bg-transparent hover:bg-secondary-100 mb-10 border border-secondary-200"
          onClick={onGoBack}
        >
          <MoveLeft size={24} aria-hidden />
        </Button>
      )}

      <h1 className="text-3xl font-bold mb-2.5">{title}</h1>

      <p className="text-secondary-500 mb-10">{instruction}</p>

      {children}

      <FormFooter
        submitButtonText={submitButtonText}
        altActionDescription="Don’t have an account?"
        altActionText="Create yours"
        altActionHref="/auth/signup"
        error={error}
      />
    </form>
  );
}
