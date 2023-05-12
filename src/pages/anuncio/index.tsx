/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import RootLayout from "../../components/Layout"
import { AnuncioProvider, useAnuncio } from '../../context/AnuncioContext';

interface Anuncio {
    descripcion: string;
    detalles: string;
    id_cliente: string;
    id_pantalla: string;
    info_adicional: string;
    link: string;
    
}

const valorInicial: Anuncio = {
    descripcion: " ",
    detalles: " ",
    id_cliente: " ",
    id_pantalla: " ",
    info_adicional: " ",
    link: " ",
    
}

let newAnuncio:Anuncio;

const { createAnuncio, updateAnuncio, deleteAnuncio} = useAnuncio();

function personas() {
    const [descripcion, setDescripcion] = useState('');
    const [detalles, setDetalles] = useState('');
    const [id_cliente, setIdcliente] = useState('');
    const [id_pantalla, setIdPantalla] = useState('');
    const [info_adicional, setInfoAdicinal] = useState('');
    const [link, setLink] = useState('');


    const handleDescripcionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescripcion(event.target.value);
    };

    const handleDetallesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDetalles(event.target.value);
    };

    const handleIdClienteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIdcliente(event.target.value);
    };

    const handleIDPantallaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIdPantalla(event.target.value);
    };

    const handleInfoAdicionalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInfoAdicinal(event.target.value);
    };

    const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLink(event.target.value);
    };

   
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        newAnuncio.descripcion = descripcion;
        newAnuncio.detalles = detalles;
        newAnuncio.id_cliente = id_cliente;
        newAnuncio.id_pantalla = id_pantalla;
        newAnuncio.info_adicional = info_adicional;
        newAnuncio.link = link;
        
        createAnuncio(newAnuncio);
        event.preventDefault();
        newAnuncio
    };

    return(
        <RootLayout>
        <AnuncioProvider>    
        <div className='d-flex justify-content-center  p-3 mb-2 bg-secondary text-white'>
            <form onSubmit={handleSubmit}>
                <div className='m-10'>
                    <div className='p-1'>
                        <label htmlFor="descripcion">Descripcion:</label>
                        <input type="text" id="descripcion" value={descripcion} onChange={handleDescripcionChange} />
                    </div>
                    <div className='p-1'>
                        <label htmlFor="detalles">Detalles:</label>
                        <input type="text" id="detalles" value={detalles} onChange={handleDetallesChange} />
                    </div>
                    <div className='p-1'>
                        <label htmlFor="cliente">Cliente:</label>
                        <input type="text" id="cliente" value={id_cliente} onChange={handleIdClienteChange} />
                    </div>
                    <div className='p-1'>
                        <label htmlFor="id_pantalla">Id Pantalla:</label>
                        <input type="text" id="id_pantalla" value={id_pantalla} onChange={handleIDPantallaChange} />
                    </div>
                    <div className='p-1'>
                        <label htmlFor="Adicional">Info Adicional:</label>
                        <input type="text" id="info_adicional" value={info_adicional} onChange={handleInfoAdicionalChange} />
                    </div>
                    <div className='p-1'>
                        <label htmlFor="Link">Link:</label>
                        <input type="text" id="link" value={link} onChange={handleLinkChange} />
                    </div>
                   
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
        </AnuncioProvider>
        </RootLayout>
    );
    
}

export default Anuncio;