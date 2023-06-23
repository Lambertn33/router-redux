import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage, { action as authAction } from "./pages/auth/AuthPage";
import UsersPage from "./pages/users/UsersPage";
import Home from "./pages/Home";
import { checkAuthLoader } from "./util/auth";
import Error from "./pages/Error";
import MainLayout from "./components/MainLayout";
import "./App.css";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <AuthPage />, action: authAction },
        { path: "/about", element: <Home /> },
        {
          path: "/",
          loader: checkAuthLoader,
          children: [
            { path: "/users", element: <UsersPage /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
