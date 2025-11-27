"use client";
import { useState } from "react";

import { type InputProps } from "./input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Eye, EyeOff } from "lucide-react";

type InputPasswordProps = Omit<InputProps, "type" | "placeholder">;

export function InputPassword({ error, ...props }: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup>
      <InputGroupInput
        {...props}
        type={showPassword ? "text" : "password"}
        error={error}
        placeholder="********"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          variant="ghost"
          size="icon-xs"
          className="text-secondary-400 hover:bg-transparent hover:text-secondary-400"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
