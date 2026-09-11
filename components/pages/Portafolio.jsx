import React from "react";
import { Link } from "react-router-dom";
import Carrusel from "./carrusel/Carrusel";

function Portafolio() {
  return (
    <div className="flex flex-col items-center">
      <h1
        className="
        text-indigo-300 
          py-6 
          subtitulos 
        hover:text-white 
          animate__animated 
          animate__swing
          text-3xl
          sm:text-4xl
        "
      >
        Portafolio
      </h1>

      <Carrusel />

      <Link to="/ListadoProyectos">
        <button className="bg-indigo-500 my-10 px-4 py-1 rounded-xl shadow-xl shadow-indigo-600/30 font-mono text-lg text-white animate__animated animate__lightSpeedInRight hover:bg-indigo-600">
          Ver mas +
        </button>
      </Link>
    </div>
  );
}

export default Portafolio;
