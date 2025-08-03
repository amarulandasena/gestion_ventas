// Componente contenedor para los componentes que permiten crear una reserva.
import '../Formatos/ActualizarCliente.css';

import { InfoReserva } from './InfoReserva';
import { InfoProductosReserva } from './InfoProductosReserva';

export const CrearReserva = () => {

  return (
    <div className='contenedorActualizaciones'>
      <section className='container-fluid'>
        <p>Ingrese la información del cliente</p>
        <InfoReserva />
        
        <p>Ingrese la informacíon del producto</p>
        <InfoProductosReserva />
      </section>
    </div>
  )
}

