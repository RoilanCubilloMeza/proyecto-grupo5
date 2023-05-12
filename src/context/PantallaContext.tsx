import firebaseApp from '../config/firebase'
import React, { createContext, useContext, useState } from 'react'
import {useRouter} from 'next/router'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import { AnyARecord } from 'dns';

interface Pantalla {
    numero: string;
    posicion: string;
   
}

interface PantallaContextValue {
    //personas: Persona;
    createPantalla: (newPantalla: Pantalla) => void;
    updatePantalla: (id:string, updatedPantalla: Pantalla) => void;
    deletePantalla: (id: string) => void;
}

interface props {
    children : JSX.Element | JSX.Element[];
}

const PantallaContext = createContext<PantallaContextValue | undefined>(undefined);

const valorInicial = {
   numero:"",
   posicion:"",
}

const db = getFirestore(firebaseApp)
//const router = useRouter()

//const [newPantalla, setNewPantalla = useState<Pantalla>(valorInicial)

//const router = useRouter()

export const usePantalla = () => {
    const context = useContext(PantallaContext);
    if (!context) throw new Error("usePantalla debe usarse con un PantallaProvider");
    return context;
};

export const PantallaProvider = ( {children}:props ) => {

    //const [Pantalla, setPantalla] = useState<Pantalla>(valorInicial);
  
    const createPantalla = async(newPantalla: Pantalla) =>{
        try {
            await addDoc(collection(db,'persona'),{
                ...newPantalla
            })
        } catch (error) {
            console.log(error);
        }
        //router.push('/')
    }
  
    const updatePantalla = async(id: string, updatedPantalla: Pantalla) =>{
        try {
            const pantallaRef = doc(db, 'persona', id);
            await setDoc(pantallaRef, updatedPantalla);
        }catch (error) {
            console.log(error);
        }
        //router.push('/');
    }

  
    const deletePantalla = async(id: string) =>{
        await deleteDoc(doc(db, 'pantalla', id))
        //router.push('/')
    }
     
  
    return (
      <PantallaContext.Provider
        value={{
          //personas,
          createPantalla,
          updatePantalla,
          deletePantalla,
        }}
      >
        {children}
      </PantallaContext.Provider>
    );
  };
