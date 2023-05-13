/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import RootLayout from "../../components/Layout"
import { ClienteProvider, useCliente } from '../../context/ClienteContext';

interface Cliente {
    nombre: string;
    detalles: string;
    email: string;
    pagina: string;
    telefono: string;
    
    
}

const valorInicial: Cliente = {
    nombre: " ",
    detalles: " ",
    email: " ",
    pagina: " ",
    telefono: " ",
   
    
}

let newCliente:Cliente;

const { createCliente, updateCliente, deleteCliente} = useCliente();

function Cliente() {
    const [nombre, setNombre] = useState('');
    const [detalles, setDetalles] = useState('');
    const [email, setEmail] = useState('');
    const [pagina, setPagina] = useState('');
    const [telefono, setTelefono] = useState('');
   

    const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(event.target.value);
    };

    const handleDetallesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDetalles(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePaginaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPagina(event.target.value);
    };

    const handleTelefonoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTelefono(event.target.value);
    };
   
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        newCliente.nombre = nombre;
        newCliente.detalles = detalles;
        newCliente.email = email;
        newCliente.pagina = pagina;
        newCliente.telefono = telefono;
    
        
        createCliente(newCliente);
        event.preventDefault();
        newCliente
    };

    return(
       
        <ClienteProvider>    
        <div className='container mt-3 text-center form-control'>
            <form onSubmit={handleSubmit}>
                <div className='m-10'>
                    <div className='p-1'>
                        <label className='form-label' htmlFor="nombre">Nombre:</label>
                        <input className='form-control' type="text" id="Nombre" value={nombre} onChange={handleNombreChange} />
                    </div>
                    <div className='p-1'>
                        <label  className='form-label' htmlFor="detalles">Detalles:</label>
                        <input className='form-control' type="text" id="detalles" value={detalles} onChange={handleDetallesChange} />
                    </div>
                    <div className='p-1'>
                        <label className='form-label' htmlFor="email">Email:</label>
                        <input className='form-control' type="text" id="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className='p-1'>
                        <label className='form-label' htmlFor="pagina">Pagina:</label>
                        <input className='form-control' type="text" id="pagina" value={pagina} onChange={handlePaginaChange} />
                    </div>
                    <div className='p-1'>
                        <label className='form-label' htmlFor="telefono">Info Adicional:</label>
                        <input className='form-control'  type="text" id="telefono" value={telefono} onChange={handleTelefonoChange} />
                    </div>
                   
                   
                </div>
                <button  className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
        </ClienteProvider>
    );
    
}

export default Cliente;