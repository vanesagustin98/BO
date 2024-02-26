const axios = require("axios");
const { getAllContacts } = require("./getAllContacts"); // Corregido el nombre del módulo requerido
require('dotenv').config();

/**
 * Obtiene un contacto por correo electrónico.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
async function getContactByEmail(req, res) {
    try {
        const { email } = req.query;

        // Validar si se proporciona un correo electrónico válido en los parámetros de la solicitud
        if (!email || email.trim() === '') {
            return res.status(400).json({ error: 'Se requiere un correo electrónico válido para buscar el contacto.' });
        }

        const allContacts = await getAllContacts();

        const filteredContacts = allContacts.results.filter(cont => cont.properties.email.toLowerCase().includes(email.toLowerCase()));

        if (filteredContacts.length > 0) {
            return res.status(200).json(filteredContacts);
        } else {
            return res.status(404).send('No se encontraron contactos con el correo electrónico proporcionado.');
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = getContactByEmail;
