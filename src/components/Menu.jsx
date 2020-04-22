import React from "react";
import { Link } from "react-router-dom";
import Reactt, { useState } from "react";


export default function Menu() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
      <a className="navbar-brand" href="#;">SELECTUM</a>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
    <div className="navbar-nav">
            <Link ClassName="nav-item nav-link active" to="/">
              Home <span ClassName="sr-only"></span>
            </Link>
            <li ClassName="nav-item">
            <Link ClassName="nav-link" to="/quem-somos">
              Quem Somos
            </Link>
             </li>
          <li ClassName="nav-item">
            <Link ClassName="nav-link" to="/formulario">
              Formulario
            </Link>
          </li>
          <li ClassName="nav-item">
            <Link
              ClassName="nav-link disabled"
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
