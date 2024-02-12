import HeroImage from '@/components/home-page/hero-image';
import Container from '@/components/ui/container';
import Link from 'next/link';

const HomePage = () => {
  return (
    <Container className='pt-8 md:py-4'>
      <div className='flex flex-col-reverse items-center md:flex-row'>
        <div className='flex-1'>
          <div className='flex flex-col items-center gap-y-7 pr-0 md:items-start md:pr-5 lg:pr-16 xl:pr-28'>
            <h1 className='text-5xl font-bold lg:text-6xl'>نکست بلاگ</h1>
            <p className='text-balance text-center text-lg md:text-right lg:text-xl'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
            <Link
              className='w-min rounded-md bg-black px-7 py-3 text-xl font-bold text-white hover:bg-gray-800'
              href='/blog'
            >
              بلاگ
            </Link>
          </div>
        </div>
        <div className='flex-1 md:block'>
          <HeroImage />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
