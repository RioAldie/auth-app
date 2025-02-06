// types/next-auth.d.ts
import NextAuth from 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    accessToken?: string; // Add accessToken to the User type
    refreshToken?: string; // Add refreshToken to the User type
  }

  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      accessToken?: string;
      refreshToken?: string;
    } & DefaultSession['user'];
    accessToken?: string;
    refreshToken?: string;
  }

  interface JWT {
    id: string;
    email: string;
    accessToken: string;
    refreshToken: string;
  }
}
