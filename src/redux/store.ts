import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usersReducer from "./slice/userSlice"
import anunciosReducer from "./slice/AdvertisementSlice"
import { useDispatch } from 'react-redux';
export const store = configureStore({
  reducer: {
    users: usersReducer,
    anuncios: anunciosReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>>
  export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();


  
;
