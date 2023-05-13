/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import RootLayout from "../../components/Layout"
import { useUsuarios } from "../../context/UsuariosContext";
import { UsuariosProvider } from '../../context/UsuariosContext';

interface Usuarios {
    nombre: string;
    pass: string;
    tipo:string;
    
}

const valorInicial: Usuarios = {
   nombre:"",
   pass:"",
   tipo:"",

}

let newUsuarios:Usuarios;

const { createUsuarios, updateUsuarios, deleteUsuarios} = useUsuarios();

function Usuarios() {
    const [nombre, setNombre] = useState('');
    const [pass, setPass] = useState('');
    const [tipo, setTipo] = useState('');


    const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(event.target.value);
    };

    const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value);
    };
    const handleTipoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTipo(event.target.value);
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        newUsuarios.nombre = nombre;
        newUsuarios.pass = pass;
        newUsuarios.tipo = tipo;
       
        createUsuarios(newUsuarios);
        event.preventDefault();
        newUsuarios
    };

    return(
        <UsuariosProvider>    
        <div className="container mt-3 text-center form-control">
            <form onSubmit={handleSubmit}>
                <div className='m-10'>
                    <div className='p-1'>
                        <label className='form-label' htmlFor="nombre">Nombre:</label>
                        <input className='form-control' type="text" id="nombre" value={nombre} onChange={handleNombreChange} />
                    </div>
                    <div className='p-1'>
                        <label  className='form-label' htmlFor="pass">Contraseña:</label>
                        <input  className='form-control' type="text" id="pass" value={pass} onChange={handlePassChange} />
                    </div>
                    <div className='p-1'>
                        <label  className='form-label' htmlFor="tipo">tipo:</label>
                        <input  className='form-control' type="text" id="tipo" value={tipo} onChange={handleTipoChange} />
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
        </UsuariosProvider>
    );
    
}

export default Usuarios;