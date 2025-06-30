import viteLogo from '/vite.svg'
import './App.css'

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { PaginaInicio } from './PaginaInicio/PaginaInicio';
import { PaginaPrincipal } from './PaginaPrincipal/PaginaPrincipal';
import { PieDePagina } from './PieDePagina/PieDePagina';
import { BarraDeNavegacionApp } from './BarraDeNavegacionApp/BarraDeNavegacionApp';

import { Login } from './login/Login';
import { ValidarCliente } from './Cliente/ValidarCliente';
import { ActualizarCliente } from './Cliente/ActualizarCliente';
import { ConsultarCliente } from './Cliente/ConsultarCliente';
import { EliminarCliente } from './Cliente/EliminarCliente';

import { ValidarEmpleado } from './Personal/ValidarEmpleado';

function App() {

  const [banderaBarra, setBanderaBarra] = useState(true);
  const [banderaPie, setBanderaPie] = useState(true);
  
  return (
    <>
      <BarraDeNavegacionApp 
        banderaBarra = {banderaBarra} />

      <Routes>
        <Route path='/' element={<PaginaInicio
          funcion = {setBanderaBarra} />} />

        <Route path='/Login' element={<Login
          funcion = {setBanderaBarra}
          funcion1 = {setBanderaPie} />} />

        <Route path='/paginaPrincipal' element={<PaginaPrincipal />} />

        <Route path='/crearCliente' element={<ValidarCliente />} />

        <Route path='/actualizarCliente' element={<ActualizarCliente />} />

        <Route path='/consultarCliente' element={<ConsultarCliente />} />

        <Route path='/eliminarCliente' element={<EliminarCliente />} />

        <Route path='/crearEmpleado' element={<ValidarEmpleado />} />
      </Routes>

      <PieDePagina
        banderaPie = {banderaPie} />
    </>
  )
}

export default App
