import viteLogo from '/vite.svg'
import './App.css'

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Login } from './Login/Login';
import { PaginaPrincipal } from './PaginaPrincipal/PaginaPrincipal';
import { PieDePagina } from './PieDePagina/PieDePagina';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Login
          nombreEmpresa='nombreEmpresa.png' />} />

        <Route path='/paginaPrincipal' element={<PaginaPrincipal />} />
      </Routes>

      <PieDePagina />
    </>
  )
}

export default App
