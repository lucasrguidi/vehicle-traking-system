'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

import Logo from '@/components/custom/logo';
import { NavMain } from './nav-main';
import { NavUser } from './nav-user';

const user = {
  name: 'Life Admin',
  email: 'admin@life.com',
  avatar: './logo30.png',
};

const NAV_MAIN_ITEMS = [
  {
    title: 'Dashboard',
    url: '/dashboard',
  },
  {
    title: 'Veículos',
    url: '/vehicles',
  },
  {
    title: 'Rastreamento',
    url: '/tracking',
  },
];

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="sidebar-height">
      <SidebarHeader>
        <Logo className="h-16 w-16 mx-auto" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={NAV_MAIN_ITEMS} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
