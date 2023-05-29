import db from "@/database/config/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs,  updateDoc } from "firebase/firestore";

const getAll = async () => {
  const querySnapshot = await getDocs(collection(db, "pantallas"));
  const pantallas = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return pantallas;
};

const getById = async (id: string) => {
  const docRef = doc(db, "pantallas", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const pantalla = docSnapshot.data();
    return { id, ...pantalla };
  }

  throw new Error("pantalla not found");
};

const create = async (companyName:string,link:string,router:string,departureTime:string,images:string,price:string) => {
  const docRef = await addDoc(collection(db, "pantallas"), { companyName,link,router,price,departureTime,images });
  const id = docRef.id;
  return { id, companyName };
};

const updateById = async (id:string) => {
  const docRef = doc(db, "pantallas", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await updateDoc(docRef, {id});
    return true;
  }

  throw new Error("pantalla not found");
};

const deleteById = async (id:string) => {
  const docRef = doc(db, "pantallas", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    await deleteDoc(docRef);
    return true;
  }

  throw new Error("pantalla not found");
};

export const pantallasProvider = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};