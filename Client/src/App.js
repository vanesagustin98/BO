import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './views/Form/Form';
import Home from './views/Home/Home';

/**
 * Componente principal de la aplicación.
 */
function App() {
  return (
    // Contenedor principal de la aplicación
    <div className="App">
      {/* Definición de las rutas de la aplicación */}
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path='/' element={<Home />} />
        {/* Ruta para el formulario */}
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
