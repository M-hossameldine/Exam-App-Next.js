"use client";

import InputContainer from "@/components/ui/input-container";
import { Input } from "@/components/ui/input";
import { InputPassword } from "@/components/ui/input-password";
import { InputPhone } from "@/components/ui/input-phone";

export default function FormBody() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2.5">
        <InputContainer
          className="flex-1"
          labelText="First name"
          labelHtmlFor="first-name"
        >
          <Input type="text" id="first-name" />
        </InputContainer>
        <InputContainer
          className="flex-1"
          labelText="Last name"
          labelHtmlFor="last-name"
        >
          <Input type="text" id="last-name" />
        </InputContainer>
      </div>

      <InputContainer labelText="Username" labelHtmlFor="username">
        <InputPassword />
      </InputContainer>

      <InputContainer labelText="Email" labelHtmlFor="email">
        <Input type="email" id="email" />
      </InputContainer>

      <InputContainer labelText="Phone" labelHtmlFor="phone">
        <InputPhone />
      </InputContainer>

      <InputContainer labelText="Password" labelHtmlFor="password">
        <InputPassword />
      </InputContainer>

      <InputContainer
        labelText="Confirm password"
        labelHtmlFor="confirm-password"
      >
        <InputPassword />
      </InputContainer>
    </div>
  );
}
