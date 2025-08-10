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
import { CrearHistorial } from './Cliente/CrearHistorial';
import { ActualizarHistorial } from './Cliente/ActualizarHistorial';
import { ConsultarHistorial } from './Cliente/ConsultarHistorial';

import { ValidarEmpleado } from './Personal/ValidarEmpleado';
import { ActualizarPersonal } from './Personal/ActualizarPersonal';
import { ConsultarEmpleado } from './Personal/ConsultarEmpleado';
import { EliminarEmpleado } from './Personal/EliminarEmpleado';

import { ValidarProducto } from './Producto/ValidarProducto';
import { ActualizarProducto } from './Producto/ActualizarProducto';
import { ConsultarProducto } from './Producto/ConsultarProducto';
import { EliminarProducto } from './Producto/EliminarProducto';

import { CrearPedido } from './AdministrarPedidos/CrearPedido';
import { ModificarPedido } from './AdministrarPedidos/ModificarPedido';
import { ConsultarPedidos } from './AdministrarPedidos/ConsultarPedidos';
import { ConsultarPedidosCliente } from './AdministrarPedidos/ConsultarPedidosCliente';
import { EliminarPedido } from './AdministrarPedidos/EliminarPedido';
import { RechazarPedido } from './GestionarPedidos/RechazarPedido';

import { CrearReserva } from './GestionarPedidos/CrearReserva';
import { ConsultarReserva } from './GestionarPedidos/ConsultarReserva';
import { EliminarReserva } from './GestionarPedidos/EliminarReserva';
import { DespacharPedido } from './GestionarPedidos/DespacharPedido';

import { ConsultarPrecioCod } from './Comerciales/ConsultarPrecioCod';
import { ConsultarPrecioNom } from './Comerciales/ConsultarPrecioNom';
import { ConsultarDescuentos } from './Comerciales/ConsultarDescuentos';

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

        <Route path='/actualizarEmpleado' element={<ActualizarPersonal />} />

        <Route path='/consultarEmpleado' element={< ConsultarEmpleado />} />

        <Route path='/eliminarEmpleado' element={<EliminarEmpleado />} />

        <Route path='/crearProducto' element={<ValidarProducto />} />

        <Route path='/actualizarProducto' element={<ActualizarProducto />} />

        <Route path='/consultarProducto' element ={<ConsultarProducto />} />

        <Route path='/eliminarProducto' element={<EliminarProducto />} />

        <Route path='/crearHistorial' element={<CrearHistorial />} />

        <Route path='/modificarHistorial' element={<ActualizarHistorial />} />

        <Route path='/consultarHistorial' element={<ConsultarHistorial />} />

        <Route path='/crearPedido' element={<CrearPedido />} />

        <Route path='/modificarPedido' element={<ModificarPedido />} />

        <Route path='/consultarPedidos' element={<ConsultarPedidos />} />

        <Route path='/consultarPedidosCliente' element={<ConsultarPedidosCliente />} />

        <Route path='/eliminarPedido' element={<EliminarPedido />} />

        <Route path='/rechazarPedido' element={<RechazarPedido />} />

        <Route path='/crearReserva' element={<CrearReserva />} />

        <Route path='/consultarReserva' element={<ConsultarReserva />} />

        <Route path='/eliminarReserva' element={<EliminarReserva />} />

        <Route path='/despacharPedido' element={<DespacharPedido />} />

        <Route path='/consultarPrecioCodigo' element={<ConsultarPrecioCod />} />

        <Route path='/consultarPrecioNombre' element={<ConsultarPrecioNom />} />

        <Route path='/consultarDescuentos' element={<ConsultarDescuentos />} />
      </Routes>

      <PieDePagina
        banderaPie = {banderaPie} />
    </>
  )
}

export default App
