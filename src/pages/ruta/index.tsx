/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import RootLayout from "../../components/Layout"
import { useRutas } from "../../context/RutasContext";
import { RutasProvider } from '../../context/RutasContext';

interface Rutas {
    destino: string;
    monto: string;
    origen:string;
    
}

const valorInicial: Rutas = {
   destino:"",
   monto:"",
   origen:"",

}

let newRutas:Rutas;

const { createRutas, updateRutas, deleteRutas} = useRutas();

function Rutas() {
    const [destino, setDestino] = useState('');
    const [monto, setMonto] = useState('');
    const [origen, setOrigen] = useState('');


    const handleDestinoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDestino(event.target.value);
    };

    const handleMontoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDestino(event.target.value);
    };
    const handleOrigenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrigen(event.target.value);
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        newRutas.destino = destino;
        newRutas.monto = monto;
        newRutas.origen = origen;
       
        createRutas(newRutas);
        event.preventDefault();
        newRutas
    };

    return(
        <RutasProvider>    
        <div className='container mt-3 text-center form-control'>
            <form onSubmit={handleSubmit}>
                <div className='m-10'>
                    <div className='p-1'>
                        <label className='form-label'  htmlFor="destino">Destino:</label>
                        <input  className='form-control'  type="text" id="destino" value={destino} onChange={handleDestinoChange} />
                    </div>
                    <div className='p-1'>
                        <label  className='form-label' htmlFor="monto">Monto:</label>
                        <input  className='form-control' type="text" id="monto" value={monto} onChange={handleMontoChange} />

                    </div>
                    <div className='p-1'>
                        <label  className='form-label' htmlFor="origen">Origen:</label>
                        <input  className='form-control'  type="text" id="origen" value={origen} onChange={handleOrigenChange} />
                    </div>

                   
                    
                </div>
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
        </RutasProvider>
    );
    
}

export default Rutas;