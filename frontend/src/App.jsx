import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage, { action as authAction } from "./pages/auth/AuthPage";
import UsersPage from "./pages/users/UsersPage";
import "./App.css";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <AuthPage />, action: authAction },
    { path: "/users", element: <UsersPage /> },
  ]);
  return <RouterProvider router={router} />;
}
