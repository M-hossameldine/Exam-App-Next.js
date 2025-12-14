import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { TriangleAlert } from 'lucide-react';

export function DeleteAccountAlert() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="w-full bg-destructive-50 text-destructive hover:bg-destructive-100"
        >
          Delete My Account
        </Button>
      </DialogTrigger>

      {/* Modal Content */}
      <DialogContent className="sm:max-w-[34.875rem] p-0">
        <div className="flex flex-col items-center justify-center gap-4">
          <DialogHeader className="flex flex-col items-center text-center mb-10 pt-6 px-6">
            <div className="flex items-center justify-center w-28 h-28 mb-7 mt-5 bg-destructive-50 rounded-full">
              <div className="w-20 h-20 bg-destructive-100 rounded-full flex items-center justify-center">
                <TriangleAlert className="size-12 text-destructive" />
              </div>
            </div>

            <DialogTitle className="text-lg font-medium text-destructive text-center mb-2.5">
              Are you sure you want to delete your account?
            </DialogTitle>

            <DialogDescription className="text-sm text-secondary-500 text-center">
              This action is permanent and cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <footer className="flex justify-center gap-2.5 w-full border-t border-secondary-200 bg-secondary-50 p-6 -mx-6">
            <DialogClose asChild>
              <Button variant="secondary" className="w-full max-w-56">
                Cancel
              </Button>
            </DialogClose>

            <Button className="w-full max-w-56 bg-destructive hover:bg-destructive-hover ">
              Save changes
            </Button>
          </footer>
        </div>
      </DialogContent>
    </Dialog>
  );
}
