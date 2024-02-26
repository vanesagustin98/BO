import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import reducer from './reducer';

// Configura el enhancer para la integración con Redux DevTools Extension o usa compose si no está disponible
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Crea la tienda Redux con el reducer y el middleware de thunk
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
