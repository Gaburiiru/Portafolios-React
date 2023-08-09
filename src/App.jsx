import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import SobreMi from "./components/pages/SobreMi";
import Educacion from "./components/pages/Educacion";
import ListadoProyectos from "./components/pages/ListadoProyectos";
import Portafolio from "./components/pages/Portafolio";
import Proyecto from "./components/pages/Proyecto";
import Contacto from "./components/pages/Contacto";
import Default from "./components/pages/Default";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="SobreMi" element={<SobreMi />} />
          <Route path="Educacion" element={<Educacion />} />
          <Route path="Portafolio" element={<Portafolio />} />
          <Route path="ListadoProyectos" element={<ListadoProyectos />} />
          <Route path="/proyecto/:id" element={<Proyecto />} />
          <Route path="Contacto" element={<Contacto />} />
          <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
