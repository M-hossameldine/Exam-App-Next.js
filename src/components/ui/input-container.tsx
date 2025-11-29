import { cn } from "@/lib/utils/tailwind-merge";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";

type InputContainerProps = {
  className?: string;
  labelText: string;
  labelHtmlFor: string;
  children: React.ReactNode;
  error?: string;
};

export default function InputContainer({
  className,
  labelText,
  labelHtmlFor,
  children,
  error,
}: InputContainerProps) {
  return (
    <Field className={cn("gap-0", className)}>
      <FieldLabel className="text-base font-medium mb-1" htmlFor={labelHtmlFor}>
        {labelText}
      </FieldLabel>

      {children}

      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
}
