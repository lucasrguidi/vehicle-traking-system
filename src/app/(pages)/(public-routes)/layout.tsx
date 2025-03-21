import { auth } from '@/app/lib/auth';
import { redirect } from 'next/navigation';

interface PublicRoutesLayoutProps {
  children: React.ReactNode;
}

export default async function PublicRoutesLayout({
  children,
}: PublicRoutesLayoutProps) {
  const session = await auth();

  if (session?.access) {
    redirect('/dashboard');
  }

  return children;
}
