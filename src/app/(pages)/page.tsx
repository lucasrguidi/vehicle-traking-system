'use client';

import { LoadingSpinner } from '@/components/custom/loading-spinner';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const session = useSession();

  if (session.data?.access) {
    router.push('/dashboard');
  }

  if (!session.data?.access) {
    router.push('/auth/login');
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
