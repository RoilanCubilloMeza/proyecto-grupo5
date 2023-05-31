import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface Pantalla{
    id: number;
   companyName: string;
   link: string;
   router:string;
   price:string;
   departureTime:string;
   images: string;
  
  }

interface PantallasState {
  pantallas: Pantalla[];
  loading: boolean;
  error: string | null;
}

const initialState: PantallasState = {
  pantallas: [],
  loading: false,
  error: null,
};
//TODO: Move all thunks to another files, check errors , manage async cycle
export const getPantallas = createAsyncThunk('pantallas/getPantallas', async () => {
  const response = await axios.get('http://localhost:3000/api/pantallas');
  return response.data;
});

export const createPantalla = createAsyncThunk('pantallas/createPantalla', async (newPantalla: Pantalla) => {
  const response = await axios.post('http://localhost:3000/api/pantallas', newPantalla);
  return response.data;
});

export const updatePantalla = createAsyncThunk('pantallas/updatedPantalla', async (pantalla: Pantalla) => {
  const response = await axios.put(`http://localhost:3000/api/pantallas/${pantalla.id}`, pantalla);
  return response.data;
});

export const deletePantalla = createAsyncThunk('pantallas/deletedPantalla', async (pantallaId: number) => {
  await axios.delete(`http://localhost:3000/api/pantallas/${pantallaId}`);
  return pantallaId;
});

export const pantallaSlice = createSlice({
  name: 'pantallas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPantallas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPantallas.fulfilled, (state, action) => {
        state.pantallas = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getPantallas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch users';
      })
      .addCase(createPantalla.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPantalla.fulfilled, (state, action) => {
        state.pantallas.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createPantalla.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to create user';
      })
      .addCase(updatePantalla.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePantalla.fulfilled, (state, action) => {
        const updatedPantalla = action.payload;
        const index = state.pantallas.findIndex((pantalla) => pantalla.id === updatedPantalla.id);
        if (index !== -1) {
          state.pantallas[index] = updatedPantalla;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(updatePantalla.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to update user';
      })
      .addCase(deletePantalla.fulfilled, (state, action) => {
        const deletedPantallaId = action.payload;
        state.pantallas = state.pantallas.filter((pantalla) => pantalla.id !== deletedPantallaId);
        state.loading = false;
        state.error = null;
      });
  },
});

export const selectPantallas = (state: RootState) => state.pantallas.pantallas;
export const selectLoading = (state: RootState) => state.pantallas.loading;
export const selectError = (state: RootState) => state.pantallas.error;

export default pantallaSlice.reducer;
