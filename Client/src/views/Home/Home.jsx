import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allContacts } from "../../Redux/actions";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import SearchBar from '../../Components/SearchBar/SearchBar';
import styles from './Home.module.css';

/**
 * Componente para la página principal que muestra todos los contactos.
 */
const Home = () => {
    // Obtener el estado de los contactos desde Redux
    const contacts = useSelector(state => state.allContacts);
    // Dispatch para enviar acciones a Redux
    const dispatch = useDispatch();

    // Cargar todos los contactos al montar el componente
    useEffect(() => {
        dispatch(allContacts());
    }, [dispatch]);

    return (
        // Contenedor principal de la página principal
        <div className={styles.homeContainer}>
            {/* Encabezado de la página */}
            <div className={styles.containerHeader}>
                <h1 className={styles.header}>CONTACTOS</h1>
            </div>
            {/* Contenedor para el botón de agregar contacto y la barra de búsqueda */}
            <div className={styles.buttonContainer}>
                <SearchBar />
                {/* Enlace para ir al formulario de agregar contacto */}
                <Link to={'/form'}>
                    <button className={styles.navButton}>Agregar Contacto</button>
                </Link>
            </div>
            {/* Contenedor de tarjetas para mostrar los contactos */}
            <CardsContainer contacts={contacts} />
        </div>
    );
}

export default Home;
