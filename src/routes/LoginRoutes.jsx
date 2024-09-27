import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login, Register } from '../pages'

function LoginRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/sign-up' element={<Register/>}/>
    </Routes>
  )
}

export default LoginRoutes
