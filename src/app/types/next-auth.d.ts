import 'next-auth';

declare module 'next-auth' {
  interface User {
    access?: string;
    refresh?: string;
  }

  interface Session {
    access?: string;
    refresh?: string;
  }
}
