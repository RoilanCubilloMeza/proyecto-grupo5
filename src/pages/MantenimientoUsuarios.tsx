import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
 getUsers,createUser,deleteUser,selectError,selectLoading,selectUsers,updateUser} from '../redux/slice/userSlice';

interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'client';
    
  }
  export default function Users() {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
  
    useEffect(() => {
      dispatch(getUsers());
    }, [dispatch]);
  
    const handleCreateUser = () => {
      const newUser: User = {
        id: Math.floor(Math.random() * 1000),
        name: 'New User',
        email: 'newuser@example.com',
        role: 'client',
      };
      dispatch(createUser(newUser));
    };
  
    const handleEditUser = (user: User) => {
      const editedUser: User = {
        id: user.id,
        name: 'Edited User',
        email: 'editeduser@example.com',
        role: 'client',
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
      <div className=' container text-center p-3  '>

        <button  className='btn btn-primary ' onClick={handleCreateUser}>Nuevo Usuario</button>
        <div className='list-group p-3'> {users.map((user) => (
            <li  className='list-group-item bg-light'
             key={user.id}>
               <p> Nombre</p>
              {user.name} 
              <p> Email</p>
              {user.email} 
              <p>Rol</p>
              {user.class} 
              <button className='btn btn-success p-1 m-3'  onClick={() => handleEditUser(user)}>Editar</button>
              <button className='btn btn-danger p-1'  onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
            </li>

          ))}
          </div> 
       
      </div>
    );
  }