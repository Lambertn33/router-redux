import { redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

export function checkAuthLoader() {
  const token = localStorage.getItem("token");
  return !token ? redirect("/") : null;
}

export function returnUserFromToken() {
  const token = localStorage.getItem("token");
  const { user } = jwt_decode(token);
  return user.username;
}
