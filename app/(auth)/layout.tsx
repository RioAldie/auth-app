import React, { ReactNode } from 'react';

import { redirect } from 'next/navigation';

import { auth } from '@/auth';

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (session) {
    redirect('/');
  }
  return (
    <main className="flex min-h-screen w-full flex-row">
      <div>{children}</div>
    </main>
  );
};
export default Layout;
