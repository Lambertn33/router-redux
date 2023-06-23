import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import styles from "./UserItem.module.css";
import { MDBCardTitle, MDBCardText, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import UserPosts from "../pages/users/UserPosts";

export default function UserItem({ user }) {
  const [scrollableModal, setScrollableModal] = useState(false);
  return (
    <>
      <Card>
        <MDBCardTitle>{user.name}</MDBCardTitle>
        <div className={styles.item}>
          <MDBIcon icon="envelope" />
          <MDBCardText>{user.email}</MDBCardText>
        </div>
        <div className={styles.item}>
          <MDBIcon icon="phone" />
          <MDBCardText>{user.phone}</MDBCardText>
        </div>
        <div className={styles.item}>
          <MDBIcon icon="map-marker" />
          <MDBCardText>
            {user.address.street} - {user.address.city}
          </MDBCardText>
        </div>
        <div className={styles.actions}>
          <Link to="">View Details</Link>
          <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>
            View posts
          </MDBBtn>
        </div>
      </Card>
      { scrollableModal && <UserPosts scrollableModal={scrollableModal} setScrollableModal={setScrollableModal} /> }
    </>
  );
}
