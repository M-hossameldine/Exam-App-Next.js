'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/tailwind-merge';

import Link from 'next/link';
import Image from 'next/image';
import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import { AppBadge } from '@/components/ui/app-badge';
import LayoutSidebarFooter from './layout-sidebar-footer';

import elevateLogo from '@/assets/elevate-logo.png';

import { LAYOUT_SIDEBAR_ITEMS } from '../_constants/layout.constants';

export default function LayoutSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[22.625rem] h-full">
      <Sidebar collapsible="none" className="p-10 bg-primary-50">
        <SidebarHeader className="mb-14">
          <Image
            src={elevateLogo}
            alt="Elevate Logo"
            width={100}
            height={100}
          />

          <AppBadge />
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroupContent>
            <SidebarMenu>
              {LAYOUT_SIDEBAR_ITEMS.map(item => {
                const isSelected = item.matchRegex?.test(pathname);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={cn(
                          isSelected
                            ? 'border-primary text-primary bg-primary-100'
                            : 'border-transparent text-secondary-500',
                          'border'
                        )}
                      >
                        <item.icon
                          className="size-6 text-xl"
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
          <LayoutSidebarFooter />
        </SidebarFooter>
      </Sidebar>
    </aside>
  );
}
