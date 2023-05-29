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

export const createAnuncio = async (tittle: string, url:string) => {
  const docRef = await addDoc(collection(db, "anuncios"), { tittle, url});
  const id = docRef.id;
  return { id, tittle, url};
};

const updateByIdAnuncio = async (id: string, tittle: string, url:string) => {
  const docRef = doc(db, "anuncios", id);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    await updateDoc(docRef, { tittle: tittle, url: url});
    return true;
  }

  throw new Error("Usuario no encontrado");
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
