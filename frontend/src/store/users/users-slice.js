import { createSlice } from "@reduxjs/toolkit";
import handlerFetchUsers from "../../services/users/users.services";

const initialState = {
  users: [],
  isLoading: true,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.isLoading = true;
    },
    fetchUsersSuccess(state, action) {
      state.isLoading = false;
      state.users = action.payload.users;
    },
  },
});

export default usersSlice.reducer;

export const usersAction = usersSlice.actions;

export const fetchUsers = async (dispatch) => {
  dispatch(usersAction.fetchUsersStart());
  const response = await handlerFetchUsers();
  dispatch(usersAction.fetchUsersSuccess(response.data));
};
