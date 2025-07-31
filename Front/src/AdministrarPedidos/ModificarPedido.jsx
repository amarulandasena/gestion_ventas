// Componente contenedor de los componentes para las actualizaciones.
import '../Formatos/ActualizarCliente.css';

import { ActualizarComentarios } from './ActualizarClientePedido/ActualizarComentarios';
import { ActualizarDireccionEnv } from './ActualizarClientePedido/ActualizarDireccionEnv';
import { ActualizarEstado } from './ActualizarClientePedido/ActualizarEstado';
import { ActualizarFechaEntrega } from './ActualizarClientePedido/ActualizarFechaEntrega';
import { ActualizarFechaPedido } from './ActualizarClientePedido/ActualizarFechaPedido';
import { ActualizarFormaPago } from './ActualizarClientePedido/ActualizarFormaPago';
import { ActualizarNitPedido } from './ActualizarClientePedido/ActualizarNitPedido';
import { ActualizarNumeroId } from './ActualizarClientePedido/ActualizarNumeroId';

import { ActualizarIdProducto } from './ActualizarClientePedido/ActualizarIdProducto';
import { ActualizarNombreProducto } from './ActualizarClientePedido/ActualizarNombreProducto';
import { ActualizarCantidadPedido } from './ActualizarClientePedido/ActualizarCantidadPedido';
import { ActualizarPrecio } from './ActualizarClientePedido/ActualizarPrecio';
import { EliminarProductoPedido } from './ActualizarClientePedido/EliminarProductoPedido';

export const ModificarPedido = () => {
  return (
    <div className='contenedorActualizaciones'>
      <p> Ingrese los datos en el campo correspondiente </p>
      <p> Campos para modificar la información del cliente</p>
      <section className='container-fluid formatoActualizar'>
        <ActualizarNitPedido />
        <ActualizarNumeroId />
        <ActualizarFechaPedido />
      </section>
      <section className='container-fluid formatoActualizar'>
        <ActualizarDireccionEnv />
        <ActualizarFormaPago />
        <ActualizarEstado />
      </section>
      <section className='container-fluid formatoActualizar'>
        <ActualizarFechaEntrega />
        <ActualizarComentarios />
      </section>

      <p>Campos para modificar información de los productos</p>
      <section className='container-fluid formatoActualizar'>
        <ActualizarNombreProducto />
        <ActualizarCantidadPedido />
        <ActualizarPrecio />
      </section>
      <section className='container-fluid formatoActualizar'>
        <EliminarProductoPedido />
      </section>

    </div>
  )
}
