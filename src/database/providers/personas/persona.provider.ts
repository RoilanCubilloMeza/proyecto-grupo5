import db from "@/database/config/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs,  updateDoc } from "firebase/firestore";

const getAll = async () => {
  const querySnapshot = await getDocs(collection(db, "personas"));
  const personas = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return personas;
};

const getById = async (id: string) => {
  const docRef = doc(db, "personas", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const persona = docSnapshot.data();
    return { id, ...persona };
  }

  throw new Error("persona not found");
};

const create = async (name:string) => {
  const docRef = await addDoc(collection(db, "personas"), { name });
  const id = docRef.id;
  return { id, name };
};

const updateById = async (id:string, entity:string) => {
  const docRef = doc(db, "personas", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await updateDoc(docRef, { name: entity });
    return true;
  }

  throw new Error("persona not found");
};

const deleteById = async (id:string) => {
  const docRef = doc(db, "personas", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await deleteDoc(docRef);
    return true;
  }

  throw new Error("persona not found");
};

export const personaProvider = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};