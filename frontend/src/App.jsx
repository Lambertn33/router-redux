import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage, { action as authAction } from "./pages/auth/AuthPage";
import "./App.css";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <AuthPage />, action: authAction },
  ]);
  return <RouterProvider router={router} />;
}
