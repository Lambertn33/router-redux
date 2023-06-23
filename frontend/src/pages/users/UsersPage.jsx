import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../store/users/users-slice";

import UserItem from "../../components/UserItem";
import MainLayout from "../../components/MainLayout";
import { MDBCol, MDBSpinner } from "mdb-react-ui-kit";

export default function UsersPage() {
  const { isLoading, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers);
  }, [dispatch]);
  return (
    <MainLayout>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <MDBSpinner role="status">
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        </div>
      ) : (
        users.map((user) => (
          <MDBCol md="4 pb-4">
            <UserItem user={user} />
          </MDBCol>
        ))
      )}
    </MainLayout>
  );
}
