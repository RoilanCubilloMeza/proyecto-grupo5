import { Usuario } from "@/root/types/usuarios/usuarios.types";
import {  db } from "@/database/config/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";




export const getAllAnuncio = async () => {
  const querySnapshot = await getDocs(collection(db, "anuncios"));
  const anuncios = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return anuncios;
};

const getByIdAnuncio = async (id: string) => {
  const docRef = doc(db, "anuncios", id);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const anuncios = docSnapshot.data();
    return { id, ...anuncios };
  }
  throw new Error("usuarios not found");
};

export const createAnuncio = async (name: string) => {
  const docRef = await addDoc(collection(db, "anuncios"), { name });
  const id = docRef.id;
  return { id, name };
};

const updateByIdAnuncio = async (id: string, updatedData: Partial<Usuario>) => {
  const docRef = doc(db, "anuncios", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await updateDoc(docRef, updatedData);
    return true;
  }

  throw new Error("Usuario not found");
};

const deleteByIdAnuncio = async (id: string) => {
  const docRef = doc(db, "anuncios", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await deleteDoc(docRef);
    return true;
  }

  throw new Error("Usuario not found");
};

export const anuncioProvider = {
  getAllAnuncio,
  getByIdAnuncio,
  createAnuncio,
  updateByIdAnuncio,
  deleteByIdAnuncio,
};
