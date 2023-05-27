import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {createPantalla,
  deletePantalla,
  getPantallas,
  pantallaSlice, 
  selectError, 
  selectLoading, 
  selectPantallas, 
  updatePantalla
} from '../redux/slice/ScreenSlice';

interface Pantalla {
  id: number;
  companyName: string;
  link: string;
  router: string;
  price: string;
  departureTime: string;
  images: string;

}
export default function Pantalla() {
  const dispatch = useDispatch();
  const pantallas = useSelector(selectPantallas);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getPantallas());
  }, [dispatch]);

  const handleCreatePantalla = () => {
    const newUser: Pantalla = {
      id: Math.floor(Math.random() * 1000),
      companyName: "",
      link: "string",
      router:" string",
      price: "",
      departureTime:" string",
      images: "string",
    };
    dispatch(createPantalla(newPantalla));
  };

  const handleEditUser = (user: Pantalla) => {
    const editedUser: Pantalla = {
      id: user.id,
      companyName: "",
      link: "string",
      router:" string",
      price: "",
      departureTime:" string",
      images: "string",
    };
    dispatch(updatePantalla(editedPantalla));
  };

  const handleDeleteUser = (PantallaId: number) => {
    dispatch(deletePantalla(PantallaId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className=' container text-center p-3  '>

      <button className='btn btn-primary ' onClick={handleCreatePantalla}>Nuevo Usuario</button>
      <div className='list-group p-3'> {pantallas.map((pantalla) => (
        <li className='list-group-item bg-light'
          key={pantalla.id}>
          <p> Nombre</p>
          {pantalla.price}
          <p> Email</p>
          {pantalla.link}
          <p>Rol</p>
          {pantalla.images}
          <button className='btn btn-success p-1 m-3' onClick={() => handleEditUser(Pantallas)}>Editar</button>
          <button className='btn btn-danger p-1' onClick={() => handleDeleteUser(pantalla.id)}>Eliminar</button>
        </li>

      ))}
      </div>

    </div>
  );
}
