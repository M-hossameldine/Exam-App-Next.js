'use client';

import { cn } from '@/lib/utils/tailwind-merge';

import InputContainer from '@/components/ui/input-container';
import { Input } from '@/components/ui/input';
import { InputPassword } from '@/components/ui/input-password';
import { InputPhone } from '@/components/ui/input-phone';
import { ErrorBox } from '@/components/ui/error-box';
import { Button } from '@/components/ui/button';

export default function ProfileForm() {
  const backendError = 'This is an error';

  return (
    <form>
      {/*  Form Body */}
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
      </div>

      {/* Form Errors */}
      {backendError && <ErrorBox error={backendError} className="mt-4" />}

      {/* Form Actions  */}
      <div className={cn(backendError ? 'mt-6' : 'mt-8', 'flex gap-4 w-full')}>
        <Button
          variant={'secondary'}
          className="w-full bg-destructive-50 text-destructive hover:bg-destructive-50"
        >
          Delete My Account
        </Button>

        <Button className="w-full hover:bg-primary">Save Changes</Button>
      </div>
    </form>
  );
}
