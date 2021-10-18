import { createSlice } from '@reduxjs/toolkit';

const filtrosSlice = createSlice({
    name: 'filtros',
    initialState: {
        visibilityFilter: "",
        productos: []
    },
    reducers: {
        setVisibleProductos: (state, action) => {
            let visibleProductos;
            switch (action.payload) {
                case "mujer":
                    visibleProductos = action.productos;
                    return { ...state, visibilityFilter: action.payload, productos: visibleProductos };  
                case "ss2022":
                    const nuevo = (p) => p["nuevo"] === true;
                    visibleProductos = action.productos.filter(nuevo);
                    return { ...state, visibilityFilter: action.payload, productos: visibleProductos };
                case "vestidos":
                    const vestidos = (p) => p["categoria"] == action.payload;
                    visibleProductos = action.productos.filter(vestidos);
                    return { ...state, visibilityFilter: action.payload, productos: visibleProductos };
                case "faldas":
                    const faldas = (p) => p["categoria"] == action.payload;
                    visibleProductos = action.productos.filter(faldas);
                    return { ...state, visibilityFilter: action.payload, productos: visibleProductos };
                case "pantalones":
                    const pantalones = (p) => p["categoria"] == action.payload;
                    visibleProductos = action.productos.filter(pantalones);
                    return { ...state, visibilityFilter: action.payload, productos: visibleProductos };
                case "sale":
                    const sale = (p) => p["sale"] == true;
                    visibleProductos = action.productos.filter(sale);
                    return { ...state, visibilityFilter: action.payload, productos: visibleProductos };
                default:
                    return state;
            }
        }
    }
});

export const { setVisibleProductos } = filtrosSlice.actions;
export default filtrosSlice.reducer;