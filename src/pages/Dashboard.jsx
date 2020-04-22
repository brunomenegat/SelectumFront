import React, { useState } from "react";
import styled from "styled-components";

const SessaoGaleria = styled.div`
  padding: 1em;
  margin-top: 2em;
  width: 100%;
  background-color: grey;
  font-size: 22px;
  :hover {
    color: white;
  }
`;
export default function Dashboard() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="container">
      <h2>Dados</h2>
      <p>Aqui será a página de dados</p>
      <button
        className="btn btn-success"
        onClick={() => setIsLogged(!isLogged)}
      >
        Loga{isLogged ? "do" : "r"}
      </button>
      <SessaoGaleria>Fotos</SessaoGaleria>
    </div>
  );
}