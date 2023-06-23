import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/users-slice";
import authReducers from "./auth/auth-slice";

const store = configureStore({
  reducer: {
    auth: authReducers,
    users: usersReducer,
  },
});

export default store;
