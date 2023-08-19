import React from "react";
import { proyectos } from "../../data/proyectos";
import { Link } from "react-router-dom";

function PortafolioMobile() {
  const ultimosProyectos = proyectos
    .slice()
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <div className="flex flex-col justify-center items-center m-4 space-y-4 mb-40">
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
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {ultimosProyectos.map((proyecto, index) => (
          <div
            key={index}
            className="sm:w-96 p-2 rounded-xl bg-gradient-to-r from-indigo-500/80 to-cyan-500/80"
          >
            <Link to={"/Proyecto/" + proyecto.id}>
              <img
                src={proyecto.image}
                className="contrast-75 brightness-50 p-2 rounded-xl w-full"
              />
              <div className=" text-white text-left p-5 h-fit">
                <div className="bg-green-500 py-1 px-2 font-medium text-lg w-fit">
                  Reciente
                </div>
                <p className="text-3xl py-4 text-white">{proyecto.name}</p>
                <p className="truncate text-lg font-thin w-60">
                  {proyecto.description}
                </p>
                <p>{proyecto.tecnology}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/ListadoProyectos">
        <button className="bg-indigo-500 my-10 px-4 py-1 rounded-xl shadow-xl shadow-indigo-600/30 font-mono text-lg text-white animate__animated animate__lightSpeedInRight hover:bg-indigo-600">
          Ver mas +
        </button>
      </Link>
    </div>
  );
}

export default PortafolioMobile;
