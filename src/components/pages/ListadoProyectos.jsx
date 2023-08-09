import React from "react";
import Lista from "./Lista";

const ListadoProyectos = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-indigo-300 text-4xl font-medium py-6 subtitulos hover:text-white animate__animated animate__bounceInUp">
          Todos los Proyectos
        </h1>
        <div className="bg-emerald-500 rounded-xl p-4 hover:scale-110 shadow-xl hover:shadow-emerald-600/70">
          <Lista category="Android Studio" />
        </div>
        <div className="my-4 bg-blue-950 rounded-xl p-4 hover:scale-110 shadow-xl hover:shadow-blue-950/80">
          <Lista category="React" />
        </div>
        <div className="bg-slate-950 rounded-xl p-4 hover:scale-110 shadow-xl hover:shadow-black/50">
          <Lista category="Vanilla JavaScript" />
        </div>
      </div>
    </>
  );
};

export default ListadoProyectos;
