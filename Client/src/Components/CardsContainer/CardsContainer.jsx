import React from 'react';
import Card from '../Card/Card';
import styles from './CardsContainer.module.css';

// Componente funcional para contenedor de tarjetas de contactos
export default function CardsContainer({ contacts }) {
    // Renderiza el componente
    return (
        <div className={styles.divCards}>
            {/* Mapea los contactos y renderiza una tarjeta para cada uno */}
            {contacts?.map((cont) => (
                <Card
                    key={cont.id}
                    id={cont.id}
                    email={cont.properties.email}
                    firstname={cont.properties.firstname}
                    lastname={cont.properties.lastname}
                />
            ))}
        </div>
    );
}
