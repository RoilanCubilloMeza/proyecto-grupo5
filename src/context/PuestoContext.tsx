import firebaseApp from '../config/firebase'
import React, { createContext, useContext, useState } from 'react'
import {useRouter} from 'next/router'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import { AnyARecord } from 'dns';


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

const PuestoContext = createContext<PuestoContextValue | undefined>(undefined);

const valorInicial: Puesto = {
    nombre: " ",
    detalles: " ",
  
    
}

const db = getFirestore(firebaseApp)
//const router = useRouter()

//const [newPuesto, setNewPuesto] = useState<Puesto>(valorInicial)

//const router = useRouter()

export const usePuesto= () => {
    const context = useContext(PuestoContext);
    if (!context) throw new Error("usePuesto debe usarse con un PuestoProvider");
    return context;
};

export const PuestoProvider = ( {children}:props ) => {

    //const [Puesto, setPuesto] = useState<Puesto>(valorInicial);
  
    const createPuesto= async(newPuesto: Puesto) =>{
        try {
            await addDoc(collection(db,'puesto'),{
                ...newPuesto
            })
        } catch (error) {
            console.log(error);
        }
        //router.push('/')
    }
  
    const updatePuesto = async(id: string, updatePuesto: Puesto) =>{
        try {
            const puestoRef = doc(db, 'persona', id);
            await setDoc(puestoRef, updatePuesto);
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
      <PuestoContext.Provider
        value={{
          //personas,
          createPuesto,
          updatePuesto,
          deletePuesto,
        }}
      >
        {children}
      </PuestoContext.Provider>
    );
  };