import React, { useEffect } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPosts } from "../../store/users/users-slice";
import Spinner from "../../components/Spinner";

export default function UserPosts({
  user,
  scrollableModal,
  setScrollableModal,
}) {

  const { isLoadingPosts, userPosts } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserPosts(user.id));
  }, [dispatch, user.id]);

  return (
    <>
      <MDBModal
        show={scrollableModal}
        setShow={setScrollableModal}
        tabIndex="-1"
      >
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{user.name} posts</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              {isLoadingPosts ? (
                <Spinner />
              ) : (
                userPosts.map((post) => (
                  <>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                  </>
                ))
              )}
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                color="secondary"
                onClick={() => setScrollableModal(!setScrollableModal)}
              >
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
