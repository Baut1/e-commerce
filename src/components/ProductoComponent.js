import React from "react";
import { Link, useParams } from 'react-router-dom';

export default function ProductoComponent (props) {

    const { producto } = props;
    const { categoria } = useParams();
    
    return (
        <div className="productoComponent">
            <Link to={`/categorias/${categoria}/${producto.id}`}>
                <div>
                    <div className="img">
                        <img src={producto.imagen} alt={producto.nombre} />
                    </div>
                    <div className="grid-producto-texto">
                        <h4>{producto.nombre}</h4>
                        <p>$ {producto.precio}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}