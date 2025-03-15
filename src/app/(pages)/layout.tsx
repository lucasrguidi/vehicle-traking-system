import { redirect } from 'next/navigation';
import { auth } from '../lib/auth';

export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect('/auth/login');
  }

  if (session) {
    redirect('/dashboard');
  }

  return children;
}
