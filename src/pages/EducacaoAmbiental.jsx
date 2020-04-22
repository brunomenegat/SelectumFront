import React, { useState } from "react";
import styled from "styled-components";
//import Image from 'react-bootstrap/Image';
import logo from "../imagens/logo.png" ;
//<Image src={logo} alt="logo" fluid /><img src={logo} alt="logo" fluid />

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

//console.log(logo);

export default function QuemSomos() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="container">
     <img src={ logo } />
      <h2>Quem Somos</h2>
      <p>
      A Selectum é uma startup com foco na reciclagem e logística reversa de resíduos sólidos, tanto do comércio quanto dos condomínios. O foco na educação ambiental é um dos nossos pilares revendo os conceitos de somente produzir mas também reaproveitar, ajudamos dessa forma o meio ambiente e também o social com a relação direta com os coletores das cidades. {" "}
      </p>
      <button
        className="btn btn-success"
        onClick={() => setIsLogged(!isLogged)}
      >
        Loga{isLogged ? "do" : "r"}
      </button>
      <SessaoGaleria>Fotos </SessaoGaleria>
    </div>
  );
}