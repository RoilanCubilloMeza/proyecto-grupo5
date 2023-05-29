

      import { useEffect, useState } from 'react';
      import { useDispatch, useSelector } from 'react-redux';
      import {
        createPantalla,
        deletePantalla,
        getPantallas,
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
  const pantalla = useSelector(selectPantallas);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [newPantallas, setNewPantallas] = useState<Pantalla[]>([]);
  const [newCompanyName, setNewCompanyName] = useState('');
  const [newLink, setNewLink] = useState('');
  const [newrouter, setNewrouter] = useState('');
  const [newprice, setNewprice] = useState('');
  const [newdepartureTime, setNewdepartureTime] = useState('');
  const [newimages, setNewimages] = useState('');
  

  useEffect(() => {
    dispatch(getPantallas());
  }, [dispatch]);

  const handleCreatePantalla = () => {
    const newPantalla: Pantalla = {
      id: Math.floor(Math.random() * 1000),
      companyName: newCompanyName,
      link: newLink,
      router: newrouter,
      price: newprice,
      departureTime: newdepartureTime,
      images: newimages,
    };
    setNewPantallas([...newPantallas, newPantalla]);
    setNewCompanyName('');
    setNewLink('');
    setNewrouter('');
    setNewprice('');
    setNewdepartureTime('');
    setNewimages('');
  };

  const handleSavePantallas = () => {
    newPantallas.forEach((pantalla) => dispatch(createPantalla(pantalla)));
    setNewPantallas([]);
  };

  const handleEditPantalla = (pantalla: Pantalla) => {
    const editedPantalla: Pantalla = {
      id: pantalla.id,
      companyName: pantalla.companyName,
      link: pantalla.link,
      router: pantalla.router,
      price: pantalla.price,
      departureTime: pantalla.departureTime,
      images: pantalla.images,
     
    };
    dispatch(updatePantalla(editedPantalla));
  };

  const handleDeleteUser = (pantallaId: number) => {
    dispatch(deletePantalla(pantallaId));
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
          placeholder='CompanyName'
          value={newCompanyName}
          onChange={(e) => setNewCompanyName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Link'
          value={newLink}
          onChange={(e) => setNewLink(e.target.value)}
        />
           <input
          type='text'
          placeholder='DepartureTime'
          value={newdepartureTime}
          onChange={(e) => setNewdepartureTime(e.target.value)}
        />
        <input
          type='text'
          placeholder='Router'
          value={newrouter}
          onChange={(e) => setNewrouter(e.target.value)}
        />
        
        <input
          type='text'
          placeholder='Price'
          value={newprice}
          onChange={(e) => setNewprice(e.target.value)}
        />
           <input
          type='text'
          placeholder='Images'
          value={newimages}
          onChange={(e) => setNewimages(e.target.value)}
        />
        <button className='btn btn-primary' onClick={handleCreatePantalla}>
          Agregar Usuario
        </button>
      </div>
      <div className='list-group p-3'>
        {pantalla.map((pantalla) => (
          <li className='list-group-item bg-light' key={pantalla.id}>
            {pantalla.companyName}-
            {pantalla.link}-
            {pantalla.departureTime}-
            {pantalla.images}-
            {pantalla.price}-
            {pantalla.router}
            <button className='btn btn-success p-1 m-3' onClick={() => handleEditPantalla(pantalla)}>
              Editar
            </button>
            <button className='btn btn-danger p-1' onClick={() => handleDeleteUser(pantalla.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </div>
      {newPantallas.length > 0 && (
        <div>
          <h4>Nuevos Usuarios</h4>
          <ul>
            {newPantallas.map((pantalla) => (
              <li key={pantalla.id}>
                {pantalla.companyName} - {pantalla.link} - {pantalla.router}
              </li>
            ))}
          </ul>
          <button className='btn btn-primary' onClick={handleSavePantallas}>
            Guardar Usuarios
          </button>
        </div>
      )}
    </div>
  );
}
