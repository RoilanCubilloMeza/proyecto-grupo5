import { Usuario } from "@/root/types/usuarios/usuarios.types";
import {   db  } from "@/database/config/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";





export const getAll = async () => {
  const querySnapshot = await getDocs(collection(db, "usuarios"));
  const usuarios = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return usuarios;
};

const getById = async (id: string) => {
  const docRef = doc(db, "usuarios", id);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const usuarios = docSnapshot.data();
    return { id, ...usuarios };
  }
  throw new Error("usuarios not found");
};

export const create = async (name: string, email: string, rol: string,) => {
  const docRef = await addDoc(collection(db, "usuarios"), { name, email, rol });
  const id = docRef.id;
  return { id, name, email, rol };
};

const updateById = async (id: string, updatedData: Partial<Usuario>) => {
  const docRef = doc(db, "usuarios", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await updateDoc(docRef, updatedData);
    return true;
  }

  throw new Error("Usuario not found");
};

const deleteById = async (id: string) => {
  const docRef = doc(db, "usuarios", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await deleteDoc(docRef);
    return true;
  }

  throw new Error("Usuario not found");
};
export const usuarioProvider = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
