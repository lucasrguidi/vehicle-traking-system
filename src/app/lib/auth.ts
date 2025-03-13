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
        try {
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
            id: data.userId || 'default-id',
            access: data.access,
            refresh: data.refresh,
          } as User;
        } catch (error) {
          console.error('Erro no authorize:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.access = user.access;
        token.refresh = user.refresh;
        token.id = user.id;
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
      session.user.id = token.id as string;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
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
    console.error('Erro ao verificar token:', error);
    return false;
  }
}
