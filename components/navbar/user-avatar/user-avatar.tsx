import { authOptions } from '@/libs/next-auth';
import { Session, getServerSession } from 'next-auth';
import prismadb from '@/libs/prismadb';
import User from './user';
import Link from 'next/link';

type UserAvatarProps = {
  session: Session | null;
};

const UserAvatar = async ({ session }: UserAvatarProps) => {
  // const session = await getServerSession(authOptions);

  if (!session || !session.user.usreId)
    return (
      <div>
        <Link
          href='/login'
          className='rounded-md bg-black px-3 py-2 text-white hover:bg-gray-800'
        >
          ورود / ثبت نام
        </Link>
      </div>
    );

  const user = await prismadb.user.findUnique({
    where: {
      id: session.user.usreId,
    },
    select: {
      name: true,
    },
  });

  return <User name={user?.name as string} />;
};

export default UserAvatar;
