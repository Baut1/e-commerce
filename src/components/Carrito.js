import React from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { quitarDelCarrito } from "../redux/actions/productoActions";
import store from "../redux/store";

const selectCarrito = state => state.rootReducer.productosSlice.carrito;

const Carrito = () => {

    const carrito = useSelector(selectCarrito);

    let precioTotal = 0;
    carrito.map((producto) => {
        return precioTotal += producto.precio;
    });

    return ( carrito.length !== 0 ?
        <div className="carrito">
            <h1>Carrito</h1>
            <div className="carrito-productos">
                {carrito.map((producto) => (
                <>
                    <Link to={`/categorias/mujer/${producto.id}`}>
                        <div>
                            <img className="carrito-productos-img" src={producto.imagen} alt={producto.nombre} />
                        </div>
                    </Link>
                    <div>
                        <h2>{producto.nombre}</h2>
                        <h3>$ {producto.precio}</h3>
                    </div>
                    <button onClick={() => store.dispatch({ type: "productos/quitarDelCarrito", payload: producto })} className="btn-quitarDelCarrito" >Quitar del carrito</button>
                </>
                ))};    
            </div>
            <h3>Total: ${precioTotal}</h3>
            <button className="btn-completarCompra">Completar Compra</button>
        </div> : <div className="carrito-vacio"><h1>Tu carrito esta vacío, <Link to="/categorias/mujer">agregá</Link> productos para verlos aquí.</h1></div>
    )
}

export default Carrito;