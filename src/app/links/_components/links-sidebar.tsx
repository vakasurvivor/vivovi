import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import {
  Calendar,
  Database,
  Home,
  Inbox,
  Search,
  Server,
  Settings,
  Wrench,
} from 'lucide-react';

const development = {
  frontend: [
    {
      title: 'Web標準',
      url: '#',
      icon: Home,
    },
    {
      title: 'Vue',
      url: '#',
      icon: Inbox,
    },
    {
      title: 'Server',
      url: '#',
      icon: Server,
    },
    {
      title: 'Database',
      url: '#',
      icon: Database,
    },
    {
      title: 'Tools',
      url: '#',
      icon: Wrench,
    },
  ],
  backend: [
    {
      title: 'Database',
      url: '#',
      icon: Home,
    },
    {
      title: 'container',
      url: '#',
      icon: Inbox,
    },
    {
      title: 'Linux',
      url: '#',
      icon: Calendar,
    },
    {
      title: 'Deno',
      url: '#',
      icon: Search,
    },
    {
      title: 'TypeORM',
      url: '#',
      icon: Settings,
    },
  ],
};

const design = {
  graphic: [
    {
      title: 'Design Tools',
      url: '#',
      icon: Home,
    },
    {
      title: 'Font',
      url: '#',
      icon: Inbox,
    },
    {
      title: 'Library',
      url: '#',
      icon: Calendar,
    },
    {
      title: 'Design Tools',
      url: '#',
      icon: Search,
    },
    {
      title: 'Books',
      url: '#',
      icon: Settings,
    },
  ],
  animation: [
    {
      title: 'Tools',
      url: '#',
      icon: Home,
    },
    {
      title: 'Font',
      url: '#',
      icon: Inbox,
    },
    {
      title: 'Library',
      url: '#',
      icon: Calendar,
    },
    {
      title: 'Learning',
      url: '#',
      icon: Search,
    },
    {
      title: 'Books',
      url: '#',
      icon: Settings,
    },
  ],
};

export default function LinksSidebar() {
  return (
    <Sidebar collapsible={'icon'} className="sticky h-[80svh]">
      <SidebarHeader> Docs Links </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupLabel>Development</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {development.frontend.map(item => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />

        <SidebarGroupLabel>Design</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {design.graphic.map(item => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroupContent>
          <SidebarMenu>
            {design.animation.map(item => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
