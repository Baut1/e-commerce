import { combineReducers } from 'redux';
// import { setProductosReducer, selectedProductoReducer } from './productoReducer';
import productosSlice from '../../features/productos/productosSlice';
import filtrosSlice from '../../features/filtros/filtrosSlice';

const rootReducer = combineReducers({
    productosSlice: productosSlice,
    filtrosSlice: filtrosSlice
});

export default rootReducer;