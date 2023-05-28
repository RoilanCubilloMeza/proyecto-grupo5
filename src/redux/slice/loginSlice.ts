import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface Login {
  id: number;
  name: string;
  email: string;
  rol: string
  password:string;
}

interface UsersState {
  users: Login[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};


export const createUser = createAsyncThunk('users/createUser', async (newUser: Login) => {
  const response = await axios.post('http://localhost:3000/api/usuarios', newUser);
  return response.data;
});



export const loginSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to create user';
      })
     
  },
});

export const selectUsers = (state: RootState) => state.users.users;
export const selectLoading = (state: RootState) => state.users.loading;
export const selectError = (state: RootState) => state.users.error;

export default loginSlice.reducer;
