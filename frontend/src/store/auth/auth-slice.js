import { createSlice } from "@reduxjs/toolkit";
import handlerAuthenticate from "../../services/auth/auth.services";

const authData = {
  isAuthenticated: false,
  token: "",
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authData,
  reducers: {
    authStart(state) {
      state.loading = true;
      state.error = null;
    },
    authSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    authFailure(state, action) {
      state.loading = false;
      state.error = action.payload.message;
      state.isAuthenticated = false;
    },
  },
});

export const { authStart, authSuccess, authFailure, logout } =
  authSlice.actions;

export const authenticateFunction = (credentials, mode) => async (dispatch) => {
  dispatch(authStart());
  try {
    const data = await handlerAuthenticate(credentials, mode);
    dispatch(authSuccess(data.token));
  } catch (error) {
    dispatch(authFailure(error.message));
  }
};
