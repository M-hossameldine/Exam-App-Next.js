'use client';

import { usePathname } from 'next/navigation';

import { useLogout } from '@/hooks/auth/use-logout';
import { cn } from '@/lib/utils/tailwind-merge';

import Link from 'next/link';
import {
  Sidebar,
  SidebarFooter,
  SidebarContent,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import { SETTINGS_SIDEBAR_ITEMS } from '../_constants/settings.constants';

import { LogIn } from 'lucide-react';
import { Spinner } from '@/components/ui/spinner';

export default function SettingsSidebar() {
  const pathname = usePathname();

  const { mutate: logout, isPending: logoutLoading } = useLogout();

  return (
    <aside className="h-full">
      <Sidebar collapsible="none" className="p-6 bg-white w-72">
        <SidebarContent>
          {/* Main Settings Sidebar Items  */}
          <SidebarGroupContent>
            <SidebarMenu>
              {SETTINGS_SIDEBAR_ITEMS.map(item => {
                const isSelected = item.matchRegex?.test(pathname);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild size={'sm'}>
                      <Link
                        href={item.url}
                        className={cn(
                          isSelected
                            ? 'text-primary bg-primary-100 hover:bg-primary-200'
                            : 'text-secondary-500',
                          'border-none'
                        )}
                      >
                        <item.icon
                          className="size-6"
                          size={24}
                          width={24}
                          height={24}
                        />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarContent>

        <SidebarFooter>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  size={'sm'}
                  className={cn(
                    'border-none text-destructive-500 bg-destructive-50 hover:bg-destructive-100'
                  )}
                  onClick={async () => {
                    logout();
                  }}
                  disabled={logoutLoading}
                >
                  <LogIn className="size-6" size={24} width={24} height={24} />
                  <span>Logout</span>
                  {logoutLoading && (
                    <Spinner className={cn('size-4 ms-auto')} />
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarFooter>
      </Sidebar>
    </aside>
  );
}
