"use client";
import Link from "next/link";
import InputContainer from "@/components/ui/input-container";
import { Input } from "@/components/ui/input";
import { InputPassword } from "@/components/ui/input-password";

export default function FormBody() {
  return (
    <div className="flex flex-col gap-4">
      <InputContainer labelText="Email" labelHtmlFor="email">
        <Input type="email" id="email" />
      </InputContainer>
      <div className="flex flex-col gap-2.5">
        <InputContainer labelText="Password" labelHtmlFor="password">
          <InputPassword id="password" />
        </InputContainer>
        <Link
          className="text-sm font-medium text-primary ms-auto"
          href="/auth/forgot-password"
        >
          Forgot your password?
        </Link>
      </div>
    </div>
  );
}
