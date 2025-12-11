'use client';

import { useSession } from 'next-auth/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LayoutSidebarDropdown } from './layout-sidebar-dropdown';

export default function LayoutSidebarFooter() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div>
        <p className="font-medium text-primary-600">
          {session?.user?.firstName}
        </p>
        <p className="text-secondary-500">{session?.user?.email}</p>
      </div>

      <LayoutSidebarDropdown />
    </div>
  );
}
