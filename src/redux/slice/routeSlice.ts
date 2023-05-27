import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface Ruta {
    id: number;
    router: string;
    price: string;
    departureTime:string
  }

interface RutasState {
  rutas: Ruta[];
  loading: boolean;
  error: string | null;
}

const initialState: RutasState = {
    rutas: [],
  loading: false,
  error: null,
};

export const getRutas = createAsyncThunk(
  "rutas/getRutas",
  async () => {
    const response = await axios.get("http://localhost:3000/api/rutas");
    return response.data;
  }
);

export const createRutas = createAsyncThunk('rutas/createPantalla', async (newUser: User) => {
  const response = await axios.post('http://localhost:3000/api/rutas', newUser);
  return response.data;
});

export const updateRutas = createAsyncThunk(
  "rutas/updateRutas",
  async (ruta: Ruta) => {
    const response = await axios.put(
      `http://localhost:3000/api/rutas/${ruta.id}`,
      ruta
    );
    return response.data;
  }
);

export const deleteRutas = createAsyncThunk(
  "rutas/deleteRutas",
  async (rutaId: number) => {
    await axios.delete(`http://localhost:3000/api/rutas/${rutaId}`);
    return rutaId;
  }
);



export const RutasSlice = createSlice({
  name: "rutas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRutas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRutas.fulfilled, (state, action) => {
        state.rutas = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getRutas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch users";
      })
      .addCase(createRutas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRutas.fulfilled, (state, action) => {
        state.rutas.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createRutas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to create user";
      })
      .addCase(updateRutas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRutas.fulfilled, (state, action) => {
        const updateRutas = action.payload;
        const index = state.rutas.findIndex(
          (ruta) => ruta.id === updateRutas.id
        );
        if (index !== -1) {
          state.rutas[index] = updateRutas;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(updateRutas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to update user";
      })
      .addCase(deleteRutas.fulfilled, (state, action) => {
        const deletedRutaId = action.payload;
        state.rutas = state.rutas.filter(
          (ruta) => ruta.id !== deletedRutaId
        );
        state.loading = false;
        state.error = null;
      });
  },
});

export const selectRuta = (state: RootState) => state.rutas.rutas;
export const selectLoading = (state: RootState) => state.rutas.loading;
export const selectError = (state: RootState) => state.rutas.error;

export default RutasSlice.reducer;
