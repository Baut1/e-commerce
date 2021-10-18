import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';
// import productosSlice from '../features/productos/productosSlice';
// import filtrosSlice from '../features/filtros/filtrosSlice';

export const store = configureStore({
    reducer: {
        rootReducer: rootReducer
    }   
});

export default store;