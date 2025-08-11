// Archivo de configuración de Express.

// Importamos los paquetes que necesitamos.
const express = require('express');
const cors = require('cors');
const multer = require('multer');

const rutaLogin = require('../rutas/RutaLogin.js');
const rutaClientes = require('../rutas/RutasClientes.js');
const rutaActualizarClientes = require('../rutas/RutasActualizarClientes.js');
const rutaPersonal = require('../rutas/RutasEmpleados.js');
const rutaActualizarPersonal = require('../rutas/RutasActualizarEmpleados.js');
const rutaProductos = require('../rutas/RutasProductos.js');
const rutaActualizarProductos = require('../rutas/RutasActualizarProductos.js');
const rutaHistorial = require('../rutas/RutasHistorial.js');
const rutaPedidos = require('../rutas/RutasPedidos.js');
const rutaProductosPedido = require('../rutas/RutasProductosPedido.js');
const rutaActualizarClientePedido = require('../rutas/RutasActualizarClientePedido.js');
const rutaActualizarProductoPedido = require('../rutas/RutasActualizarProductoPedido.js');
const rutaReservas = require('../rutas/RutasReserva.js');
const rutaPrecios = require('../rutas/RutasPrecios.js');
const rutaPromociones = require('../rutas/RutasPromociones.js');
const rutaActualizarPromocion = require('../rutas/RutasActualizarPromocion.js');

// Instanciamos el servidor.
const app = express();

// Damos formato JSON a la información que recibimos del servidor.
app.use(express.json());
app.use(express.urlencoded( { extended: true}));
app.use(cors());

// Configuramos multer para recibir archivos en memoria
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


// Creamos los endpoint.
app.use('/login', rutaLogin);
app.use('/cliente', rutaClientes);
app.use('/actualizarClientes', rutaActualizarClientes);
app.use('/empleado', rutaPersonal);
app.use('/actualizarEmpleados', rutaActualizarPersonal);
app.use('/producto', rutaProductos);
app.use('/actualizarProductos', rutaActualizarProductos);
app.use('/historial', rutaHistorial);
app.use('/pedido', rutaPedidos);
app.use('/productosPedido', rutaProductosPedido);
app.use('/actualizarPedido', rutaActualizarClientePedido);
app.use('/actualizarProductoPedido', rutaActualizarProductoPedido);
app.use('/reserva', rutaReservas);
app.use('/precios', rutaPrecios);
app.use('/promociones', rutaPromociones);
app.use('/actualizarPromociones', rutaActualizarPromocion);

// Exportamos la app.
module.exports = app;

