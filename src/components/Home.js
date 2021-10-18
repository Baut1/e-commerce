import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            <div>
                <h3>NUEVA TEMPORADA</h3>
                <Link to="/categorias/ss2022">Ver más</Link>
            </div>
            <img src="https://i.ibb.co/vDdFsLZ/nueva-temporada-banner.jpg" alt="Banner Nueva Temporada" />
            <img src="https://i.ibb.co/2tYHs4X/vestido-banner.png" alt="Banner Vestidos"/>
            <div>
                <h3>VESTIDOS</h3>
                <Link to="/categorias/vestidos">Ver más</Link>
            </div>
            <div>
                <h3>FALDAS Y POLLERAS</h3>
                <Link to="/categorias/faldas">Ver más</Link>
            </div>
            <img src="https://i.ibb.co/B30tp3p/falda-larga-banner.png" alt="Banner Faldas"/>
            <img src="https://i.ibb.co/ZS23wBH/jogger-banner.jpg" alt="Banner Joggers"/>
            <div>
                <h3>PANTALONES Y JOGGERS</h3>
                <Link to="/categorias/pantalones">Ver más</Link>
            </div>
            <div>
                <h3>SALE</h3>
                <Link to="/categorias/sale">Ver más</Link>
            </div>
            <img src="https://i.ibb.co/GMtgfKz/sale-banner.jpg" alt="Banner Sale"/>
            <img src="https://i.ibb.co/QrR4qB5/todo-mujer-banner.jpg" alt="Banner Todo Mujer"/>
            <div>
                <h3>TODO MUJER</h3>
                <Link to="/categorias/mujer">Ver más</Link>
            </div>
        </main>
    )
}

export default Home;