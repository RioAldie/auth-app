'use client';

import { useState } from 'react';
import { signOutWithToken } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { toast } from '@/hooks/use-toast';

const ButtonLogout = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    try {
      console.log('Logout start');
      const res = await signOutWithToken();

      if (res.success) {
        toast({
          title: 'Success',
          description: 'You have successfully signed out.',
        });
        router.push('/sign-in'); // Redirect to sign-in page
      } else {
        console.error('Logout failed:', res.success);
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="flex items-center gap-2">
      <div className="relative w-5 h-5">
        <Image src="/icons/logout.svg" alt="icon" fill />
      </div>
      <p>{loading ? 'Logging out...' : 'Logout'}</p>
    </button>
  );
};

export default ButtonLogout;
