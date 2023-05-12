import firebaseApp from '../config/firebase'
import React, { createContext, useContext, useState } from 'react'
import {useRouter} from 'next/router'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import { AnyARecord } from 'dns';


interface Anuncio {
    descripcion: string;
    detalles: string;
    id_cliente: string;
    id_pantalla: string;
    info_adicional: string;
    link: string;
    
}

interface AnuncioContextValue {
    //personas: Persona;
    createAnuncio: (newAnuncio: Anuncio) => void;
    updateAnuncio: (id:string, updatedAnuncio: Anuncio) => void;
    deleteAnuncio: (id: string) => void;
}

interface props {
    children : JSX.Element | JSX.Element[];
}

const AnuncioContext = createContext<AnuncioContextValue | undefined>(undefined);

const valorInicial: Anuncio = {
    descripcion: " ",
    detalles: " ",
    id_cliente: " ",
    id_pantalla: " ",
    info_adicional: " ",
    link: " ",
    
}

const db = getFirestore(firebaseApp)
//const router = useRouter()

//const [newAnuncio, setNewAnuncio] = useState<Anuncio>(valorInicial)

//const router = useRouter()

export const useAnuncio= () => {
    const context = useContext(AnuncioContext);
    if (!context) throw new Error("useAnuncio debe usarse con un AnuncioProvider");
    return context;
};

export const AnuncioProvider = ( {children}:props ) => {

    //const [Anuncio, setAnuncio] = useState<Anuncio>(valorInicial);
  
    const createAnuncio = async(newAnuncio: Anuncio) =>{
        try {
            await addDoc(collection(db,'anuncio'),{
                ...newAnuncio
            })
        } catch (error) {
            console.log(error);
        }
        //router.push('/')
    }
  
    const updateAnuncio = async(id: string, updateAnuncio: Anuncio) =>{
        try {
            const anuncioRef = doc(db, 'persona', id);
            await setDoc(anuncioRef, updateAnuncio);
        }catch (error) {
            console.log(error);
        }
        //router.push('/');
    }

  
    const deleteAnuncio = async(id: string) =>{
        await deleteDoc(doc(db, 'anuncio', id))
        //router.push('/')
    }
     
  
    return (
      <AnuncioContext.Provider
        value={{
          //personas,
          createAnuncio,
          updateAnuncio,
          deleteAnuncio,
        }}
      >
        {children}
      </AnuncioContext.Provider>
    );
  };