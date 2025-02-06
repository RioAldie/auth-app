import React, { ReactNode } from 'react';

import { redirect } from 'next/navigation';

import { auth } from '@/auth';
import DropdownLanguage from '@/components/DropdownLanguage';

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (session) {
    redirect('/');
  }
  return (
    <main className="flex min-h-screen w-full flex-row">
      <div>
        <div className="-right-2 relative mt-2">
          <DropdownLanguage />
        </div>

        {children}
      </div>
    </main>
  );
};
export default Layout;
