import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Perfil from './components/Perfil';
import ListadoProductos from './components/ListadoProductos';
import DetalleProducto from './components/DetalleProducto';
import Campania from './components/Campania';
import Locales from './components/Locales';
import Carrito from './components/Carrito';
import Footer from './components/Footer';
import CuatrocientosCuatro from './components/CuatrocientosCuatro';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/categorias/:categoria/:productoId">
            <DetalleProducto />
          </Route>
          <Route path="/categorias/:categoria">
            <ListadoProductos />
          </Route>
          <Route path="/campania">
            <Campania />
          </Route>
          <Route path="/locales">
            <Locales />
          </Route>
          <Route path="/perfil">
            <Perfil />
          </Route>
          <Route path="/carrito">
            <Carrito />
          </Route>
          <Route exact path="/">
            <Home />            
          </Route>
          <Route>
            <CuatrocientosCuatro />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
