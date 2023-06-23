import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import AuthPage, { action as authAction } from "./pages/auth/AuthPage";
import UsersPage from "./pages/users/UsersPage";
import Home from "./pages/Home";
import { checkAuthLoader } from "./util/auth";
import { action as logoutAction } from "./components/Logout";
import "./App.css";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <AuthPage />, action: authAction },
    { path: "/home", element: <AuthLayout />, loader: checkAuthLoader, children: [
      {path: "/home", element: <Home /> },
      {path: "/home/users", element: <UsersPage /> },
      { path: "/home/logout", action: logoutAction }
      
    ] },
  ]);
  return <RouterProvider router={router} />;
}
