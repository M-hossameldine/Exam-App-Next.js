'use client';

import { useRouter } from 'next/navigation';

import { useLogout } from '@/hooks/auth/use-logout';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { EllipsisVertical, UserRound, LogOut } from 'lucide-react';

export function LayoutSidebarDropdown() {
  const router = useRouter();

  const { mutate: logout } = useLogout();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="focus-visible:ring-0 focus-visible:ring-offset-0 outline-none"
      >
        <Button
          variant="ghost"
          className="rounded-full p-0 w-7 h-7 text-secondary-500 hover:text-secondary-500"
        >
          <EllipsisVertical size={18} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" side="right" align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push('/settings/profile')}>
            <UserRound className="text-secondary-400" />
            Account
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="text-destructive"
            onClick={() => logout()}
          >
            <LogOut className="scale-x-[-1]" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
