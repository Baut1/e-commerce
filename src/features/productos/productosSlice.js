import { createSlice } from '@reduxjs/toolkit';
// import { setVisibleProductos } from '../../redux/actions/filtroActions';

const productosSlice = createSlice({
    name: 'productos',
    initialState: {
        productos: [],
        producto: {},
        carrito: []
    },
    reducers: {
        setProductos: (state, action) => {
            return { ...state, productos: action.payload };
        },
        selectedProducto: (state, action) => {
            return { ...state, producto: action.payload };
        },
        agregarAlCarrito: (state, action) => {
            const carrito = JSON.parse(JSON.stringify([...state.carrito]));
            const prod = (obj) => obj["id"] == action.payload.id;
            if (carrito.some(prod)) {
                alert("El producto ya está en el carrito");
            }
            else {
                return { ...state, carrito: [...state.carrito, action.payload] };
            }
        },
        quitarDelCarrito: (state, action) => {
            const carrito = JSON.parse(JSON.stringify([...state.carrito]));
            const prod = (obj) => obj["id"] !== action.payload.id;
            const nuevoCarrito = carrito.filter(prod);
            return { ...state, carrito: nuevoCarrito };
        }
    }
});

export const { setProductos, selectedProducto, agregarAlCarrito, quitarDelCarrito } = productosSlice.actions;
export default productosSlice.reducer;