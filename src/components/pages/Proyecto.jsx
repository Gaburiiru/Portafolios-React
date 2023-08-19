import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { proyectos } from "../../data/proyectos";

function Proyecto() {
  const [proyecto, setProyecto] = useState({});
  const params = useParams();

  useEffect(() => {
    let proyectoEncontrado = proyectos.find(
      (proyecto) => proyecto.id.toString() === params.id
    );
    if (proyectoEncontrado) {
      setProyecto(proyectoEncontrado);
    }
  }, [params.id]);

  const categoriaColores = {
    "Android Studio": "bg-emerald-500 hover:shadow-emerald-600/70",
    React: "bg-blue-950 hover:shadow-blue-950/80",
    "Vanilla JavaScript": "bg-slate-950 hover:shadow-black/50",
  };

  // Obtiene el color de fondo basado en la categoría
  const categoriaColor = categoriaColores[proyecto.category] || "bg-slate-900";

  return (
    <div className="m-4 space-y-0 mb-40">
      <div
        className={`sm:w-155 p-4 rounded-xl ${categoriaColor} hover:opacity-100 shadow-xl`}
      >
        <div className="flex justify-center">
          <img
            src={proyecto.image}
            alt={proyecto.id}
            className="rounded-xl w-full h-fit animate__animated animate__zoomIn"
          />
        </div>
        <h1 className="text-white font-medium py-4 text-3xl">
          {proyecto.name}
        </h1>
        <p className="text-white font-medium text-xl py-2">{proyecto.tecnology}</p>
        <p className="text-white font-mono text-lg">
          {proyecto.description}
        </p>
        <p className="text-white font-medium text-lg py-2">Enlace {proyecto.type}</p>
        <button className="bg-indigo-500 w-11 rounded-full shadow-xl shadow-indigo-600/30 animate__animated animate__rubberBand hover:bg-indigo-600 hover:shadow-indigo-500/30">
          <a href={"https://" + proyecto.url} target="_blank" rel="noreferrer">
            <img src="\src\assets\img\hyperlink.png" className="p-2 " />
          </a>
        </button>
        <button className="bg-indigo-500 w-11 mx-4 rounded-full shadow-xl shadow-indigo-600/30 animate__animated animate__rubberBand hover:bg-indigo-600 hover:shadow-indigo-500/30">
          <a href={"https://" + proyecto.git} target="_blank" rel="noreferrer">
            <img src="\src\assets\img\github.png" className="p-1" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Proyecto;
