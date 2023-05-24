// actions/usuarioActions.ts

import { Usuario } from "@/root/types/usuarios/usuarios.types";


export const crearUsuario = (usuario: Usuario) => ({
  type: "CREAR_USUARIO",
  payload: usuario,
});

export const limpiarFormulario = () => ({
  type: "LIMPIAR_FORMULARIO",
});
