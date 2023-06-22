import React from "react";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";

export default function Card({ children }) {
  return (
    <MDBCard>
      <MDBCardBody>{children}</MDBCardBody>
    </MDBCard>
  );
}
