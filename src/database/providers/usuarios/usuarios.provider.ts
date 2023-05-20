import db from "@/database/config/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs,  updateDoc } from "firebase/firestore";

const getAll = async () => {
  const querySnapshot = await getDocs(collection(db, "usuarios"));
  const usuarios = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return usuarios;
};

const getById = async (id: string) => {
  const docRef = doc(db, "usuarios", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const usuarios = docSnapshot.data();
    return {id, ...usuarios };
  }

  throw new Error("usuarios not found");
};

const create = async (name:string) => {
  const docRef = await addDoc(collection(db, "usuarios"), { name });
  const id = docRef.id;
  return { id, name };
};

const updateById = async (id:string) => {
  const docRef = doc(db, "usuarios", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await updateDoc(docRef, { id });
    return true;
  }

  throw new Error("usuarios not found");
};

const deleteById = async (id:string) => {
  const docRef = doc(db, "usuarios", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await deleteDoc(docRef);
    return true;
  }

  throw new Error("usuarios not found");
};

export const usuarioProvider = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};