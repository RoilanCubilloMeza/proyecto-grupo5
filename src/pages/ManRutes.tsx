import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
createRutas,deleteRutas,getRutas,selectError,selectLoading,selectRuta,updateRutas} from '../redux/slice/routeSlice';

 interface Ruta {
    id: number;
    router: string;
    price: string;
    departureTime:string
  }
  export default function Rutas() {
    const dispatch = useDispatch();
    const rutas = useSelector(selectRuta);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
  
    useEffect(() => {
      dispatch(getRutas());
    }, [dispatch]);
  
    const handleCreateRutas = () => {
      const newRutas: Ruta = {
        id: Math.floor(Math.random() * 1000),
        router: "string",
        price: "string",
        departureTime:"string"
      };
      dispatch(createRutas(newRutas));
    };
  
    const handleEditRuta = (user: Ruta) => {
      const editedRutas: Ruta = {
        id: user.id,
        router: "string",
        price: "string",
        departureTime:"string"
      };
      dispatch(updateRutas(editedRutas));
    };
  
    const handleDeleteRuta = (rutasId: number) => {
      dispatch(deleteRutas(rutasId));
    };
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div className=' container text-center p-3  '>

        <button  className='btn btn-primary ' onClick={handleCreateRutas}>Nuevo Usuario</button>
        <div className='list-group p-3'> {rutas.map((ruta) => (
            <li  className='list-group-item bg-light'
             key={ruta.id}>
               <p> Nombre</p>
              {ruta.router} 
              <p> Email</p>
              {ruta.price} 
              <p>Rol</p>
              {ruta.departureTime} 
              <button className='btn btn-success p-1 m-3'  onClick={() => handleEditRuta(Rutas)}>Editar</button>
              <button className='btn btn-danger p-1'  onClick={() => handleDeleteRuta(ruta.id)}>Eliminar</button>
            </li>

          ))}
          </div> 
       
      </div>
    );
  }