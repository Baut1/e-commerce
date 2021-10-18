import React from "react";
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { selectedProducto } from "../redux/actions/productoActions";
// import { selectedProducto } from "../features/productos/productosSlice";
import store from "../redux/store";
import data from '../data';

const selectProducto = state => state.rootReducer.productosSlice.producto;

export default function DetalleProducto() {
    
    const producto = useSelector(selectProducto);
    const { categoria, productoId } = useParams();
    const buscarId = (prod) => prod["id"] == productoId;
    const indexProducto = data.productos.findIndex(buscarId);

    store.dispatch(selectedProducto(indexProducto));
    
    return ( producto ? 
        <div>
            <p className="breadcrumbs"><Link to="/">Home</Link> / <Link to={`/categorias/${categoria}`}>{categoria}</Link> / {producto.nombre}</p>
            <div className="detalleProducto">
                <div>
                    <img src={producto.imagen} alt={producto.nombre} />
                </div>
                <div className="detalleProducto-info">
                    <h1>{producto.nombre}</h1>
                    <h2>$ {producto.precio}</h2>
                    <h5><span class="material-icons-outlined">credit_card</span>O en 12 cuotas sin interés de $ {(producto.precio/12).toFixed(2)}</h5>
                    <h3>{producto.descripcion}</h3>
                    <button onClick={() => store.dispatch({ type: 'productos/agregarAlCarrito', payload: producto })}>
                        Agregar al carrito <span class="material-icons-outlined">add_shopping_cart</span>
                    </button>
                </div>
            </div>
        </div> : <div className="detalleProducto-error"><h1>Error: Producto no encontrado, <Link to="/">volver</Link>.</h1></div>
    )
}