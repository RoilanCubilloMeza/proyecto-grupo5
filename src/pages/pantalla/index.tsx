/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import RootLayout from "../../components/Layout"
import { PantallaProvider, usePantalla } from '../../context/PantallaContext';

interface Pantalla {
   numero:string;
  posicion: string;
 
}

const valorInicial: Pantalla = {
    numero:"",
    posicion: "",
}
let newPantalla:Pantalla;

const { createPantalla, updatePantalla, deletePantalla} = usePantalla();

function Pantalla() {
    const [numero, setNumero] = useState('');
    const [posicion, setPosicion] = useState('');
   

    const handlePosicionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPosicion(event.target.value);
    };
    const handleNumeroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumero(event.target.value);
    };
  

   
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        newPantalla.numero = numero;
        newPantalla.posicion = posicion;
       
       
        
        createPantalla(newPantalla);
        event.preventDefault();
        newPantalla
    };

    return(
        <RootLayout>
        <PantallaProvider>    
        <div className='d-flex justify-content-center  p-3 mb-2 bg-secondary text-white'>
            <form onSubmit={handleSubmit}>
                <div className='m-10'>
                    <div className='p-1'>
                        <label htmlFor="numero">Numero:</label>
                        <input type="text" id="numero" value={numero} onChange={handleNumeroChange} />
                    </div>
                    <div className='p-1'>
                        <label htmlFor="posicion">Posicion:</label>
                        <input type="text" id="posicion" value={posicion} onChange={handlePosicionChange} />
                    </div>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
        </PantallaProvider>
        </RootLayout>
    );
    
}

export default Pantalla;