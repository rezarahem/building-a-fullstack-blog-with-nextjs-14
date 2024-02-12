import AdminPostLists from '@/components/admin-page/admin-post-list';
import NewPostForm from '@/components/admin-page/new-post-form';
import Container from '@/components/ui/container';

const AdminPage = () => {
  return (
    <div>
      <Container>
        <div>
          <NewPostForm />
        </div>
        <div>
          <AdminPostLists />
        </div>
      </Container>
    </div>
  );
};

export default AdminPage;
