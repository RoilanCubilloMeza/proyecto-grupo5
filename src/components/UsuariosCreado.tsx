// components/UsuarioCreado.tsx

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const UsuarioCreado: React.FC = () => {
  const usuario = useSelector((state: RootState) => state.usuario.usuario);

  if (!usuario) {
    return <div>No se ha creado ningún usuario</div>;
  }

  return (
    <div>
      <h3>Usuario Creado:</h3>
      <p>Nombre: {usuario.username}</p>
      <p>Email: {usuario.email}</p>
    </div>
  );
};

export default UsuarioCreado;
