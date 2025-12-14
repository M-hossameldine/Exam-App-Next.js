'use client';

import { cn } from '@/lib/utils/tailwind-merge';

import InputContainer from '@/components/ui/input-container';
import { InputPassword } from '@/components/ui/input-password';
import { ErrorBox } from '@/components/ui/error-box';
import { Button } from '@/components/ui/button';

export default function ChangePasswordForm() {
  const backendError = 'This is an error';

  return (
    <form>
      <div className="flex flex-col gap-4">
        <InputContainer
          labelText="Current Password"
          labelHtmlFor="current-password"
        >
          <InputPassword />
        </InputContainer>

        <InputContainer labelText="New Password" labelHtmlFor="new-password">
          <InputPassword />
        </InputContainer>

        <InputContainer
          labelText="Confirm New Password"
          labelHtmlFor="confirm-password"
        >
          <InputPassword />
        </InputContainer>
      </div>

      {/* Form Errors */}
      {backendError && <ErrorBox error={backendError} className="mt-4" />}

      {/* Form Actions  */}
      <div className={cn(backendError ? 'mt-6' : 'mt-8', 'flex gap-4 w-full')}>
        <Button className="w-full">Update Password</Button>
      </div>
    </form>
  );
}
