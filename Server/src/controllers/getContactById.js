const axios = require("axios");
require('dotenv').config();

/**
 * Obtiene un contacto por su ID utilizando la API.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @param {string} req.params.id - ID del contacto que se desea obtener.
 */
async function getContactById(req, res) {
    try {
        // Validar si se proporciona un ID válido en los parámetros de la solicitud
        if (!req.params.id || req.params.id.trim() === '') {
            return res.status(400).json({ error: 'Se requiere un ID válido para obtener el contacto.' });
        }

        const { API_KEY, API_URL } = process.env;

        // Validar si se han configurado correctamente las variables de entorno
        if (!API_KEY || !API_URL) {
            return res.status(500).json({ error: 'Las variables de entorno API_KEY y API_URL no están configuradas correctamente.' });
        }

        // Realizar la solicitud para obtener el contacto por su ID a la API
        const response = await axios.get(`${API_URL}/${req.params.id}`, {
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

module.exports = getContactById;
