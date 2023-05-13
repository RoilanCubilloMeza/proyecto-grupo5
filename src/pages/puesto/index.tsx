/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import RootLayout from "../../components/Layout"
import { usePuesto } from "../../context/PuestoContext";
import { PuestoProvider } from '../../context/PuestoContext';

interface Puesto {
    nombre: string;
    detalles: string;
    
}

const valorInicial: Puesto = {
    nombre: "",
     detalles:"",
}

let newPuesto:Puesto;

const { createPuesto, updatePuesto, deletePuesto} = usePuesto();

function Puestos() {
    const [nombre, setNombre] = useState('');
    const [detalles, setDetalles] = useState('');

    const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(event.target.value);
    };

    const handleDetallesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDetalles(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        newPuesto.nombre = nombre;
        newPuesto.detalles = detalles;
       
        createPuesto(newPuesto);
        event.preventDefault();
        newPuesto
    };

    return(
        <PuestoProvider>    
        <div className='container mt-3 text-center form-control'>
            <form onSubmit={handleSubmit}>
                <div className='m-10'>
                    <div className='p-1'>
                        <label className='form-label' htmlFor="nombre">Nombre:</label>
                        <input className='form-control'  type="text" id="nombre" value={nombre} onChange={handleNombreChange} />
                    </div>
                    <div className='p-1'>
                        <label  className='form-label' htmlFor="detalles">Detalles:</label>
                        <input  className='form-control' type="text" id="detalles" value={detalles} onChange={handleDetallesChange} />
                    </div>

                   
                    
                </div>
                <button  className="btn btn-primary"type="submit">Enviar</button>
            </form>
        </div>
        </PuestoProvider>
    );
    
}

export default Puestos;