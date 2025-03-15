import 'next-auth';

declare module 'next-auth' {
  interface User {
    access?: string;
    refresh?: string;
    accessExpires?: number;
  }

  interface Session {
    access?: string;
    refresh?: string;
    accessExpires?: number;
  }
}
