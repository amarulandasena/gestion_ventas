// Importamos la configuración de express y la conexión a la BBDD.
const database = require('./database.js');
const app = require('./app.js');

const main = () => {

  database.connect((err) => {
    if (err) {
      throw err;
    } else {
      console.log('BBDD conectada');
    }
  })

  // Crear una constante para almacenar el número del puerto.
  const PUERTO = process.env.PUERTO || 3001;

  app.listen(PUERTO, () => {
    console.log(`Servidor encendido y escuchando en el puerto ${PUERTO}...`)
  })
}

main();