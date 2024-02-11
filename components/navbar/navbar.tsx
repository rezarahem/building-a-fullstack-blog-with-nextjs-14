import Container from '../ui/container';
import NavbarRoutes from './navbar-routes';
import MobileMenu from './mobile-menu';
import NavBarLogo from './navbar-logo';
import UserAvatar from './user-avatar';

const Navbar = () => {
  return (
    <nav className='border-b py-3'>
      <Container className='flex items-center justify-between' isFullHeight>
        <div className='flex items-center justify-start gap-x-6'>
          <div className=' hidden md:block'>
            <NavBarLogo />
          </div>
          <div className='hidden md:block'>
            <NavbarRoutes />
          </div>
          <div className='block md:hidden'>
            <MobileMenu />
          </div>
        </div>
        <div className='flex items-center justify-start gap-x-6'>
          <UserAvatar />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
