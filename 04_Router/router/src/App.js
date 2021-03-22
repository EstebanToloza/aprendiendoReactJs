import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Civilization from './components/Civilization';
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';

function App() {
  return (
    <Router>
    <div className="container">
      <div className="btn-group mt-5">
        <Link to="/" className="btn btn-dark">
          Inicio
        </Link>
        <Link to="/nosotros" className="btn btn-dark">
          Nosotros
        </Link>
        <NavLink to="/contacto" className="btn btn-dark" activeClassName="active">
          Contacto
        </NavLink>
      </div>
      <hr />
      <Switch>
      {/* <Route path="/" exact> //Se debe organizar las rutas de lo más específico a lo más general o usar 'exact'
          Esta es la página de Inicio
        </Route> */}
        <Route path="/nosotros/:id">
          <Civilization />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
        <Route path="/nosotros">
          <Nosotros />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
