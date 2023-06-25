import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../store/users/users-slice";

import UserItem from "../../components/UserItem";
import Spinner from "../../components/Spinner";
import { MDBCol } from "mdb-react-ui-kit";
import MainWrapper from "../../components/MainWrapper";

import { authActions } from "../../store/auth/auth-slice";
import { returnUserFromToken } from "../../util/auth";

export default function UsersPage() {
  const { isLoadingUsers, users } = useSelector((state) => state.users);
  const authenticatedUser = returnUserFromToken();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.login({ user: authenticatedUser }))
    if (users.length === 0) {
      dispatch(fetchUsers);
    }
  }, [dispatch, users.length, authenticatedUser]);
  return (
    <MainWrapper>
      {isLoadingUsers ? (
          <Spinner />
      ) : (
        <React.Fragment>
          <h4 className="text-center mt-4">Users List</h4>
          {users.map((user) => (
            <MDBCol md="4 pb-4 pt-4" key={user.id}>
              <UserItem user={user} />
            </MDBCol>
          ))}
        </React.Fragment>
      )}
    </MainWrapper>
  );
}
