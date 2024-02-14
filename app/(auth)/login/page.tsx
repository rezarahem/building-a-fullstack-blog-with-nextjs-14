import LoginForm from '@/components/auth/login-form';
import Container from '@/components/ui/container';
import { authOptions } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user.usreId) redirect('/');

  return (
    <div className='mt-20'>
      <Container>
        <LoginForm />
      </Container>
    </div>
  );
};

export default LoginPage;
