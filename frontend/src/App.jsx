import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage, { action as authAction } from "./pages/auth/AuthPage";
import AuthLayout from "./components/AuthLayout";
import UsersPage from "./pages/users/UsersPage";
import { checkAuthLoader } from "./util/auth";
import "./App.css";
import Home from "./pages/Home";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <AuthPage />, action: authAction },
    { path: "/home", element: <AuthLayout />, loader: checkAuthLoader, children: [
      {path: "/home", element: <Home /> },
      {path: "/home/users", element: <UsersPage /> },
      
    ] },
  ]);
  return <RouterProvider router={router} />;
}
