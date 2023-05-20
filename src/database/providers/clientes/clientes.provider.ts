import db from "@/database/config/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs,  updateDoc } from "firebase/firestore";

const getAll = async () => {
  const querySnapshot = await getDocs(collection(db, "clientes"));
  const authors = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return authors;
};

const getById = async (id: string) => {
  const docRef = doc(db, "clientes", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const cliente = docSnapshot.data();
    return { id, ...cliente };
  }

  throw new Error("Cliente not found");
};

const create = async (name:string) => {
  const docRef = await addDoc(collection(db, "clientes"), { name });
  const id = docRef.id;
  return { id, name };
};

const updateById = async (id:string) => {
  const docRef = doc(db, "clientes", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await updateDoc(docRef, { id });
    return true;
  }

  throw new Error("clientes not found");
};

const deleteById = async (id:string) => {
  const docRef = doc(db, "clientes", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await deleteDoc(docRef);
    return true;
  }

  throw new Error("cliente not found");
};

export const clienteProvider = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};