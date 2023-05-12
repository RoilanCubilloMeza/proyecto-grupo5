import firebaseApp from '../config/firebase'
import React, { createContext, useContext, useState } from 'react'
import {useRouter} from 'next/router'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'


interface Usuario {
    nombre: string;
    password: string;
    tipo: string;
}

interface UsuarioContextValue {
    //personas: Persona;
    createUsuario: (newUsuario: Usuario) => void;
    updateUsuario: (id:string, updatedUsuario: Usuario) => void;
    deleteUsuario: (id: string) => void;
}

interface props {
    children : JSX.Element | JSX.Element[];
}

const UsuarioContext = createContext<UsuarioContextValue | undefined>(undefined);

const valorInicial = {
    nombre: " ",
    password: " ",
    tipo: " ",
}

const db = getFirestore(firebaseApp)
//const router = useRouter()

//const [newPersona, setNewPersona] = useState<Persona>(valorInicial)

//const router = useRouter()

export const useUsuario = () => {
    const context = useContext(UsuarioContext);
    if (!context) throw new Error("useUsuario debe usarse con un UsuarioProvider");
    return context;
};

export const UsuarioProvider = ( {children}:props ) => {

    //const [personas, setPersonas] = useState<Persona>(valorInicial);
  
    const createUsuario = async(newUsuario: Usuario) =>{
        try {
            await addDoc(collection(db,'usuarios'),{
                ...newUsuario
            })
        } catch (error) {
            console.log(error);
        }
        //router.push('/')
    }
  
    const updateUsuario = async(id: string, updatedUsuario: Usuario) =>{
        try {
            const usuarioRef = doc(db, 'usuarios', id);
            await setDoc(usuarioRef, updatedUsuario);
        }catch (error) {
            console.log(error);
        }
        //router.push('/');
    }

  
    const deleteUsuario = async(id: string) =>{
        await deleteDoc(doc(db, 'usuarios', id))
        //router.push('/')
    }
     
  
    return (
      <UsuarioContext.Provider
        value={{
          //personas,
          createUsuario,
          updateUsuario,
          deleteUsuario,
        }}
      >
        {children}
      </UsuarioContext.Provider>
    );
  };