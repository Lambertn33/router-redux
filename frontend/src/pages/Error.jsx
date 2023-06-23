import React from 'react'
import MainLayout from '../components/MainLayout'
import Navbar from '../components/Navbar'

export default function Error() {
  return (
    <MainLayout>
        <Navbar />
        <h2>Ooops. there is an error</h2>
        <p>The page you are trying to view does not exist</p>
    </MainLayout>
  )
}
