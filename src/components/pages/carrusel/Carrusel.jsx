import React, { useState, useEffect } from "react";
import { proyectos } from "../../../data/proyectos";
import estilos from "./carrusel.module.css";
import { Link } from "react-router-dom";

function Carrusel() {
  const ultimosProyectos = proyectos
    .slice()
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  const [imagenActual, setImagenActual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagenActual((imagenActual) =>
        imagenActual === ultimosProyectos.length - 1 ? 0 : imagenActual + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [ultimosProyectos.length]);

  return (
    <div className="flex justify-center items-center w-170 h-fit">
      <button
        className="w-16 m-2"
        onClick={() =>
          setImagenActual(
            imagenActual === 0 ? ultimosProyectos.length - 1 : imagenActual - 1
          )
        }
      >
        <img src="src\assets\img\flecha-retroceder.png" alt="retroceder" />
      </button>
      {ultimosProyectos.map((proyecto, index) => (
        <div
          key={index}
          className={
            imagenActual === index
              ? `${estilos.carrusel} ${estilos.activo} shadow-xl hover:shadow-black/50 hover:scale-110 rounded-xl`
              : `${estilos.carrusel} ${estilos.oculto}`
          }
        >
          <Link to={"/Proyecto/" + proyecto.id}>
            <img
              src={proyecto.image}
              className="contrast-75 brightness-50 w-full rounded-xl"
            />
            <div className="absolute bottom-0 left-0 text-white text-left p-5 w-170 h-fit">
              <div className="bg-green-500 py-1 px-2 font-medium text-lg w-fit">
                Reciente
              </div>
              <p className="text-3xl py-4 text-white">{proyecto.name}</p>
              <p className="truncate w-128 text-lg font-thin">
                {proyecto.description}
              </p>
              <p>{proyecto.tecnology}</p>
            </div>
          </Link>
        </div>
      ))}
      <button
        className="w-16 m-2"
        onClick={() =>
          setImagenActual(
            imagenActual === ultimosProyectos.length - 1 ? 0 : imagenActual + 1
          )
        }
      >
        <img src="src\assets\img\flecha-avanzar.png" alt="avanzar" />
      </button>
    </div>
  );
}

export default Carrusel;
