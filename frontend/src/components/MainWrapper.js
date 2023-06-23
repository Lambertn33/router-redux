import React from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";

export default function MainWrapper({ children }) {
  return (
    <MDBContainer>
      <MDBRow>{children}</MDBRow>
    </MDBContainer>
  );
}
