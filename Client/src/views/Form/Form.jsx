import { useDispatch } from 'react-redux';
import { postContact } from '../../Redux/actions';
import { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Form.module.css';
import validate from './validation';

const Form = () => {
    // Estado local para manejar los errores de validación
    const [errors, setErrors] = useState({});
    // Estado local para mostrar una alerta de éxito
    const [successAlert, setSuccessAlert] = useState(false);
    // Estado local para almacenar los datos del contacto
    const [contactInput, setContactInput] = useState({});
    // Función para despachar la acción de Redux
    const dispatch = useDispatch();

    // Función para manejar el envío del formulario
    function handleSubmit(event) {
        event.preventDefault();
        // Obtiene los datos del formulario
        const formData = new FormData(event.target);
        const contact = Object.fromEntries(formData.entries());
        // Valida los datos del contacto
        const validationErrors = validate(contact);
        setErrors({}); // Limpia los errores
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); // Actualiza los errores
            return;
        }

        // Crea un nuevo objeto con la estructura esperada por la acción de Redux
        const newContactInput = {
            properties:{
                firstname: contact.firstname,
                lastname: contact.lastname,
                email: contact.email,
            }
        };

        // Despacha la acción de Redux para agregar un nuevo contacto
        dispatch(postContact(newContactInput));

        // Actualiza los datos del contacto y muestra la alerta de éxito
        setContactInput((prevContactInput) => ({
            ...prevContactInput,
            ...newContactInput,
        }));
        event.target.reset(); // Limpia el formulario
        setSuccessAlert(true); // Muestra la alerta de éxito

        // Después de 5 segundos, oculta la alerta de éxito
        setTimeout(() => {
            setSuccessAlert(false);
        }, 5000);
    }

    // Función para manejar los cambios en los campos del formulario
    function handleChanges(event) {
        const { name, value } = event.target;
        // Actualiza los datos del contacto
        setContactInput((prevContactInput) => ({ ...prevContactInput, [name]: value }));
        const updatedContactInput = { ...contactInput, [name]: value };
        // Valida los datos actualizados del contacto
        const validationErrors = validate(updatedContactInput);
        if (Object.keys(validationErrors).length > 0) {
            // Actualiza los errores si existen
            setErrors((prevErrors) => ({ ...prevErrors, [name]: validationErrors[name] }));
        } else {
            // Elimina los errores si no existen
            setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
    }

    // Renderiza el componente del formulario
    return (
        <div className={styles.formContainer}>
            <div className={styles.formBox}>
                <h1 className={styles.formHeader}>Añadir Contacto</h1>
                {/* Formulario para ingresar los datos del nuevo contacto */}
                <form className={styles.formu} onSubmit={handleSubmit}>
                    <label className={styles.formLabel}>Nombre</label>
                    {/* Campo para ingresar el nombre del contacto */}
                    <input
                        className={styles.formInput}
                        name="firstname"
                        type="text"
                        placeholder="Nombre"
                        onChange={handleChanges}
                    />
                    {/* Muestra los errores de validación del nombre */}
                    {errors.firstname && <p className={styles.pForm}>{errors.firstname}</p>}

                    {/* Campo para ingresar el apellido del contacto */}
                    <input
                        className={styles.formInput}
                        name="lastname"
                        type="text"
                        placeholder="Apellido"
                        onChange={handleChanges}
                    />
                    {/* Muestra los errores de validación del apellido */}
                    {errors.lastname && <p className={styles.pForm}>{errors.lastname}</p>}

                    {/* Campo para ingresar el correo electrónico del contacto */}
                    <input
                        className={styles.formInput}
                        name="email"
                        type="text"
                        placeholder="Correo electrónico"
                        onChange={handleChanges}
                    />
                    {/* Muestra los errores de validación del correo electrónico */}
                    {errors.email && <p className={styles.pForm}>{errors.email}</p>}

                    {/* Botón para enviar el formulario */}
                    <button className={styles.formButton} type="submit">
                        Crear
                    </button>
                    {/* Muestra la alerta de éxito si se crea el contacto */}
                    {successAlert && <div className={styles.alert}>¡Contacto creado correctamente!</div>}
                </form>
                {/* Enlace para regresar a la página de inicio */}
                <Link to="/" className={styles.backButton}>Regresar a Home</Link>
            </div>
        </div>
    );
};

export default Form;
