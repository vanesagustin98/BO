const axios = require("axios");
require('dotenv').config();

/**
 * Crea un nuevo contacto utilizando la API.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @param {Object} req.body - Datos del nuevo contacto a crear.
 */
async function createContact(req, res) {
    try {
        // Validar si se proporciona un cuerpo de solicitud válido
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: 'Se requieren datos válidos para crear un nuevo contacto.' });
        }

        const { API_KEY, API_URL } = process.env;

        // Validar si se han configurado correctamente las variables de entorno
        if (!API_KEY || !API_URL) {
            return res.status(500).json({ error: 'Las variables de entorno API_KEY y API_URL no están configuradas correctamente.' });
        }

        // Realizar la solicitud de creación de contacto a la API
        const response = await axios.post(API_URL, req.body, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });

        // Responder con los datos proporcionados por la API
        res.json(response.data);
    } catch (error) {
        // Manejar errores de la API o de la solicitud
        if (error.response && error.response.status) {
            // Si la API devuelve un código de estado, responder con ese código y el mensaje de error proporcionado por la API
            return res.status(error.response.status).json({ error: error.response.data.message });
        } else {
            // Si ocurre un error desconocido, responder con un estado 500 y un mensaje de error genérico
            return res.status(500).json({ error: 'Se produjo un error al procesar la solicitud.' });
        }
    }
}

module.exports = createContact;
