import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAnuncios,
  selectLoading,
  selectError,
  createAnuncios,
  updateAnuncios,
  deleteAnuncios,
  selectAnuncio,
} from '../redux/slice/anunciosSlice';

interface Anuncio {
  id: number;
  descripcion: string;
  titulo: string;
}

export default function Anuncios() {
  const dispatch = useDispatch();
  const anuncios = useSelector(selectAnuncio);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAnuncios());
  }, [dispatch]);

  const handleCreateAnuncio = () => {
    const newAnuncio: Anuncio = {
      id: Math.floor(Math.random() * 1000),
      descripcion: " prueba",
      titulo: " prueba",

    };
    dispatch(createAnuncios(newAnuncio));
  };

  const handleEditAnuncio = (anuncio: Anuncio) => {
    const editedAnuncio: Anuncio = {
      id: anuncio.id,
      descripcion: "",
      titulo: "",

    };
    dispatch(updateAnuncios(editedAnuncio));
  };

  const handleDeleteAnuncio = (anuncioId: number) => {
    dispatch(deleteAnuncios(anuncioId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className=' container text-center p-3  '>

      <button className='btn btn-primary ' onClick={handleCreateAnuncio}>Nuevo Anuncio</button>
      <div className='list-group p-3'> {anuncios.map((anuncio) => (
        <li className='list-group-item bg-light'
          key={anuncio.id}>
          <p> Nombre</p>
          {anuncio.descripcion}
          <p> Email</p>
          {anuncio.titulo}
         
          <button className='btn btn-success p-1 m-3' onClick={() => handleEditAnuncio(anuncio)}>Editar</button>
          <button className='btn btn-danger p-1' onClick={() => handleDeleteAnuncio(anuncio.id)}>Eliminar</button>
        </li>

      ))}
      </div>

    </div>
  );
}