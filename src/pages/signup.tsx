import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createUser,
  selectError,
  selectLoading,
  selectUsers,
 
} from '../redux/slice/loginSlice';

interface User {
  id: number;
  name: string;
  email: string;
  password:string;
  rol: "client"
}

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [newUsers, setNewUsers] = useState<User[]>([]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const[newUserPassword, setNewUserPassword]= useState("");

 
  const handleCreateUser = () => {
    const newUser: User = {
      id: Math.floor(Math.random() * 1000),
      name: newUserName,
      email: newUserEmail,
      password: newUserPassword,
      rol:'client',
    };
    setNewUsers([...newUsers, newUser]);
    setNewUserName('');
    setNewUserEmail('');
    setNewUserPassword("")
  };

  const handleSaveUsers = () => {
    newUsers.forEach((user) => dispatch(createUser(user)));
    setNewUsers([]);
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='bg-secondary container text-center p-5 tab-content'>
      <h3>Register</h3>
      <div className='row  mb-4 p-3' >
        <input className='mb-3'
          type='text'
          placeholder='Name'
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <input className='mb-3'
          type='text'
          placeholder='Email'
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
        />
       <input className='mb-3'
          type='password'
          placeholder='Password'
          value={newUserPassword}
          onChange={(e) => setNewUserPassword(e.target.value)}
        />
         <select  className='mb-3' name="rol" id="rol">
         <option value="1">Cliente</option>
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
