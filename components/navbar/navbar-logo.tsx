import Image from 'next/image';
import logoPng from '@/public/blog.png';

const NavBarLogo = () => {
  return (
    <div className='relative size-10'>
      <Image src={logoPng} alt='blog' fill sizes='33vw' />
    </div>
  );
};

export default NavBarLogo;
