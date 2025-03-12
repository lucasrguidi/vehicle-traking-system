import { auth } from '@/app/lib/auth';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { redirect } from 'next/navigation';
import AppSidebar from './_components/app-sidebar';

interface PrivateRoutesLayoutProps {
  children: React.ReactNode;
}

export default async function PrivateRoutesLayout({
  children,
}: PrivateRoutesLayoutProps) {
  const session = await auth();

  if (!session?.access) {
    redirect('/auth/login');
  }

  return (
    <div className="min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex-1 overflow-hidden">
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
