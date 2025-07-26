// Componente contenedor para los componentes que permiten crear un pedido.
import '../Formatos/ActualizarCliente.css';

import { InfoPedido } from './InfoPedido';

export const CrearPedido = () => {

  return (
    <div className='contenedorActualizaciones'>
      <section className='container-fluid'>
        <p>Ingrese la información del cliente</p>
        <InfoPedido />
      </section>  
    </div>
  )
}
