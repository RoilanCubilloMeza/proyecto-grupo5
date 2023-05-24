import { RootState } from "../store";

export const SelectUsuarios = (state: RootState)=>
state.usuarioStore.usuarios;
