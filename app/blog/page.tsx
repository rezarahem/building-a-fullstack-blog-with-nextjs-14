import Container from '@/components/ui/container';
import prismadb from '@/libs/prismadb';
import postImgae from '@/public/post-cover.jpg';
import { MoveLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const fakedb = [
  {
    id: 1,
    title: 'عنوان یک',
    body: 'شرح یک',
    image: postImgae,
  },
  {
    id: 2,
    title: 'عنوان دو',
    body: 'شرح دو',
    image: postImgae,
  },
  {
    id: 3,
    title: 'عنوان سه',
    body: 'شرح سه',
    image: postImgae,
  },
  {
    id: 4,
    title: 'عنوان چهار',
    body: 'شرح چهار',
    image: postImgae,
  },
  {
    id: 5,
    title: 'عنوان پنج',
    body: 'شرح پنج',
    image: postImgae,
  },
  {
    id: 6,
    title: 'عنوان شش',
    body: 'شرح شش',
    image: postImgae,
  },
  {
    id: 7,
    title: 'عنوان هفت',
    body: 'شرح هفت',
    image: postImgae,
  },
  {
    id: 8,
    title: 'عنوان هشت',
    body: 'شرح هشت',
    image: postImgae,
  },
  {
    id: 9,
    title: 'عنوان نه',
    body: 'شرح نه',
    image: postImgae,
  },
  {
    id: 10,
    title: 'عنوان ده',
    body: 'شرح ده',
    image: postImgae,
  },
];

const getFirstWords = (input: string, numWords: number) => {
  const words = input.split(' ');
  const firstWords = words.slice(0, numWords);

  return firstWords.join(' ');
};

const BlogPage = async () => {
  const posts = await prismadb.post.findMany();

  return (
    <div>
      <Container className='sm:pt-8'>
        <div className='grid grid-cols-1 gap-8 divide-y sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {posts.map((post) => (
            <Link
              href={`/blog/${post.address}`}
              className='flex flex-row-reverse justify-between gap-y-1 pt-8 sm:flex-col sm:rounded-md sm:border sm:pt-0 sm:shadow-lg sm:transition sm:duration-500 sm:ease-out sm:hover:scale-105 sm:hover:shadow-2xl'
              key={post.id}
            >
              <div className='relative h-44 w-48 overflow-hidden rounded-md sm:w-full  sm:rounded-b-none sm:rounded-t-md  '>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes='50vw'
                  className='object-cover'
                />
              </div>
              <div className='flex flex-col justify-between p-2'>
                <div className='space-y-3'>
                  <h2 className='font-bold'>{post.title}</h2>
                  <p className='text-gray-600'>
                    {getFirstWords(post.body, 10)}...
                  </p>
                </div>
                <div className='flex items-center justify-center gap-x-2 rounded-full bg-gray-200 px-3 py-2 sm:hidden'>
                  <p className='text-xs'>ادامه مطلب</p>
                  <span>
                    <MoveLeft className='size-4' />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;
