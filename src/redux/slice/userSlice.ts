import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface User {
  id: number;
  name: string;
  email: string;
  rol: string
}

interface UsersState {
  token: any;//TODO: changes all any 
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  token: undefined
};
//TODO: Move all thunks to another files, check errors , manage async cycle
export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const response = await axios.get('http://localhost:3000/api/usuarios');
  return response.data;
});

export const createUser1 = createAsyncThunk('users/createUser1', async (newUser: User) => {
  const response = await axios.post('http://localhost:3000/api/usuarios', newUser);
  return response.data;
});

export const updateUser = createAsyncThunk('users/updateUser', async (user: User) => {
  const response = await axios.put(`http://localhost:3000/api/usuarios/${user.id}`, user);
  return response.data;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (userId: number) => {
  await axios.delete(`http://localhost:3000/api/usuarios/${userId}`);
  return userId;
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch users';
      })
      .addCase(createUser1.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser1.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createUser1.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to create user';
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        const index = state.users.findIndex((user) => user.id === updatedUser.id);
        if (index !== -1) {
          state.users[index] = updatedUser;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to update user';
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const deletedUserId = action.payload;
        state.users = state.users.filter((user) => user.id !== deletedUserId);
        state.loading = false;
        state.error = null;
      });
  },
});

export const selectUsers = (state: RootState) => state.users.users;
export const selectLoading = (state: RootState) => state.users.loading;
export const selectError = (state: RootState) => state.users.error;

export default usersSlice.reducer;
