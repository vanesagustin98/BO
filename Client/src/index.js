import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/store';
import { Provider } from 'react-redux';

// Obtener el elemento raíz del DOM donde se renderizará la aplicación
const rootElement = document.getElementById('root');

// Crear un nuevo root utilizando createRoot de react-dom/client
const root = createRoot(rootElement);

// Renderizar la aplicación dentro del elemento raíz utilizando la nueva API
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// Iniciar la medición del rendimiento de la aplicación
reportWebVitals();
