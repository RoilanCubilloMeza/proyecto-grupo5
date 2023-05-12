/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import RootLayout from "../../components/Layout"
import { EmpleadoProvider, useEmpleado } from '../../context/EmpleadoContext';

interface Empleado {
   id_persona:string;
   id_puesto: string;
   id_usuario: string;
    
    
}

const valorInicial: Empleado = {
    id_persona:"",
    id_puesto: "",
    id_usuario: ""
     
   
    
}

let newEmpleado:Empleado;

const { createEmpleado, updateEmpleado, deleteEmpleado} = useEmpleado();

function Empleado() {
    const [id_persona, setIdPersona] = useState('');
    const [id_puesto, setIdPuesto] = useState('');
    const [id_usuario, setIdUsuario] = useState('');
   

    const handleIdPersonaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIdPersona(event.target.value);
    };

    const handleIdPuestoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIdPuesto(event.target.value);
    };

    const handleIdUsuarioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIdUsuario(event.target.value);
    };

   
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        newEmpleado.id_persona = id_persona;
        newEmpleado.id_puesto = id_puesto;
        newEmpleado.id_usuario = id_usuario;
       
       
        
        createEmpleado(newEmpleado);
        event.preventDefault();
        newEmpleado
    };

    return(
        <RootLayout>
        <EmpleadoProvider>    
        <div className='d-flex justify-content-center  p-3 mb-2 bg-secondary text-white'>
            <form onSubmit={handleSubmit}>
                <div className='m-10'>
                    <div className='p-1'>
                        <label htmlFor="id_persona">ID Persona:</label>
                        <input type="text" id="id_persona" value={id_persona} onChange={handleIdPersonaChange} />
                    </div>
                    <div className='p-1'>
                        <label htmlFor="id_puesto">Id Puesto:</label>
                        <input type="text" id="id_puesto" value={id_puesto} onChange={handleIdPuestoChange} />
                    </div>
                    <div className='p-1'>
                        <label htmlFor="id_usuario">Id Usuario:</label>
                        <input type="text" id="id_usuario" value={id_usuario} onChange={handleIdUsuarioChange} />
                    </div>
                  
                   
                   
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
        </EmpleadoProvider>
        </RootLayout>
    );
    
}

export default Empleado;