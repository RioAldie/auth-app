'use client';

import { signIn } from 'next-auth/react';

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, 'email' | 'password'>
) => {
  const { email, password } = params;

  try {
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false, // Prevent auto-redirect
    });

    if (result?.error) {
      return { success: false, error: result.error };
    }

    console.log(email, password);

    return { success: true };
  } catch (error) {
    console.log(error, 'Signin error');
    return { success: false, error: 'Signin error' };
  }
};
