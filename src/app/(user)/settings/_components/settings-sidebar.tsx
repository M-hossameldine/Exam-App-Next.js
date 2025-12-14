'use client';

import { usePathname } from 'next/navigation';
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

export default function SettingsSidebar() {
  const pathname = usePathname();

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
                            ? 'text-primary bg-primary-100'
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
                    'border-none text-destructive-500 bg-destructive-50'
                  )}
                >
                  <LogIn className="size-6" size={24} width={24} height={24} />
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarFooter>
      </Sidebar>
    </aside>
  );
}
