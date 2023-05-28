import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

const DashboardPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div>
      <h1>Dashboard</h1>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
