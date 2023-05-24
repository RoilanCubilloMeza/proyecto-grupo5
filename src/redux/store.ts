import { configureStore } from "@reduxjs/toolkit"; 
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { usuarioReducer } from "./reducers/usuariosReducer";

export const ApplicationStore = configureStore({
  reducer: {
 usuario: usuarioReducer
  }, 
});

export type RootState = ReturnType<typeof ApplicationStore.getState>;
export default ApplicationStore;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector