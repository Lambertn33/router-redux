import React from 'react'
import MainWrapper from '../components/MainWrapper'
import { useSelector } from 'react-redux/es/hooks/useSelector'

export default function Home() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return (
    <MainWrapper>
        <h2>Home</h2>
        <div>
            <p>{isAuthenticated ? 'Authentication exists' : 'No Auth'}</p>
           { isAuthenticated && <p>Authenticated user: {user}</p> }
        </div>
    </MainWrapper>
  )
}
