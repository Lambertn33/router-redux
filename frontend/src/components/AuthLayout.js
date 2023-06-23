import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { returnUserFromToken } from "../util/auth";

export default function AuthLayout() {
  const user = returnUserFromToken();
  return (
    <>
      <Navbar user = {user} />
      <Outlet />
    </>
  );
}
