import React, { useState } from "react";
import RootLayout from "../../components/Layout"
import { usePersona } from "../../context/PersonaContext";
import { PersonaProvider } from '../../context/PersonaContext';

interface Persona {
    nombre: string;
    apellido1: string;
    apellido2: string;
    correo: string;
    telefono: string;
    motivo: string;
    empresa: string;
}

const valorInicial: Persona = {
    nombre: " ",
    apellido1: " ",
    apellido2: " ",
    correo: " ",
    telefono: " ",
    motivo: " ",
    empresa: " ",
}

let newPersona:Persona;

const { createPersona, updatePersona, deletePersona} = usePersona();

function personas() {
    const [nameP, setName] = useState('');
    const [lastName1, setLastName1] = useState('');
    const [lastName2, setLastName2] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [telephone, setTelephone] = useState('');
    const [reason, setReason] = useState('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleLastName1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName1(event.target.value);
    };

    const handleLastName2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName2(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCompany(event.target.value);
    };

    const handleTelephoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTelephone(event.target.value);
    };

    const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReason(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        newPersona.nombre = nameP;
        newPersona.apellido1 = lastName1;
        newPersona.apellido2 = lastName2;
        newPersona.correo = email;
        newPersona.telefono = telephone;
        newPersona.motivo = reason;
        newPersona.empresa = company;
        createPersona(newPersona);
        event.preventDefault();
        newPersona
    };

    return(
        <RootLayout>
        <PersonaProvider>    
        <div className='d-flex justify-content-center  p-3 mb-2 bg-secondary text-white'>
            <form onSubmit={handleSubmit}>
                <div className='m-10'>
                    <div className='p-1'>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="nameP" value={nameP} onChange={handleNameChange} />
                    </div>
                    <div className='p-1'>
                        <label htmlFor="name">Primer Apellido:</label>
                        <input type="text" id="lastName1" value={lastName1} onChange={handleLastName1Change} />
                    </div>
                    <div className='p-1'>
                        <label htmlFor="name">Segundo Apellido:</label>
                        <input type="text" id="lastName2" value={lastName2} onChange={handleLastName2Change} />
                    </div>
                    <div className='p-1'>
                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className='p-1'>
                        <label htmlFor="company">Empresa:</label>
                        <input type="text" id="company" value={company} onChange={handleCompanyChange} />
                    </div>
                    <div className='p-1'>
                        <label htmlFor="telephone">Telefono:</label>
                        <input type="text" id="telephone" value={telephone} onChange={handleTelephoneChange} />
                    </div>
                    <div className='p-1'>
                        <label htmlFor="reason">Motivo:</label>
                        <input type="text" id="reason" value={reason} onChange={handleReasonChange} />
                    </div>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
        </PersonaProvider>
        </RootLayout>
    );
    
}

export default personas;