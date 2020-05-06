import React from "react";
import { Link } from "react-router-dom";
import Reactt, { useState } from "react";


export default function Menu() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black" >
      <a className="navbar-brand" href="../imagens/LogoTrue;">SELECTUM</a>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
    <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
              Home <span className="sr-only"></span>
            </Link>
            <li className="nav-item">
            <Link className="nav-link" to="/quem-somos">
              Quem Somos
            </Link>
             </li>
          <li className="nav-item">
            <Link className="nav-link" to="/formulario">
              Formulario
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </Link>
          </li>
          <button
        className="btn btn-success"
        onClick={() => setIsLogged(!isLogged)}
      >
        Loga{isLogged ? "do" : "r"}
      </button>
       
      </div>
     
  </div>
</nav>
  );
}
