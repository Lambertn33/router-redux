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
  MDBBtn,
} from "mdb-react-ui-kit";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth/auth-slice";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    dispatch(authActions.logout());
    navigate("/");
  };
  return (
    <MDBNavbar expand="lg" dark bgColor="primary" className={styles.nav}>
      <MDBContainer fluid>
        <MDBNavbarBrand className={styles.navbarBrand}>
          {isAuthenticated ? <>{user}</> : <>Welcome</>}
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
            {!isAuthenticated && (
              <MDBNavbarItem>
                <NavLink to="/">Authenticate</NavLink>
              </MDBNavbarItem>
            )}
            <MDBNavbarItem>
              <NavLink to="/about">About us</NavLink>
            </MDBNavbarItem>
            {isAuthenticated && (
              <MDBNavbarItem>
                <NavLink to="/users">Users List</NavLink>
              </MDBNavbarItem>
            )}
          </MDBNavbarNav>
          {isAuthenticated && (
            <MDBBtn color="success" onClick={logout}>
              Logout
            </MDBBtn>
          )}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
