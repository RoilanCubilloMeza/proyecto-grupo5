import db from "@/database/config/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs,  updateDoc } from "firebase/firestore";

const getAll = async () => {
  const querySnapshot = await getDocs(collection(db, "puestos"));
  const puestos = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return puestos;
};

const getById = async (id: string) => {
  const docRef = doc(db, "puestos", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const puesto = docSnapshot.data();
    return { id, ...puesto };
  }

  throw new Error("puesto not found");
};

const create = async (name:string) => {
  const docRef = await addDoc(collection(db, "puestos"), { name });
  const id = docRef.id;
  return { id, name };
};

const updateById = async (id:string, entity:string) => {
  const docRef = doc(db, "puestos", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await updateDoc(docRef, { name: entity });
    return true;
  }

  throw new Error("puesto not found");
};

const deleteById = async (id:string) => {
  const docRef = doc(db, "puestos", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await deleteDoc(docRef);
    return true;
  }

  throw new Error("puesto not found");
};

export const puestoProvider = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};