'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { adminSideBarLinks } from '@/constant';
import Link from 'next/link';
import ButtonLogout from './ButtonLogout';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="admin-sidebar">
      <div>
        <div className="logo">
          <h1>Admin</h1>
        </div>

        <div className="mt-10 flex flex-col gap-5">
          {adminSideBarLinks.map((link) => {
            const isSelected =
              (link.route !== '/dashboard' &&
                pathname.includes(link.route) &&
                link.route.length > 1) ||
              pathname === link.route;

            return (
              <Link href={`${link.route}`} key={link.route}>
                <div
                  className={cn(
                    'link',
                    isSelected && 'bg-primary-admin shadow-sm'
                  )}>
                  <div className="relative size-5">
                    <Image
                      src={link.img}
                      alt="icon"
                      fill
                      className={`${
                        isSelected ? 'brightness-0 invert' : ''
                      }  object-contain`}
                    />
                  </div>

                  <p
                    className={cn(
                      isSelected ? 'text-white' : 'text-dark'
                    )}>
                    {link.text}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div>
          <ButtonLogout />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
