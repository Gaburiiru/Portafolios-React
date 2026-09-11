import React from "react";
import Lista from "./Lista";

const ListadoProyectos = () => {
  return (
    <div className="flex flex-col items-center space-y-0 mb-40 text-center">
      <div className="m-4">
        <h1
          className="
            text-indigo-300  
              font-medium 
              py-6 
              subtitulos 
            hover:text-white 
              animate__animated 
              animate__bounceInUp
              text-3xl
              sm:text-4xl
              "
        >
          Todos los Proyectos
        </h1>
        <div className="bg-emerald-500 rounded-xl p-4 sm:hover:scale-110 shadow-xl hover:shadow-emerald-600/70">
          <Lista category="Android Studio" />
        </div>
        <div className="my-4 bg-blue-950 rounded-xl p-4 sm:hover:scale-110 shadow-xl hover:shadow-blue-950/80">
          <Lista category="React" />
        </div>
        <div className="bg-slate-950 rounded-xl p-4 sm:hover:scale-110 shadow-xl hover:shadow-black/50">
          <Lista category="Vanilla JavaScript" />
        </div>
      </div>
    </div>
  );
};

export default ListadoProyectos;
