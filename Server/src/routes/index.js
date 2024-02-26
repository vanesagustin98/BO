const express = require('express');
const routes = express.Router();

const { getAllContactsHandler } = require('../controllers/getAllContacts');
const getContactByEmail = require('../controllers/getContactByEmail');
const postContact = require('../controllers/postContact');
const patchContact = require('../controllers/patchContact');
const deleteContact = require('../controllers/deleteContact');
const getContactById = require('../controllers/getContactById');

/**
 * Define las rutas para las operaciones CRUD de contactos.
 */
routes.get('/contacts', getAllContactsHandler);
routes.get('/contacts/email', getContactByEmail);
routes.get('/contacts/:id', getContactById);
routes.post('/contacts/', postContact);
routes.patch('/contacts/:id', patchContact);
routes.delete('/contacts/:id', deleteContact);

module.exports = routes;
