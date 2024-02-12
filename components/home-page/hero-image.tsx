import Image from 'next/image';
import heroImage from '@/public/hero-image.png';

const HeroImage = () => {
  return (
    <div className='relative m-auto size-[24rem]  md:size-[28rem] lg:size-[32rem]'>
      <Image src={heroImage} alt='hero-image' fill sizes='50vw' quality={100} />
    </div>
  );
};

export default HeroImage;
