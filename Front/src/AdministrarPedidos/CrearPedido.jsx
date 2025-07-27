// Componente contenedor para los componentes que permiten crear un pedido.
import '../Formatos/ActualizarCliente.css';

import { InfoPedido } from './InfoPedido';
import { InfoProductosPedido } from './InfoProductosPedido';

export const CrearPedido = () => {

  return (
    <div className='contenedorActualizaciones'>
      <section className='container-fluid'>
        <p>Ingrese la información del cliente</p>
        <InfoPedido />

        <p>Ingrese la informacíon del producto</p>
        <InfoProductosPedido />
      </section>  
    </div>
  )
}
