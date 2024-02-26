README - Aplicación de Gestión de Contactos
Esta es una aplicación web de gestión de contactos desarrollada utilizando tecnologías como React.js y Redux para el frontend, y Node.js para el backend. La aplicación permite a los usuarios agregar, editar, eliminar y buscar contactos.

Características principales:
Gestión de Contactos: Los usuarios pueden agregar nuevos contactos con su nombre y correo electrónico. También pueden ver una lista de todos los contactos existentes y eliminarlos si es necesario.

Búsqueda de Contactos: Se proporciona una barra de búsqueda que permite a los usuarios buscar contactos por correo electrónico.

Edición de Contactos: Los usuarios pueden editar la información de contacto existente, como su nombre y correo electrónico.

Estructura del Proyecto: 

El proyecto consta de dos partes principales:

Frontend: Desarrollado utilizando React.js y Redux para el estado global de la aplicación. Los componentes principales incluyen:

    Formulario: Permite a los usuarios agregar nuevos contactos.
    Lista de Contactos: Muestra todos los contactos existentes y proporciona opciones para editar y eliminar contactos.
    Barra de Búsqueda: Permite a los usuarios buscar contactos por correo electrónico.

Backend: Desarrollado utilizando Node.js y Express.js. Las principales funciones incluyen:

    Rutas API: Definen las rutas para manejar las solicitudes relacionadas con los contactos, como agregar, editar, eliminar y buscar.
    Controladores: Funciones que procesan las solicitudes y realizan las operaciones necesarias en la base de datos.

Configuración del Proyecto:
    Clonar el repositorio del proyecto desde GitHub.
    Instalar las dependencias del frontend y backend utilizando npm install.
    Ejecutar el servidor backend utilizando npm start en el directorio del backend.
    Iniciar la aplicación frontend utilizando npm start en el directorio del frontend.

Tecnologías Utilizadas:

Frontend:

    React.js
    Redux (para la gestión del estado global)
    React Router (para la navegación)
    Axios (para realizar solicitudes HTTP)
    CSS Modules (para estilos modulares)

Backend:

    Node.js
    Express.js (para la creación de API)
    MongoDB (para la base de datos)
    Mongoose (para la interacción con MongoDB)

Dependencias Principales:

Frontend:

    react
    react-dom
    react-redux
    redux
    react-router-dom
    axios

Backend:

express
    dotenv
    nodemon (para desarrollo)