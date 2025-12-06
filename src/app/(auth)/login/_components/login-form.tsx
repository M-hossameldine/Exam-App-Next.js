"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import Link from "next/link";
import InputContainer from "@/components/ui/input-container";
import { Input } from "@/components/ui/input";
import { InputPassword } from "@/components/ui/input-password";
import FormFooter from "@/app/(auth)/_components/form-footer";

export default function LoginForm() {
  // Navigation
  const router = useRouter();

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [footerError, setFooterError] = useState("");

  // Functions
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Login
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response?.error) {
        const errorMessage =
          response.status === 401
            ? "Invalid email or password"
            : "Something went wrong";

        setFooterError(errorMessage);

        return;
      }

      router.push("/home");
    } finally {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold mb-10">Login</h1>

      <div className="flex flex-col gap-4">
        <InputContainer labelText="Email" labelHtmlFor="email">
          <Input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>

        <div className="flex flex-col gap-2.5">
          <InputContainer labelText="Password" labelHtmlFor="password">
            <InputPassword
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>

          <Link
            className="text-sm font-medium text-primary ms-auto"
            href="/auth/forgot-password"
          >
            Forgot your password?
          </Link>
        </div>
      </div>

      <FormFooter
        submitButtonText="Login"
        altActionDescription="Don't have an account?"
        altActionText="Create yours"
        altActionHref="/auth/signup"
        error={footerError}
      />
    </form>
  );
}
