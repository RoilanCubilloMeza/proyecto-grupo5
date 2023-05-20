import db from "@/database/config/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs,  updateDoc } from "firebase/firestore";

const getAll = async () => {
  const querySnapshot = await getDocs(collection(db, "horarios"));
  const horarios = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return horarios;
};

const getById = async (id: string) => {
  const docRef = doc(db, "horarios", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const horario = docSnapshot.data();
    return { id, ...horario };
  }

  throw new Error("horario not found");
};

const create = async (name:string) => {
  const docRef = await addDoc(collection(db, "horarios"), { name });
  const id = docRef.id;
  return { id, name };
};

const updateById = async (id:string, entity:string) => {
  const docRef = doc(db, "horarios", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await updateDoc(docRef, { name: entity });
    return true;
  }

  throw new Error("horario not found");
};

const deleteById = async (id:string) => {
  const docRef = doc(db, "horarios", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await deleteDoc(docRef);
    return true;
  }

  throw new Error("horarios not found");
};

export const horarioProvider = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
