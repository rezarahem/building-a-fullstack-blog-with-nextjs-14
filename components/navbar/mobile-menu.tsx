'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import NavbarRoutes from './navbar-routes';
import { NavbarLogo } from './logo';
import { Session } from 'next-auth';

type MobileMenuProps = {
  session: Session | null;
};

const MobileMenu = ({ session }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        className='rounded-md hover:bg-gray-200'
        onClick={(e) => {
          e.preventDefault();
          toggleOpen();
        }}
      >
        <Menu className='size-8' />
      </button>
      {isOpen &&
        createPortal(
          <div
            onClick={(e) => {
              e.preventDefault();
            }}
            className='fixed top-0 flex h-full w-64 flex-col gap-y-4 bg-gray-100 p-5 ring-0'
          >
            <div className='flex items-center justify-between'>
              <NavbarLogo />
              <button
                className='rounded-md hover:bg-gray-200'
                onClick={(e) => {
                  e.preventDefault();
                  toggleOpen();
                }}
              >
                <X className='size-10' />
              </button>
            </div>
            <div className='border-b'></div>
            <div className='flex'>
              <NavbarRoutes session={session} vertical />
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default MobileMenu;
