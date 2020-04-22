import React from "react";
import {
  Link
} from "react-router-dom";
export default function LoginComponent() {
  return (
    <div className="container">
      <ul>
        <li>
          <Link to="/">Usuário</Link>
        </li>
        <li>
          <Link to="/about">Coletor</Link>
        </li>
        <li>
          <Link to={"/admin"}>Administração</Link>
        </li>
      </ul>
      <div>Login</div>
    </div>
  );
}
