import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='flex h-96 flex-col items-center justify-center gap-y-5'>
      <h2 className='text-6xl font-bold'>۴۰۴</h2>
      <Link className='rounded-md px-3 py-2 text-xl hover:bg-gray-200' href='/'>
        بازگشت به خانه
      </Link>
    </div>
  );
};

export default NotFound;
