import { signInWithCredentials } from '@/lib/auth';
import LoginForm from '@/components/LoginForm';
import React from 'react';

const Page = () => {
  return (
    <section className="w-screen min-h-screen flex justify-center items-center">
      <LoginForm onSubmit={signInWithCredentials} />
    </section>
  );
};

export default Page;
