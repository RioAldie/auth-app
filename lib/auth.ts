'use client';

import { auth } from '@/auth';
import { signIn, signOut } from 'next-auth/react';

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, 'email' | 'password'>
) => {
  const { email, password } = params;

  try {
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: result.error };
    }

    return { success: true };
  } catch (error) {
    console.log(error, 'Signin error');
    return { success: false, error: 'Signin error' };
  }
};

export const signOutWithToken = async () => {
  try {
    // Call Next.js API route to handle logout
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
    });

    if (!response.ok) {
      console.error('Failed to logout from server');
      return { success: false };
    }

    // Now sign out from NextAuth
    await signOut({ callbackUrl: '/sign-in' });

    return { success: true };
  } catch (error) {
    console.error('Logout failed:', error);
    return { success: false };
  }
};
