// Importación de los tipos de acción
import { POST_CONTACT, FIND_CONTACT, DEATIL_CONTACT, PATCH_CONTACT, DELETE_CONTACT, ALL_CONTACT } from "./action_types";

// Estado inicial del reducer
const initialState = {
    allContacts: [],    // Lista de todos los contactos
    contactDetail: [],  // Detalle de un contacto específico
};

// Reducer para gestionar el estado de los contactos
const reducer = (state = initialState, action) => {
    // Manejo de los distintos tipos de acción
    switch (action.type) {
        case ALL_CONTACT:
            // Caso para actualizar la lista de todos los contactos
            return { ...state, allContacts: action.payload };

        case POST_CONTACT:
            // Caso para agregar un nuevo contacto
            return { ...state }; // El estado no cambia, no se necesita ninguna acción adicional

        case PATCH_CONTACT:
            // Caso para actualizar un contacto existente
            return { ...state }; // El estado no cambia, no se necesita ninguna acción adicional

        case DELETE_CONTACT:
            // Caso para eliminar un contacto
            return { ...state }; // El estado no cambia, no se necesita ninguna acción adicional

        case FIND_CONTACT:
            // Caso para buscar un contacto por email
            return { ...state, allContacts: action.payload }; // Actualiza la lista de contactos con los resultados de la búsqueda

        default:
            // Por defecto, retorna el estado sin cambios
            return state;
    }
};

// Exporta el reducer para ser utilizado en la aplicación
export default reducer;
