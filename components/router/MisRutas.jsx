import React from "react";
import {Routes,Route, BrowserRouter, Navigate} from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Home from "../pages/Home";
import SobreMi from "../pages/SobreMi";
import Educacion from "../pages/Educacion";
import ListadoProyectos from "../pages/ListadoProyectos";
import Portafolio from "../pages/Portafolio";
import PortafolioMobile from "../pages/PortafolioMobile";
import Proyecto from "../pages/Proyecto";
import Contacto from "../pages/Contacto";
import Default from "../pages/Default";

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* Contenido central */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="SobreMi" element={<SobreMi />} />
          <Route path="Educacion" element={<Educacion />} />
          <Route path="Portafolio" element={<Portafolio />} />
          <Route path="PortafolioMobile" element={<PortafolioMobile />} />
          <Route path="ListadoProyectos" element={<ListadoProyectos />} />
          <Route path="/proyecto/:id" element={<Proyecto />} />
          <Route path="Contacto" element={<Contacto />} />
          <Route path="*" element={<Default />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
