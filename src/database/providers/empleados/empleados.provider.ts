import db from "@/database/config/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs,  updateDoc } from "firebase/firestore";



const getAll = async () => {
  const querySnapshot = await getDocs(collection(db, "empleados"));
  const empleados = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return empleados;
};

const getById = async (id: string) => {
  const docRef = doc(db, "empleados", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const empleado = docSnapshot.data();
    return { id, ...empleado };
  }

  throw new Error("empleado not found");
};

const create = async (name:string) => {
  const docRef = await addDoc(collection(db, "empleados"), { name });
  const id = docRef.id;
  return { id, name };
};

const updateById = async (id:string) => {
  const docRef = doc(db, "empleados", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await updateDoc(docRef, { id});
    return true;
  }

  throw new Error("empleado not found");
};

const deleteById = async (id:string) => {
  const docRef = doc(db, "empleados", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await deleteDoc(docRef);
    return true;
  }

  throw new Error("cliente not found");
};

export const empleadoProvider = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
