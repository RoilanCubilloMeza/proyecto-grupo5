import db from "@/database/config/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs,  updateDoc } from "firebase/firestore";

const getAll = async () => {
  const querySnapshot = await getDocs(collection(db, "rutas"));
  const rutas = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return rutas;
};

const getById = async (id: string) => {
  const docRef = doc(db, "rutas", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const rutas = docSnapshot.data();
    return { id, ...rutas };
  }

  throw new Error("ruta not found");
};

const create = async (name:string) => {
  const docRef = await addDoc(collection(db, "rutas"), { name });
  const id = docRef.id;
  return { id, name };
};

const updateById = async (id:string, entity:string) => {
  const docRef = doc(db, "rutas", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await updateDoc(docRef, { name: entity });
    return true;
  }

  throw new Error("ruta not found");
};

const deleteById = async (id:string) => {
  const docRef = doc(db, "rutas", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await deleteDoc(docRef);
    return true;
  }

  throw new Error("ruta not found");
};

export const rutaProvider = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};