import firebaseApp from '../config/firebase'
import React, { createContext, useContext, useState } from 'react'
import {useRouter} from 'next/router'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'


interface Puesto {
    nombre: string;
    detalles: string;
}

interface PuestoContextValue {
    //personas: Persona;
    createPuesto: (newPuesto: Puesto) => void;
    updatePuesto: (id:string, updatedPuesto: Puesto) => void;
    deletePuesto: (id: string) => void;
}

interface props {
    children : JSX.Element | JSX.Element[];
}

const EmpleadoContext = createContext<PuestoContextValue | undefined>(undefined);

const valorInicial = {
    nombre: " ",
    detalles: " ",
}

const db = getFirestore(firebaseApp)
//const router = useRouter()

//const [newPersona, setNewPersona] = useState<Persona>(valorInicial)

//const router = useRouter()

export const usePuesto = () => {
    const context = useContext(PuestoContext);
    if (!context) throw new Error("usePuesto debe usarse con un PuestoProvider");
    return context;
};

export const EmpleadoProvider = ( {children}:props ) => {

    //const [personas, setPersonas] = useState<Persona>(valorInicial);
  
    const createPuesto = async(newEmpleado: Puesto) =>{
        try {
            await addDoc(collection(db,'puesto'),{
                ...newPuesto
            })
        } catch (error) {
            console.log(error);
        }
        //router.push('/')
    }
  
    const updatePuesto = async(id: string, updatedPuesto: Puesto) =>{
        try {
            const puestodRef = doc(db, 'puesto', id);
            await setDoc(puestodRef, updatedPuesto);
        }catch (error) {
            console.log(error);
        }
        //router.push('/');
    }

  
    const deletePuesto = async(id: string) =>{
        await deleteDoc(doc(db, 'puesto', id))
        //router.push('/')
    }
     
  
    return (
      <EmpleadoContext.Provider
        value={{
          //personas,
          createPuesto,
          updatePuesto,
          deletePuesto,
        }}
      >
        {children}
      </EmpleadoContext.Provider>
    );
  };