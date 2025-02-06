import NextAuth, { User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import config from './lib/config';

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log('Start authorization');

        if (!credentials?.email || !credentials?.password) {
          console.log('Missing email or password');
          return null;
        }

        const { email, password } = credentials;
        console.log({ email, password });

        const res = await fetch(
          `${config.env.apiEndpoint}/auth/login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          }
        );
        if (!res.ok) {
          console.error(
            'Failed to authenticate:',
            res.status,
            res.statusText
          );
          return null;
        }
        const { data } = await res.json();
        console.log('Parsed data:', data);

        const { accessToken, refreshToken } = data;

        return {
          email: data.user.email,
          accessToken,
          refreshToken,
        } as User;
      },
    }),
  ],
  pages: {
    signIn: '/sign-in',
  },
  secret: config.env.authKey,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log('user =>', user);
        token.id = user.id;
        token.email = user.email;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.accessToken = token.accessToken as string;
        session.user.refreshToken = token.refreshToken as string;
      }

      return session;
    },
  },
});
