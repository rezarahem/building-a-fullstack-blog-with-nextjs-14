import AdminPostLists from '@/components/admin-page/admin-post-list';
import NewPostForm from '@/components/admin-page/new-post-form';
import Container from '@/components/ui/container';

const AdminPage = () => {
  return (
    <div>
      <Container className='mt-8 flex gap-x-10'>
        <div className='w-full p-2'>
          <NewPostForm />
        </div>
        <div className='w-full p-2'>
          <AdminPostLists />
        </div>
      </Container>
    </div>
  );
};

export default AdminPage;
