import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Dashboard, About, QuemSomos, Formulario, FormularioCondominio, EducacaoAmbiental } from "./pages";
import { Menu } from "./components";


export default function App() {
  return (
    <Router>       {/*Aqui é o arquivo raíz onde vao as rotas e seus componentes*/}
      <Menu /> 
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/quem-somos">
          <QuemSomos />
        </Route>
        <Route path="/formulario">
          <Formulario />
        </Route>
        <Route path="/formularioCondominio">
          <FormularioCondominio />
        </Route>
        <Route path="/EducacaoAmbiental">
          <EducacaoAmbiental />
        </Route>
      </Switch>
    </Router>
  );
}
