import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { setProductos } from "../redux/actions/productoActions";
// import { setVisibleProductos } from "../redux/actions/filtroActions";
import { Link, useParams } from 'react-router-dom';
// import { setProductos } from "../features/productos/productosSlice";
import ProductoComponent from "./ProductoComponent";
import store from "../redux/store";

const selectProductos = state => state.rootReducer.productosSlice.productos;
const selectFiltro = state => state.rootReducer.filtrosSlice.productos;

const ListadoProductos = () => {

    const { categoria } = useParams();
    store.dispatch(setProductos(categoria));
    const productos = useSelector(selectProductos);

    let visibleProductos = productos;
    visibleProductos = useSelector(selectFiltro);
    
    useEffect(() => {
        store.dispatch({ type: "filtros/setVisibleProductos", payload: categoria, productos: productos })
    }, [categoria]);

    return (
        <div>
            <p className="breadcrumbs"><Link to="/">Home</Link> / {categoria}</p>
            {/* <select name="color" onChange={(e) => store.dispatch({ type: "filtros/setVisibleProductos", payload: e.target.value, productos: productos })}>
                <option value="todos" defaultValue>Todos</option> 
                <option value="blanco">Blanco</option>
                <option value="gris">Gris</option>
                <option value="azul">Azul</option>
            </select> */}
            <div className="grid">
                {visibleProductos.map((producto) => (
                    <ProductoComponent key={producto.id} producto={producto}></ProductoComponent>
                ))}
            </div>
        </div>
    )
}

export default ListadoProductos;