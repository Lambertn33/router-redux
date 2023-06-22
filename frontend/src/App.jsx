import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthPage from './pages/auth/AuthPage'
import './App.css'

export default function App() {
  const router = createBrowserRouter([
    { path: '/', element: <AuthPage/> }
  ])
  return <RouterProvider router={router} />
}
