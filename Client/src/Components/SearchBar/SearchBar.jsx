import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { findContact } from '../../Redux/actions';
import styles from './SearchBar.module.css';

// Componente funcional para la barra de búsqueda de contactos
export default function SearchBar() {
    // Estado local para el valor de búsqueda
    const [contact, setContact] = useState('');
    // Función para despachar acciones de Redux
    const dispatch = useDispatch();

    // Función para manejar el cambio en el valor de búsqueda
    const handleChange = useCallback((event) => {
        // Obtiene el valor de búsqueda actualizado
        const updatedContact = event.target.value;
        // Actualiza el estado de búsqueda
        setContact(updatedContact);
        // Despacha la acción para buscar el contacto
        dispatch(findContact(updatedContact));
    }, [dispatch]); // Dependencia: la función dispatch

    // Renderiza el componente
    return (
        <div className={styles.searchBarContainer}>
            {/* Input para ingresar el valor de búsqueda */}
            <input
                className={styles.searchInput}
                type='search'
                onChange={handleChange}
                placeholder="Ingrese Email para buscar contacto"
            />
        </div>
    );
}
