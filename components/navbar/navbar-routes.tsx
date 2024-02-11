'use client';

import { cn } from '@/libs/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  {
    label: 'خانه',
    path: '/',
  },
  {
    label: 'بلاگ',
    path: '/blog',
  },
  {
    label: 'ادمین',
    path: '/admin',
  },
];

type NavbarRoutesProps = {
  vertical?: boolean;
};

const NavbarRoutes = ({ vertical = false }: NavbarRoutesProps) => {
  const pathname = usePathname();
  return (
    <div
      className={cn('flex items-center justify-start gap-2', {
        'flex-col': vertical,
      })}
    >
      {routes.map(({ label, path }) => (
        <Link
          href={path}
          key={label}
          className={cn('flex w-14 items-center justify-center py-1 text-lg', {
            'rounded-md bg-black text-white': pathname === path,
          })}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default NavbarRoutes;
