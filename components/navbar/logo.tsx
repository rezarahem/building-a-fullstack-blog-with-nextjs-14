import Image from 'next/image';
import logoPng from '@/public/blog.png';

export const NavbarLogo = () => {
  return (
    <div className='relative size-10'>
      <Image src={logoPng} alt='blog' fill sizes='33vw' />
    </div>
  );
};

export const FooterLogo = () => {
  return (
    <div className='relative size-10 invert'>
      <Image src={logoPng} alt='blog' fill sizes='33vw' />
    </div>
  );
};
