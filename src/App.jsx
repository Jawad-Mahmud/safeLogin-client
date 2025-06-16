import React from 'react'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Register />} />
    </Routes>
    
    </>
  )
}
