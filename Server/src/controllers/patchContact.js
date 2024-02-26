const axios = require("axios");
require('dotenv').config();

/**
 * Actualiza un contacto utilizando el método PATCH de la API.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
async function patchContact(req, res) {
    try {
        const { API_KEY, API_URL } = process.env;

        // Validar si se han configurado correctamente las variables de entorno
        if (!API_KEY || !API_URL) {
            return res.status(500).json({ error: 'Las variables de entorno API_KEY y API_URL no están configuradas correctamente.' });
        }

        // Validar si se proporciona un ID válido en los parámetros de la solicitud
        if (!req.params.id || req.params.id.trim() === '') {
            return res.status(400).json({ error: 'Se requiere un ID válido para actualizar el contacto.' });
        }

        const response = await axios.patch(`${API_URL}/${req.params.id}`, req.body, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = patchContact;
