import firebaseApp from '../config/firebase'
import React, { createContext, useContext, useState } from 'react'
import {useRouter} from 'next/router'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import { AnyARecord } from 'dns';

interface Persona {
    nombre: string;
    apellido1: string;
    apellido2: string;
    correo: string;
    telefono: string;
    motivo: string;
}

interface PersonaContextValue {
    //personas: Persona;
    createPersona: (newPersona: Persona) => void;
    updatePersona: (id:string, updatedPersona: Persona) => void;
    deletePersona: (id: string) => void;
}

interface props {
    children : JSX.Element | JSX.Element[];
}

const PersonaContext = createContext<PersonaContextValue | undefined>(undefined);

const valorInicial = {
    nombre: " ",
    apellido1: " ",
    apellido2: " ",
    correo: " ",
    telefono: " ",
    motivo: " ",
    empresa: " ",
}

const db = getFirestore(firebaseApp)
//const router = useRouter()

//const [newPersona, setNewPersona] = useState<Persona>(valorInicial)

//const router = useRouter()

export const usePersona = () => {
    const context = useContext(PersonaContext);
    if (!context) throw new Error("usePersona debe usarse con un PersonaProvider");
    return context;
};

export const PersonaProvider = ( {children}:props ) => {

    //const [personas, setPersonas] = useState<Persona>(valorInicial);
  
    const createPersona = async(newPersona: Persona) =>{
        try {
            await addDoc(collection(db,'persona'),{
                ...newPersona
            })
        } catch (error) {
            console.log(error);
        }
        //router.push('/')
    }
  
    const updatePersona = async(id: string, updatedPersona: Persona) =>{
        try {
            const personaRef = doc(db, 'persona', id);
            await setDoc(personaRef, updatedPersona);
        }catch (error) {
            console.log(error);
        }
        //router.push('/');
    }

  
    const deletePersona = async(id: string) =>{
        await deleteDoc(doc(db, 'persona', id))
        //router.push('/')
    }
     
  
    return (
      <PersonaContext.Provider
        value={{
          //personas,
          createPersona,
          updatePersona,
          deletePersona,
        }}
      >
        {children}
      </PersonaContext.Provider>
    );
  };
