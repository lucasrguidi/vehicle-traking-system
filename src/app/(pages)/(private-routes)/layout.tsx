import { auth } from '@/app/lib/auth';
import { redirect } from 'next/navigation';

interface PrivateRoutesLayoutProps {
  children: React.ReactNode;
}

export default async function PrivateRoutesLayout({
  children,
}: PrivateRoutesLayoutProps) {
  const session = await auth();
  console.log('🚀 ~ session:', session);

  if (!session?.access) {
    redirect('/auth/login');
  }

  return children;
}
