import data from '../../data';
// import productosSlice from '../../features/productos/productosSlice';

const setProductos = (categoria) => {
    return {
        type: 'productos/setProductos',
        payload: data.productos,
        categoria: categoria
    }
}

const selectedProducto = (indexProducto) => {
    return {
        type: 'productos/selectedProducto',
        payload: data.productos[indexProducto]
    }
}

const agregarAlCarrito = (indexProducto) => {
    return {
        type: 'productos/agregarAlCarrito',
        payload: data.productos[indexProducto]
    }
}

const quitarDelCarrito = (producto) => {
    return {
        type: 'productos/quitarDelCarrito',
        payload: producto
    }
}

export { setProductos, selectedProducto, agregarAlCarrito, quitarDelCarrito };