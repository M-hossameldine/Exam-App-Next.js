'use client';

import { useSession } from 'next-auth/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LayoutSidebarDropdown } from './layout-sidebar-dropdown';

export default function LayoutSidebarFooter() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-2">
      <Avatar className="w-12 h-12 border border-primary">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div>
        <p className="font-medium text-primary-600">
          {session?.user?.firstName}
        </p>
        <p className="max-w-[12.5rem] truncate text-ellipsis text-secondary-500 ">
          {session?.user?.email}
        </p>
      </div>

      <LayoutSidebarDropdown />
    </div>
  );
}
