import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';

interface NavMainProps {
  items: {
    title: string;
    url: string;
  }[];
}

export function NavMain({ items }: NavMainProps) {
  return (
    <SidebarGroup>
      <SidebarMenu className="gap-2">
        {items.map((item, i) => {
          return (
            <SidebarMenuItem key={i}>
              <SidebarMenuButton asChild>
                <Link href={item.url} className="font-medium">
                  {item.title}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
