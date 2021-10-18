import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Carrito from './Carrito';

const selectCarrito = state => state.rootReducer.productosSlice.carrito;


const Header = () => {

    const carrito = useSelector(selectCarrito);

    return (
        <header className="header">
            <a href="/"><img src="https://i.ibb.co/qy8RsLs/logo.png" className="logo-main"></img></a>
            <NavLink to="/categorias/mujer" className="header-nav-link" activeClassName="current">COLECCIÓN</NavLink>
            <NavLink to="/campania" className="header-nav-link" activeClassName="current">CAMPAÑA</NavLink>
            <NavLink to="/locales" className="header-nav-link" activeClassName="current">LOCALES</NavLink>
            <NavLink to="/perfil" className="header-nav-link" activeClassName="current">
                <span class="material-icons-outlined">account_circle</span>
            </NavLink>
            <NavLink to="/carrito" className="header-nav-link" activeClassName="current">
                <span class="material-icons-outlined">shopping_cart</span>
                {carrito.length ? <button className="carrito-badge">{carrito.length}</button> : <></>}
            </NavLink>
        </header>
    )
}

export default Header;