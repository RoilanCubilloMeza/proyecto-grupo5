import firebaseApp from '../config/firebase'
import React, { createContext, useContext, useState } from 'react'
import {useRouter} from 'next/router'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'


interface Empleado {
    id_persona: string;
    id_puesto: string;
    id_usuario: string;
}

interface EmpleadoContextValue {
    //personas: Persona;
    createEmpleado: (newEmpleado: Empleado) => void;
    updateEmpleado: (id:string, updatedUsuario: Empleado) => void;
    deleteEmpleado: (id: string) => void;
}

interface props {
    children : JSX.Element | JSX.Element[];
}

const EmpleadoContext = createContext<EmpleadoContextValue | undefined>(undefined);

const valorInicial = {
    id_persona: " ",
    id_puesto: " ",
    id_usuario: " ",
}

const db = getFirestore(firebaseApp)
//const router = useRouter()

//const [newPersona, setNewPersona] = useState<Persona>(valorInicial)

//const router = useRouter()

export const useEmpleado = () => {
    const context = useContext(EmpleadoContext);
    if (!context) throw new Error("useEmpleado debe usarse con un EmpleadoProvider");
    return context;
};

export const EmpleadoProvider = ( {children}:props ) => {

    //const [personas, setPersonas] = useState<Persona>(valorInicial);
  
    const createEmpleado = async(newEmpleado: Empleado) =>{
        try {
            await addDoc(collection(db,'empleado'),{
                ...newEmpleado
            })
        } catch (error) {
            console.log(error);
        }
        //router.push('/')
    }
  
    const updateEmpleado = async(id: string, updatedEmpleado: Empleado) =>{
        try {
            const empleadoRef = doc(db, 'empleado', id);
            await setDoc(empleadoRef, updatedEmpleado);
        }catch (error) {
            console.log(error);
        }
        //router.push('/');
    }

  
    const deleteEmpleado = async(id: string) =>{
        await deleteDoc(doc(db, 'empleado', id))
        //router.push('/')
    }
     
  
    return (
      <EmpleadoContext.Provider
        value={{
          //personas,
          createEmpleado,
          updateEmpleado,
          deleteEmpleado,
        }}
      >
        {children}
      </EmpleadoContext.Provider>
    );
  };