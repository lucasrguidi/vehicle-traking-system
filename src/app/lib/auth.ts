import NextAuth, { User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { API_ENDPOINTS } from '../constants/api-endpoints';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials): Promise<User | null> => {
        const response = await fetch(API_ENDPOINTS.LOGIN, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
          }),
        });

        if (!response.ok) {
          return null;
        }

        const data = await response.json();

        if (!data) {
          return null;
        }

        return {
          access: data.access,
          refresh: data.refresh,
        } as User;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user: data }) => {
      if (data) {
        token.access = data.access;
        token.refresh = data.refresh;
      }

      if (token.access) {
        const isValidToken = await verifyToken(token.access as string);

        if (!isValidToken) {
          token.access = null;
          token.refresh = null;
        }
      }

      return token;
    },
    session: async ({ session, token }) => {
      session.access = token.access as string;
      session.refresh = token.refresh as string;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
});

async function verifyToken(token: string): Promise<boolean> {
  try {
    const response = await fetch(API_ENDPOINTS.VALIDATE_TOKEN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
      }),
    });

    return response.ok;
  } catch (error) {
    return false;
  }
}
