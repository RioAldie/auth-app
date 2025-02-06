import React, { ReactNode } from 'react';

import { redirect } from 'next/navigation';

import { auth } from '@/auth';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect('/sign-in');
  }
  return (
    <main className="flex min-h-screen w-full flex-row">
      <Sidebar />
      <div className="admin-container">
        <Header />
        {children}
      </div>
    </main>
  );
};
export default Layout;
