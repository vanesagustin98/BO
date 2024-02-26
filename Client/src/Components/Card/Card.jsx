import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact, patchContact } from '../../Redux/actions'; // No es necesario importar allContacts
import styles from './Card.module.css';
import { FaPencilAlt } from 'react-icons/fa';

// Componente funcional para mostrar un contacto en forma de tarjeta
function Card(props) {
    const { id, email, firstname, lastname } = props; // Desestructura las props
    const [editingField, setEditingField] = useState(null); // Estado para el campo que se está editando
    const [editedValue, setEditedValue] = useState(''); // Estado para el valor editado
    const dispatch = useDispatch();

    // Función para manejar el evento de eliminar un contacto
    const handleDelete = () => {
        dispatch(deleteContact(id)); // Despacha la acción de eliminar un contacto
        window.location.reload(); // Recarga la página
    };

    // Función para manejar el evento de editar un campo del contacto
    const handleEdit = (field) => {
        setEditingField(field); // Establece el campo que se está editando
        setEditedValue(props[field]); // Establece el valor del campo que se está editando
    };

    // Función para manejar el cambio en el valor editado
    const handleChange = (event) => {
        setEditedValue(event.target.value); // Actualiza el valor editado
    };

    // Función para manejar el evento de guardar los cambios
    const handleSave = () => {
        const updatedContact = { properties: { [editingField]: editedValue } }; // Construye el objeto actualizado
        dispatch(patchContact(id, updatedContact)); // Despacha la acción de actualizar un contacto
        setEditingField(null); // Limpia el campo que se está editando
        window.location.reload(); // Recarga la página
    };

    return (
        <div className={styles.divCard}>
            <div className={styles.containerH2}>
                <div className={styles.editField}>
                    {editingField === 'email' ? (
                        <input
                            type="text"
                            value={editedValue}
                            onChange={handleChange}
                        />
                    ) : (
                        <h2 className={styles.h2Card}>{email}</h2>
                    )}
                    {editingField === 'email' && (
                        <button onClick={handleSave}>Guardar</button>
                    )}
                    <FaPencilAlt onClick={() => handleEdit('email')} />
                </div>
                <div className={styles.editField}>
                    {editingField === 'firstname' ? (
                        <input
                            type="text"
                            value={editedValue}
                            onChange={handleChange}
                        />
                    ) : (
                        <h2 className={styles.h2Card}>{firstname}</h2>
                    )}
                    {editingField === 'firstname' && (
                        <button onClick={handleSave}>Guardar</button>
                    )}
                    <FaPencilAlt onClick={() => handleEdit('firstname')} />
                </div>
                <div className={styles.editField}>
                    {editingField === 'lastname' ? (
                        <input
                            type="text"
                            value={editedValue}
                            onChange={handleChange}
                        />
                    ) : (
                        <h2 className={styles.h2Card}>{lastname}</h2>
                    )}
                    {editingField === 'lastname' && (
                        <button onClick={handleSave}>Guardar</button>
                    )}
                    <FaPencilAlt onClick={() => handleEdit('lastname')} />
                </div>
            </div>
            <div className={styles.imgContainer}>
                <button className={styles.btnEliminar} onClick={handleDelete}>Eliminar</button>
            </div>
        </div>
    );
}

// Función para mapear el estado de Redux a las props del componente
function mapStateToProps(state) {
    return {
        allContacts: state.allContacts
    }
}

export default connect(mapStateToProps)(Card);