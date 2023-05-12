import firebaseApp from '../config/firebase'
import React, { createContext, useContext, useState } from 'react'
import {useRouter} from 'next/router'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import { AnyARecord } from 'dns';


interface Rutas {
    destino: string;
    monto: string;
    origen: string;
   
    
}

interface RutasContextValue {
    //personas: Persona;
    createRutas: (newRutas: Rutas) => void;
    updateRutas: (id:string, updatedRutas: Rutas) => void;
    deleteRutas: (id: string) => void;
}

interface props {
    children : JSX.Element | JSX.Element[];
}

const RutasContext = createContext<RutasContextValue | undefined>(undefined);

const valorInicial: Rutas = {
    destino: " ",
    monto: " ",
    origen:"",
  
    
}

const db = getFirestore(firebaseApp)
//const router = useRouter()

//const [newRutas, setNewRutas] = useState<Rutas>(valorInicial)

//const router = useRouter()

export const useRutas= () => {
    const context = useContext(RutasContext);
    if (!context) throw new Error("useRutas debe usarse con un RutasProvider");
    return context;
};

export const RutasProvider = ( {children}:props ) => {

    //const [Rutas, setRutas] = useState<Rutas>(valorInicial);
  
    const createRutas = async(newRutas: Rutas) =>{
        try {
            await addDoc(collection(db,'rutas'),{
                ...newRutas
            })
        } catch (error) {
            console.log(error);
        }
        //router.push('/')
    }
  
    const updateRutas = async(id: string, updateRutas: Rutas) =>{
        try {
            const RutasRef = doc(db, 'rutas', id);
            await setDoc(RutasRef, updateRutas);
        }catch (error) {
            console.log(error);
        }
        //router.push('/');
    }

  
    const deleteRutas = async(id: string) =>{
        await deleteDoc(doc(db, 'rutas', id))
        //router.push('/')
    }
     
  
    return (
      <RutasContext.Provider
        value={{
          //personas,
          createRutas,
          updateRutas,
          deleteRutas,
        }}
      >
        {children}
      </RutasContext.Provider>
    );
  };