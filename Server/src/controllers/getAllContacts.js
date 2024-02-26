const axios = require("axios");
require('dotenv').config();

/**
 * Obtiene todos los contactos de la API.
 * @returns {Promise<Object>} - Un objeto con los datos de todos los contactos.
 */
async function getAllContacts() {
    try {
        const { API_KEY, API_URL } = process.env;

        // Validar si se han configurado correctamente las variables de entorno
        if (!API_KEY || !API_URL) {
            throw new Error('Las variables de entorno API_KEY y API_URL no están configuradas correctamente.');
        }

        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });
        
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener todos los contactos: ${error.message}`);
    }
}

/**
 * Maneja la solicitud para obtener todos los contactos.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
async function getAllContactsHandler(req, res) {
    try {
        const contacts = await getAllContacts();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getAllContactsHandler, getAllContacts };