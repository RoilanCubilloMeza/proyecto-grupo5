import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface Anuncio {
  id: number;
  tittle: string;
  url: string;
}

interface AnunciosState {
  anuncios: Anuncio[];
  loading: boolean;
  error: string | null;
}

const initialState: AnunciosState = {
  anuncios: [],
  loading: false,
  error: null,
};

export const getAnuncios = createAsyncThunk(
  "anuncios/getAnuncios",
  async () => {
    const response = await axios.get("http://localhost:3000/api/anuncios");
    return response.data;
  }
);

export const createAnuncios = createAsyncThunk( "anuncios/createAnuncios", async (newAnuncio: Anuncio) => {
  const response = await axios.post('http://localhost:3000/api/anuncios', newAnuncio);
  return response.data;
});
export const updateAnuncios = createAsyncThunk(
  "anuncios/updateAnuncios",
  async (anuncio: Anuncio) => {
    const response = await axios.put(
      `http://localhost:3000/api/anuncios/${anuncio.id}`,
      anuncio
    );
    return response.data;
  }
);

export const deleteAnuncios = createAsyncThunk(
  "anuncios/deleteAnuncios",
  async (anuncioId: number) => {
    await axios.delete(`http://localhost:3000/api/anuncios/${anuncioId}`);
    return anuncioId;
  }
);

export const AnunciosSlice = createSlice({
  name: "anuncios",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAnuncios.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAnuncios.fulfilled, (state, action) => {
        state.anuncios = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAnuncios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch users";
      })
      .addCase(createAnuncios.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAnuncios.fulfilled, (state, action) => {
        state.anuncios.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createAnuncios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to create user";
      })
      .addCase(updateAnuncios.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAnuncios.fulfilled, (state, action) => {
        const updateAnuncio = action.payload;
        const index = state.anuncios.findIndex(
          (anuncio) => anuncio.id === updateAnuncio.id
        );
        if (index !== -1) {
          state.anuncios[index] = updateAnuncio;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(updateAnuncios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to update user";
      })
      .addCase(deleteAnuncios.fulfilled, (state, action) => {
        const deletedAnuncioId = action.payload;
        state.anuncios = state.anuncios.filter(
          (anuncio) => anuncio.id !== deletedAnuncioId
        );
        state.loading = false;
        state.error = null;
      });
  },
});

export const selectAnuncio = (state: RootState) => state.anuncios.anuncios;
export const selectLoading = (state: RootState) => state.anuncios.loading;
export const selectError = (state: RootState) => state.anuncios.error;

export default AnunciosSlice.reducer;
