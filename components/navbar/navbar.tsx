import Container from '../ui/container';
import NavbarRoutes from './navbar-routes';
import MobileMenu from './mobile-menu';
import { NavbarLogo } from './logo';
import UserAvatar from './user-avatar/user-avatar';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/libs/next-auth';

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className='border-b py-3'>
      <Container className='flex items-center justify-between' isFullHeight>
        <div className='flex items-center justify-start gap-x-6'>
          <div className=' hidden md:block'>
            <NavbarLogo />
          </div>
          <div className='hidden md:block'>
            <NavbarRoutes session={session} />
          </div>
          <div className='block md:hidden'>
            <MobileMenu session={session} />
          </div>
        </div>
        <div className='flex items-center justify-start gap-x-6'>
          <UserAvatar session={session} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
