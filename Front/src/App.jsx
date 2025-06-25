import viteLogo from '/vite.svg'
import './App.css'

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Login } from './Login/Login';
import { PaginaPrincipal } from './PaginaPrincipal/PaginaPrincipal';

function App() {
  
  return (
    <>
      <h1>APLICACIÓN PARA LA GESTIÓN DE VENTAS DE UNA MI PYMES</h1>

      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='/paginaPrincipal' element={<PaginaPrincipal />} />
      </Routes>
    </>
  )
}

export default App
