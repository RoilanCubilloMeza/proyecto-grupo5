// reducers/usuarioReducer.ts

import { Usuario } from "@/root/types/usuarios/usuarios.types";


interface UsuarioState {
  usuario: Usuario | null;
}

const initialState: UsuarioState = {
  usuario: null,
};

type UsuarioAction = {
  type: string;
  payload: Usuario | null;
};

export const usuarioReducer = (state = initialState, action: UsuarioAction): UsuarioState => {
  switch (action.type) {
    case "CREAR_USUARIO":
      return {
        usuario: action.payload,
      };
    case "LIMPIAR_FORMULARIO":
      return {
        usuario: null,
      };
    default:
      return state;
  }
};
