import firebaseApp from '../config/firebase'
import React, { createContext, useContext, useState } from 'react'
import {useRouter} from 'next/router'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import { AnyARecord } from 'dns';


interface Horario {
    id_ruta: string;
    salida: string;

}

interface HorarioContextValue {
    //personas: Persona;
    createHorario: (newHorario: Horario) => void;
    updateHorario: (id:string, updatedHorario: Horario) => void;
    deleteHorario: (id: string) => void;
}

interface props {
    children : JSX.Element | JSX.Element[];
}

const HorarioContext = createContext<HorarioContextValue | undefined>(undefined);

const valorInicial: Horario = {
    id_ruta: " ",
    salida: " ",

}

const db = getFirestore(firebaseApp)
//const router = useRouter()

//const [newHorario, setNewHorario] = useState<Horario>(valorInicial)

//const router = useRouter()

export const useHorario= () => {
    const context = useContext(HorarioContext);
    if (!context) throw new Error("useHorario debe usarse con un HorarioProvider");
    return context;
};

export const HorarioProvider = ( {children}:props ) => {

    //const [Horario, setHorario] = useState<Horario>(valorInicial);
  
    const createHorario = async(newHorario: Horario) =>{
        try {
            await addDoc(collection(db,'horario'),{
                ...newHorario
            })
        } catch (error) {
            console.log(error);
        }
        //router.push('/')
    }
  
    const updateHorario = async(id: string, updateHorario: Horario) =>{
        try {
            const HorarioRef = doc(db, 'horario', id);
            await setDoc(HorarioRef, updateHorario);
        }catch (error) {
            console.log(error);
        }
        //router.push('/');
    }

  
    const deleteHorario = async(id: string) =>{
        await deleteDoc(doc(db, 'horario', id))
        //router.push('/')
    }
     
  
    return (
      <HorarioContext.Provider
        value={{
          //personas,
          createHorario,
          updateHorario,
          deleteHorario,
        }}
      >
        {children}
      </HorarioContext.Provider>
    );
  };