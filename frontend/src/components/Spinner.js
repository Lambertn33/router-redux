import { MDBSpinner } from "mdb-react-ui-kit";
import React from "react";

export default function Spinner() {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <MDBSpinner role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    </div>
  );
}
