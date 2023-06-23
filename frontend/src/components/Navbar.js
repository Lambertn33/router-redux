import React from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <MDBNavbar expand="lg" dark bgColor="primary" className={styles.nav}>
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <></>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar>
          <MDBNavbarNav className={`${styles.navbar} me-auto mb-2 mb-lg-0`}>
            <MDBNavbarItem>
                <NavLink to="/home">Home</NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <NavLink to="/home/users">Users List</NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
