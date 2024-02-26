import { POST_CONTACT, FIND_CONTACT, PATCH_CONTACT, DELETE_CONTACT, ALL_CONTACT } from "./action_types";
import axios from 'axios';

// Acción para obtener todos los contactos
export const allContacts = () => {
    const endpoint = 'http://localhost:3001/contacts';
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            console.log(data.results);
            dispatch({
                type: ALL_CONTACT,
                payload: data.results
            });
        } catch (error) {
            return { error: error.message };
        }
    };
};

// Acción para agregar un contacto
export const postContact = (contact) => {
    const endpoint = 'http://localhost:3001/contacts';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, contact);
            dispatch({
                type: POST_CONTACT,
                payload: data
            });
        } catch (error) {
            return { error: error.message };
        }
    };
};

// Acción para actualizar un contacto
export const patchContact = (id, contact) => {
    console.log(contact);
    console.log(id);
    const endpoint = 'http://localhost:3001/contacts/' + id;
    return async (dispatch) => {
        try {
            const { data } = await axios.patch(endpoint, contact);
            console.log(data);
            dispatch({
                type: PATCH_CONTACT,
                payload: data
            });
        } catch (error) {
            return { error: error.message };
        }
    };
};

// Acción para eliminar un contacto
export const deleteContact = (id) => {
    const endpoint = 'http://localhost:3001/contacts/' + id;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint);
            dispatch({
                type: DELETE_CONTACT,
                payload: data
            });
        } catch (error) {
            return { error: error.message };
        }
    };
};

// Acción para buscar un contacto por email
export const findContact = (email) => {
    // Si el email está vacío, ejecutar la acción allContacts
    if (email === '') {
        return allContacts();
    } else {
        // Si el email no está vacío, realizar la búsqueda por email
        const endpoint = 'http://localhost:3001/contacts/email?email=' + email;
        return async (dispatch) => {
            try {
                const { data } = await axios.get(endpoint);
                console.log(data);
                dispatch({
                    type: FIND_CONTACT,
                    payload: data
                });
            } catch (error) {
                return { error: error.message };
            }
        };
    }
};
