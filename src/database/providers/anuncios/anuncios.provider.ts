import db from "@/database/config/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs,  updateDoc } from "firebase/firestore";

export const getAll = async () => {
  const querySnapshot = await getDocs(collection(db, "anuncios"));
  const anuncios = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return anuncios;
};

const getById = async (id: string) => {
  const docRef = doc(db, "anuncios", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const anuncios = docSnapshot.data();
    return { id, ...anuncios };
  }

  throw new Error("acnuncio not found");
};

const create = async (name:string) => {
  const docRef = await addDoc(collection(db, "anuncios"), { name });
  const id = docRef.id;
  return { id, name };
};

const updateById = async (id:string) => {
  const docRef = doc(db, "anuncios", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await updateDoc(docRef, {id});
    return true;
  }

  throw new Error("anuncio not found");
};

const deleteById = async (id:string) => {
  const docRef = doc(db, "anuncios", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await deleteDoc(docRef);
    return true;
  }

  throw new Error("anuncio not found");
};

export const anuncioProvider = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
