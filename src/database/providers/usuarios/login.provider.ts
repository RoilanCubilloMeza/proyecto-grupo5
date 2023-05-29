import { Usuario } from "@/root/types/usuarios/usuarios.types";
import {   db  } from "@/database/config/firebase";
import {
  addDoc,
  collection,
  
} from "firebase/firestore";

export const register = async (name: string, email: string, rol: "client",password: string) => {
  const docRef = await addDoc(collection(db, "usuarios"), { name, email, rol, password });
  const id = docRef.id;
  return { id, name, email, rol , password};
}
export const loginProvider = {
  register,
};