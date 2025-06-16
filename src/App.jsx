import React from 'react'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    
    </>
  )
}
