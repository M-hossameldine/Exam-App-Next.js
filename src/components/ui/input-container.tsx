import { cn } from "@/lib/utils/tailwind-merge";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";

type InputContainerBaseProps = {
  className?: string;
  children: React.ReactNode;
  error?: string;
};

type InputContainerWithLabelProps = InputContainerBaseProps & {
  labelText: string;
  labelHtmlFor: string;
};

type InputContainerProps =
  | InputContainerBaseProps
  | InputContainerWithLabelProps;

export default function InputContainer(props: InputContainerProps) {
  const { className, children, error } = props;

  return (
    <Field className={cn("gap-0", className)}>
      {"labelText" in props && (
        <FieldLabel
          className="text-base font-medium mb-1"
          htmlFor={props.labelHtmlFor}
        >
          {props.labelText}
        </FieldLabel>
      )}

      {children}

      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
}
