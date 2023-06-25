import { createSlice } from "@reduxjs/toolkit";
import {handleFetchUsers, handleFetchSingleUser, handleFetchUserPosts} from "../../services/users/users.services";

const initialState = {
  users: [],
  user: {},
  userPosts: [],
  isLoadingUsers: false,
  isLoadingUser: false,
  isLoadingPosts: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.isLoadingUsers = true;
    },

    fetchUserStart(state) {
      state.isLoadingUser = true;
    },

    fetchPostsStart(state) {
      state.isLoadingPosts = true;
    },

    fetchUsersSuccess(state, action) {
      state.isLoadingUsers = false;
      state.users = action.payload.users;
    },

    fetchSingleUserSuccess(state, action) {
      state.isLoadingUser = false;
      state.user = action.payload.user;
    },

    fetchUserPostsSuccess(state, action) {
      state.isLoadingPosts = false;
      state.userPosts = action.payload.posts;
    }
  },
});

export default usersSlice.reducer;

export const usersAction = usersSlice.actions;

export const fetchUsers = async (dispatch) => {
  dispatch(usersAction.fetchUsersStart());
  const response = await handleFetchUsers();
  dispatch(usersAction.fetchUsersSuccess(response.data));
};

export const fetchUser = (userId) => async(dispatch) => {
  dispatch(usersAction.fetchUserStart());
  const response = await handleFetchSingleUser(userId);
  dispatch(usersAction.fetchSingleUserSuccess(response.data));
}

export const fetchUserPosts = (userId) => async(dispatch) => {
  dispatch(usersAction.fetchPostsStart())
  const response = await handleFetchUserPosts(userId);
  dispatch(usersAction.fetchUserPostsSuccess(response.data));
}
