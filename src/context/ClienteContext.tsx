import firebaseApp from '../config/firebase'
import React, { createContext, useContext, useState } from 'react'
import {useRouter} from 'next/router'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import { AnyARecord } from 'dns';

interface Cliente {
    detalles: string;
    email: string;
    nombre: string;
    pagina: string;
    telefono: string;
}

interface ClienteContextValue {
    //personas: Persona;
    createCliente: (newCliente: Cliente) => void;
    updateCliente: (id:string, updatedAnuncio: Cliente) => void;
    deleteCliente: (id: string) => void;
}

interface props {
    children : JSX.Element | JSX.Element[];
}

const ClienteContext = createContext<ClienteContextValue | undefined>(undefined);

const valorInicial = {
    detalles: "",
    email: "",
    nombre: "",
    pagina: "",
    telefono: "",
}

const db = getFirestore(firebaseApp)
//const router = useRouter()

//const [newCliente, setNewCliente] = useState<Cliente>(valorInicial)

//const router = useRouter()

export const useCliente = () => {
    const context = useContext(ClienteContext);
    if (!context) throw new Error("useCliente debe usarse con un ClienteProvider");
    return context;
};

export const ClienteProvider = ( {children}:props ) => {

    //const [cliente, setCliente] = useState<Cliente>(valorInicial);
  
    const createCliente = async(newCliente: Cliente) =>{
        try {
            await addDoc(collection(db,'cliente'),{
                ...newCliente
            })
        } catch (error) {
            console.log(error);
        }
        //router.push('/')
    }
  
    const updateCliente = async(id: string, updatedClienete: Cliente) =>{
        try {
            const anuncioRef = doc(db, 'persona', id);
            await setDoc(anuncioRef, updateCliente);
        }catch (error) {
            console.log(error);
        }
        //router.push('/');
    }

  
    const deleteCliente = async(id: string) =>{
        await deleteDoc(doc(db, 'cliente', id))
        //router.push('/')
    }
     
  
    return (
      <ClienteContext.Provider
        value={{
          //personas,
          createCliente,
          updateCliente,
          deleteCliente,
        }}
      >
        {children}
      </ClienteContext.Provider>
    );
  };
