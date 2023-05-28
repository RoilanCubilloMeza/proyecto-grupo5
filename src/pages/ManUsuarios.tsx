import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUsers,
  createUser1,
  deleteUser,
  selectError,
  selectLoading,
  selectUsers,
  updateUser
} from '../redux/slice/userSlice';

interface User {
  id: number;
  name: string;
  email: string;
  rol: 'admin' | 'client';
 
}

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [newUsers, setNewUsers] = useState<User[]>([]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState<'admin' | 'client'>('client');

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleCreateUser = () => {
    const newUser: User = {
      id: Math.floor(Math.random() * 1000),
      name: newUserName,
      email: newUserEmail,
      rol: newUserRole,
    };
    setNewUsers([...newUsers, newUser]);
    setNewUserName('');
    setNewUserEmail('');
    setNewUserRole('client');
  };

  const handleSaveUsers = () => {
    newUsers.forEach((user) => dispatch(createUser1(user)));
    setNewUsers([]);
  };

  const handleEditUser = (user: User) => {
    const editedUser: User = {
      id: user.id,
      name: user.name,
      email: 'editeduser@example.com',
      rol: 'client',
    };
    dispatch(updateUser(editedUser));
  };

  const handleDeleteUser = (userId: number) => {
    dispatch(deleteUser(userId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container text-center p-3'>
      <div>
        <input
          type='text'
          placeholder='Name'
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Email'
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
        />
        <select value={newUserRole} onChange={(e) => setNewUserRole(e.target.value as 'admin' | 'client')}>
          <option value='admin'>Admin</option>
          <option value='client'>Client</option>
        </select>
        <button className='btn btn-primary' onClick={handleCreateUser}>
          Agregar Usuario
        </button>
      </div>
      <div className='list-group p-3'>
        {users.map((user) => (
          <li className='list-group-item bg-light' key={user.id}>
            <p>Nombre</p>
            {user.name}
            <p>Email</p>
            {user.email}
            <p>Rol</p>
            {user.rol}
            <button className='btn btn-success p-1 m-3' onClick={() => handleEditUser(user)}>
              Editar
            </button>
            <button className='btn btn-danger p-1' onClick={() => handleDeleteUser(user.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </div>
      {newUsers.length > 0 && (
        <div>
          <h4>Nuevos Usuarios</h4>
          <ul>
            {newUsers.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email} - {user.rol}
              </li>
            ))}
          </ul>
          <button className='btn btn-primary' onClick={handleSaveUsers}>
            Guardar Usuarios
          </button>
        </div>
      )}
    </div>
  );
}
