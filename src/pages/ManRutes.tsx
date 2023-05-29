import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createRutas,
  deleteRutas,
  getRutas,
  selectError,
  selectLoading,
  selectRuta,
  updateRutas,
} from '../redux/slice/routeSlice';

interface Ruta {
  id: number;
  router: string;
  price: string;
  departureTime: string;
}

export default function Rutas() {
  const dispatch = useDispatch();
  const rutas = useSelector(selectRuta);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [newRouter, setNewRouter] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newDepartureTime, setNewDepartureTime] = useState('');
  const [rutaIdBeingEdited, setRutaIdBeingEdited] = useState(-1);

  useEffect(() => {
    dispatch(getRutas());
  }, [dispatch]);

  const handleCreateRutas = () => {
    const newRuta: Ruta = {
      id: Math.floor(Math.random() * 1000),
      router: newRouter,
      price: newPrice,
      departureTime: newDepartureTime,
    };
    dispatch(createRutas(newRuta));
    setNewRouter('');
    setNewPrice('');
    setNewDepartureTime('');
  };

  const handleEditRuta = (ruta: Ruta) => {
    setNewRouter(ruta.router);
    setNewPrice(ruta.price);
    setNewDepartureTime(ruta.departureTime);
    setRutaIdBeingEdited(ruta.id);
  };

  const handleSaveEdit = (ruta: Ruta) => {
    const editedRuta: Ruta = {
      id: ruta.id,
      router: newRouter,
      price: newPrice,
      departureTime: newDepartureTime,
    };
    dispatch(updateRutas(editedRuta));
    setRutaIdBeingEdited(-1);
  };

  const handleDeleteRuta = (rutaId: number) => {
    dispatch(deleteRutas(rutaId));
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
          value={newRouter}
          onChange={(e) => setNewRouter(e.target.value)}
          placeholder='Nombre'
        />
        <input
          type='text'
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          placeholder='Precio'
        />
        <input
          type='text'
          value={newDepartureTime}
          onChange={(e) => setNewDepartureTime(e.target.value)}
          placeholder='Hora de salida'
        />
        <button className='btn btn-primary' onClick={handleCreateRutas}>
          Nuevas Rutas
        </button>
      </div>
      <div className='list-group p-3'>
        {rutas.map((ruta) => (
          <li className='list-group-item bg-light' key={ruta.id}>
            <p>Nombre</p>
            {ruta.router}
            <p>Precio</p>
            {ruta.price}
            <p>Hora de salida</p>
            {ruta.departureTime}
            {rutaIdBeingEdited === ruta.id ? (
              <div>
                <input
                  type='text'
                  value={newRouter}
                  onChange={(e) => setNewRouter(e.target.value)}
                />
                <input
                  type='text'
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                />
                <input
                  type='text'
                  value={newDepartureTime}
                  onChange={(e) => setNewDepartureTime(e.target.value)}
                />
                <button
                  className='btn btn-success p-1 m-3'
                  onClick={() => handleSaveEdit(ruta)}
                >
                  Guardar
                </button>
              </div>
            ) : (
              <div>
                <button
                  className='btn btn-success p-1 m-3'
                  onClick={() => handleEditRuta(ruta)}
                >
                  Editar
                </button>
                <button
                  className='btn btn-danger p-1'
                  onClick={() => handleDeleteRuta(ruta.id)}
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
