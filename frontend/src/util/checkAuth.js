import { redirect } from "react-router-dom";

export function checkAuthLoader() {
  const token = localStorage.getItem("token");
  return !token ? redirect("/") : null;
}
