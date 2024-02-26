/**
 * Función para validar los datos del formulario.
 * @param {object} data - Los datos del formulario a validar.
 * @returns {object} - Objeto con los errores encontrados.
 */
export default function validate(data) {
    // Expresión regular para validar el formato de email
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    // Objeto para almacenar los errores encontrados
    const errors = {};

    // Validación del campo firstname
    if (!/^[A-Za-z]+$/.test(data.firstname)) errors.firstname = 'Este campo no contiene números';
    if (!data.firstname) errors.firstname = 'Ingrese un valor';

    // Validación del campo lastname
    if (!/^[A-Za-z]+$/.test(data.lastname)) errors.lastname = 'Este campo no contiene números';
    if (!data.lastname) errors.lastname = 'Ingrese un valor';

    // Validación del campo email
    if (!data.email) errors.email = 'Ingrese un valor';
    if (!regexEmail.test(data.email)) errors.email = 'Ingrese un Email valido';

    return errors; // Devuelve el objeto con los errores encontrados
}
