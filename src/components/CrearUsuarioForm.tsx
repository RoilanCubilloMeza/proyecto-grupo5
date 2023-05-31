// components/CrearUsuarioForm.tsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Usuario } from "@/root/types/usuarios/usuarios.types";
import { crearUsuario, limpiarFormulario } from "@/redux/actions/usuariosActions";

const CrearUsuarioForm: React.FC = () => {
  const dispatch = useDispatch();
  const[id,setid]=useState("")
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usuario: Usuario = {
        username,
        email, 
        password,
        id
    };

    dispatch(crearUsuario(usuario));
    setusername("");
    setEmail("");
  };

  const handleLimpiarFormulario = () => {
    dispatch(limpiarFormulario());
    setusername("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={username} onChange={(e) => setusername(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Crear Usuario</button>
      <button type="button" onClick={handleLimpiarFormulario}>
        Limpiar Formulario 
        
      </button>
      
    </form>
    
  );
  console.log(CrearUsuarioForm)//TODO: remove al logs
};

export default CrearUsuarioForm;
