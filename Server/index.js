const server = require('./src/app.js');
require('dotenv').config();
const { PORT } = process.env;

/**
 * Inicia el servidor y lo hace escuchar en el puerto especificado en las variables de entorno.
 */
server.listen(PORT || 3001, () => {
    console.log(`Server listening at port ${PORT || 3001}`);
});
