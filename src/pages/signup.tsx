import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createUser,
  selectError,
  selectLoading,
  selectUsers,
} from '../redux/slice/registerSlice';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  rol: "client";
}
//TODO: Check the names in the file and functional component
export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [newUsers, setNewUsers] = useState<User[]>([]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState('');

  const handleCreateUser = () => {
    const newUser: User = {
      id: Math.floor(Math.random() * 1000),
      name: newUserName,
      email: newUserEmail,
      password: newUserPassword,
      rol: 'client',
    };
    setNewUsers([...newUsers, newUser]);
    setNewUserName('');
    setNewUserEmail('');
    setNewUserPassword('');
    setSaveSuccess(false);
    setSaveError('');
  };

  const handleSaveUsers = () => {
    newUsers.forEach((user) => dispatch(createUser(user)));
    setNewUsers([]);
    setSaveSuccess(true);
  };

  useEffect(() => {
    if (error) {
      setSaveError(error);
    }
  }, [error]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-secondary container text-center p-5 tab-content'>
      <h3>Register</h3>
      {saveSuccess && <div>Usuario Registrado!</div>}
      {saveError && <div>Error: {saveError}</div>}
      <div className='row  mb-4 p-3'>
        <input
          className='mb-3'
          type='text'
          placeholder='Name'
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <input
          className='mb-3'
          type='text'
          placeholder='Email'
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
        />
        <input
          className='mb-3'
          type='password'
          placeholder='Password'
          value={newUserPassword}
          onChange={(e) => setNewUserPassword(e.target.value)}
        />
        <select className='mb-3' name='rol' id='rol'>
          <option value='1'>Cliente</option>
        </select>

        <button className='btn btn-primary' onClick={handleCreateUser}>
          Agregar Usuario
        </button>
      </div>

      {newUsers.length > 0 && (
        <div>
          <h4>Nuevos Usuarios</h4>
          <ul>
            {newUsers.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email} - {user.password}
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
