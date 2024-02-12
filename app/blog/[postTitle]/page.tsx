import Container from '@/components/ui/container';
import postImgae from '@/public/post-cover.jpg';
import Image from 'next/image';

const post = {
  id: 1,
  title: 'عنوان یک',
  body: 'شرح یک',
  image: postImgae,
};

const SinglePostPage = () => {
  return (
    <div>
      <Container>
        <div className='flex flex-col gap-y-10'>
          <div className='relative h-60 w-full overflow-hidden rounded-b-md shadow-lg md:h-96'>
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes='50vw'
              className='object-cover'
            />
          </div>
          <div className='space-y-4'>
            <h1 className='text-3xl font-bold'>{post.title}</h1>
            <p className='text-balance text-lg'>{post.body}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SinglePostPage;
