import AdminPostLists from '@/components/admin-page/admin-post-list';
import NewPostForm from '@/components/admin-page/new-post-form';
import Container from '@/components/ui/container';

const AdminPage = () => {
  return (
    <div>
      <Container className='mt-8 flex flex-col gap-x-10 md:flex-row'>
        <div className='w-full p-2'>
          <NewPostForm />
        </div>
        <div className='my-5 block border-b shadow-md md:hidden'></div>
        <div className='w-full p-2 md:h-96 md:overflow-y-auto'>
          <AdminPostLists />
        </div>
      </Container>
    </div>
  );
};

export default AdminPage;
