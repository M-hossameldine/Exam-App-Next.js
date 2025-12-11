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
  return (
    <aside className="w-[22.625rem] h-full bg-primary-50">
      <Sidebar collapsible="none">
        <SidebarHeader>
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
              {LAYOUT_SIDEBAR_ITEMS.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
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
