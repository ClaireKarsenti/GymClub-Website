import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  user: null | string;
  token: null | string;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (
      state,
      action: PayloadAction<{ user: string; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});


export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
