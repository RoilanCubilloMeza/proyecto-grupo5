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
} from '../redux/slice/AdvertisementSlice';

interface Anuncio {
  id: number;
  tittle: string;
  url: string;
}

export default function Anuncios() {
  const dispatch = useDispatch();
  const anuncios = useSelector(selectAnuncio);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [editedTittle, setEditedTittle] = useState('');
  const [editedUrl, setEditedUrl] = useState('');
  const [newTittle, setNewTittle] = useState('');
  const [newUrl, setNewUrl] = useState('');

  useEffect(() => {
    dispatch(getAnuncios());
  }, [dispatch]);

  const handleCreateAnuncio = () => {
    const newAnuncio: Anuncio = {
      id: Math.floor(Math.random() * 1000),
      tittle: newTittle,
      url: newUrl,
    };
    dispatch(createAnuncios(newAnuncio));
    setNewTittle('');
    setNewUrl('');
  };

  const handleEditAnuncio = (anuncio: Anuncio) => {
    setEditedTittle(anuncio.tittle);
    setEditedUrl(anuncio.url);
  };

  const handleSaveAnuncioChanges = (anuncioId: number) => {
    const editedAnuncio: Anuncio = {
      id: anuncioId,
      tittle: editedTittle,
      url: editedUrl,
    };
    dispatch(updateAnuncios(editedAnuncio));
    setEditedTittle('');
    setEditedUrl('');
  };

  const handleDeleteAnuncio = (anuncioId: number) => {
    dispatch(deleteAnuncios(anuncioId));
  };

  if (loading) {
    return <div className='text-center h2 p-3'>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container text-center p-3'>
      <div>
        <input
          type='text'
          value={newTittle}
          onChange={(e) => setNewTittle(e.target.value)}
          placeholder='Título del anuncio'
        />
        <input
          type='text'
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
          placeholder='URL del anuncio'
        />
        <button className='btn btn-primary' onClick={handleCreateAnuncio}>
          Nuevo Anuncio
        </button>
      </div>
      <div className='list-group p-3'>
        {anuncios.map((anuncio) => (
          <li className='list-group-item bg-light' key={anuncio.id}>
            <p>Descripción</p>
            {anuncio.tittle}
            <p>URL</p>
            {anuncio.url}
            {editedTittle === anuncio.tittle ? (
              <div>
                <input
                  type='text'
                  value={editedTittle}
                  onChange={(e) => setEditedTittle(e.target.value)}
                />
                <input
                  type='text'
                  value={editedUrl}
                  onChange={(e) => setEditedUrl(e.target.value)}
                />
                <button
                  className='btn btn-success p-1 m-3'
                  onClick={() => handleSaveAnuncioChanges(anuncio.id)}
                >
                  Guardar
                </button>
              </div>
            ) : (
              <div>
                <button
                  className='btn btn-success p-1 m-3'
                  onClick={() => handleEditAnuncio(anuncio)}
                >
                  Editar
                </button>
                <button
                  className='btn btn-danger p-1'
                  onClick={() => handleDeleteAnuncio(anuncio.id)}
                >
                  Eliminar
                </button>
              </div>
            )}
          </li>
        ))}
      </div>
    </div>
  );
}
