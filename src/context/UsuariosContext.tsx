import firebaseApp from '../config/firebase'
import React, { createContext, useContext, useState } from 'react'
import {useRouter} from 'next/router'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import { AnyARecord } from 'dns';


interface Usuarios {
    nombre: string;
    pass: string;
    tipo: string;
   
    
}

interface UsuariosContextValue {
    //personas: Persona;
    createUsuarios: (newUsuarios: Usuarios) => void;
    updateUsuarios: (id:string, updatedUsuarios: Usuarios) => void;
    deleteUsuarios: (id: string) => void;
}

interface props {
    children : JSX.Element | JSX.Element[];
}

const UsuariosContext = createContext<UsuariosContextValue | undefined>(undefined);

const valorInicial: Usuarios = {
    nombre: " ",
    pass: " ",
    tipo:"",
  
    
}

const db = getFirestore(firebaseApp)
//const router = useRouter()

//const [newUsuarios, setNewUsuarios] = useState<Usuarios>(valorInicial)

//const router = useRouter()

export const useUsuarios= () => {
    const context = useContext(UsuariosContext);
    if (!context) throw new Error("useUsuarios debe usarse con un UsuariosProvider");
    return context;
};

export const UsuariosProvider = ( {children}:props ) => {

    //const [Usuarios, setUsuarios] = useState<Usuarios>(valorInicial);
  
    const createUsuarios = async(newUsuarios: Usuarios) =>{
        try {
            await addDoc(collection(db,'usuarios'),{
                ...newUsuarios
            })
        } catch (error) {
            console.log(error);
        }
        //router.push('/')
    }
  
    const updateUsuarios = async(id: string, updateUsuarios: Usuarios) =>{
        try {
            const UsuariosRef = doc(db, 'usuarios', id);
            await setDoc(UsuariosRef, updateUsuarios);
        }catch (error) {
            console.log(error);
        }
        //router.push('/');
    }

  
    const deleteUsuarios = async(id: string) =>{
        await deleteDoc(doc(db, 'usuarios', id))
        //router.push('/')
    }
     
  
    return (
      <UsuariosContext.Provider
        value={{
          //personas,
          createUsuarios,
          updateUsuarios,
          deleteUsuarios,
        }}
      >
        {children}
      </UsuariosContext.Provider>
    );
  };