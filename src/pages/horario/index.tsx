/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import RootLayout from "../../components/Layout"
import { HorarioProvider, useHorario } from "<nuevo>/context/HorarioContext";

interface Horario {
    id_ruta: string;
    salida: string;
}

const valorInicial: Horario = {
    id_ruta: " ",
    salida: " ",

}

let newHorario:Horario;

const { createHorario, updateHorario, deleteHorario} = useHorario();

function Horario() {
    const [id_ruta, setIdRuta] = useState('');
    const [salida, setSalida] = useState('');
 
   

    const handleIdRutaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIdRuta(event.target.value);
    };

    const handleSalidaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSalida(event.target.value);
    };

   
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        newHorario.id_ruta = id_ruta;
        newHorario.salida = salida;
      
    
        
        createHorario(newHorario);
        event.preventDefault();
        newHorario
    };

    return(
        <HorarioProvider>    
        <div className='container mt-3 text-center form-control'>
            <form onSubmit={handleSubmit}>
                <div className='m-10'>
                    <div className='p-1'>
                        <label  className='form-label' htmlFor="id_ruta">Id Ruta:</label>
                        <input  className='form-control' type="text" id="id_ruta" value={id_ruta} onChange={handleIdRutaChange} />
                    </div>
                    <div className='p-1'>
                        <label  className='form-label' htmlFor="salida">Salida:</label>
                        <input   className='form-control' type="text" id="salida" value={salida} onChange={handleSalidaChange} />
                    </div>
              
                </div>
                <button className=" btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
        </HorarioProvider>
    );
    
}

export default Horario;