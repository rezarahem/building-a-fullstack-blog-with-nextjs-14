import { cn } from '@/libs/utils';
import { FooterLogo } from '../navbar/logo';
import Container from '../ui/container';
import instagramLogo from '@/public/instagram.png';
import telegramLogo from '@/public/telegram.png';
import xLogo from '@/public/x.png';
import youtubeLogo from '@/public/youtube.png';
import Image from 'next/image';
import Link from 'next/link';

const socialIcons = [
  {
    label: 'instagram',
    logo: instagramLogo,
    size: 'size-8',
    href: 'https://instagram.com',
  },
  {
    label: 'telegram',
    logo: telegramLogo,
    size: 'size-8',
    href: 'https://telegram.org',
  },
  {
    label: 'x',
    logo: xLogo,
    size: 'size-6',
    href: 'https://twitter.com',
  },
  {
    label: 'youtube',
    logo: youtubeLogo,
    size: 'size-10',
    href: 'https://youtube.com',
  },
];

const Footer = () => {
  return (
    <div className='mt-8 border-t bg-gray-800'>
      <Container>
        <div className='flex flex-col justify-between gap-y-8 py-8 text-white md:flex-row'>
          <div className='flex flex-col items-center gap-y-4 md:items-start'>
            <div className='flex items-center gap-x-3'>
              <FooterLogo />
              <h2 className='text-3xl font-bold'>نکست بلاگ</h2>
            </div>
            <p className='w-96 text-balance text-center text-gray-300 md:text-right'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>

          <div className='flex flex-col items-center gap-y-4 md:items-end'>
            <div className='flex items-center justify-center gap-x-4'>
              {socialIcons.map(({ label, logo, size, href }) => (
                <div key={label} className={cn('relative', size)}>
                  <Link href={href}>
                    <Image
                      src={logo}
                      alt={label}
                      fill
                      sizes='33vw'
                      className='opacity-50 invert'
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <p className='text-gray-500'>
                Copyright &copy; | All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
