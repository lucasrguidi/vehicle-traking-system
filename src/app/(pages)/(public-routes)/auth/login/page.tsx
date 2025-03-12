'use client';

import Logo from '@/components/custom/logo';
import LoginForm from './_components/login-form';

export default function LoginPage() {
  return (
    <div className="min-h-screen md:p-16 gap-x-6 bg-muted flex items-center justify-center">
      <div className="w-fit-md bg-background p-8 rounded-md space-y-4 flex items-center justify-center flex-col ">
        <Logo className="h-16 w-16 bg-blue-400 p-4 rounded-md" />
        <div className="flex flex-col gap-y-3 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">Entrar</h1>
          <p className="text-muted-foreground text-sm">
            Faça login para poder utilizar o sistema.
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
