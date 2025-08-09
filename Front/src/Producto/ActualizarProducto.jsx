// Componente contenedor de los componentes para las actualizaciones.

import '../Formatos/ActualizarCliente.css';

import { ActualizarCategoria } from './ActualizarProducto/ActualizarCategoria';
import { ActualizarDescripcion } from './ActualizarProducto/ActualizarDescripcion';
import { ActualizarExistencias } from './ActualizarProducto/ActualizarExistencias';
import { ActualizarNombre } from './ActualizarProducto/ActualizarNombre';
import { ActualizarPrecio } from './ActualizarProducto/ActualizarPrecio';
import { ActualizarReferencia } from './ActualizarProducto/ActualizarReferencia';
import { ActualizarDescuento } from './ActualizarProducto/ActualizarDescuento';

export const ActualizarProducto = () => {

  return (
    <div className='contenedorActualizaciones'>

      <p> Ingrese los datos en el campo correspondiente </p>
      <section className='container-fluid formatoActualizar'>
        <ActualizarNombre />
        <ActualizarReferencia />
        <ActualizarPrecio />
      </section>
      <section className='container-fluid formatoActualizar'>
        <ActualizarCategoria />
        <ActualizarExistencias />
        <ActualizarDescripcion />
      </section>
      <section className='container-fluid formatoActualizar'>
        <ActualizarDescuento />
      </section>
    </div>
   
  )
}
