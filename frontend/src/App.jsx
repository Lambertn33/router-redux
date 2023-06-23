import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage, { action as authAction } from "./pages/auth/AuthPage";
import AuthLayout from "./components/AuthLayout";
import UsersPage from "./pages/users/UsersPage";
import { checkAuthLoader } from "./util/checkAuth";
import "./App.css";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <AuthPage />, action: authAction },
    { path: "/users", element: <AuthLayout />, loader: checkAuthLoader, children: [
      { path: '/users', element: <UsersPage /> }
    ] },
  ]);
  return <RouterProvider router={router} />;
}
