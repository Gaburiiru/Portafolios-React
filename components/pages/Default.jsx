import React from "react";
import assets from "../../assets/assets";

function Default() {
  return (
    <div className="flex flex-col items-center m-2 space-y-0 mb-40">
      <h1
        className="
      text-indigo-300
      my-6
      subtitulos
      hover:text-white
      animate__animated
      animate__tada
      text-3xl
      sm:text-4xl
      
      "
      >
        Ups.. pagina no encontrada!
      </h1>
      <div className="flex  flex-col items-center sm:w-128 bg-gray-950 rounded-xl p-4">
        <img
          src={assets.icon}
          alt="icon"
          className="w-60 rounded-xl animate__animated animate__fadeIn"
        />
        <h2 className="text-2xl font-extralight text-white">
          Programador trabajando...
        </h2>
        <p className="my-6 text-2xl font-extralight text-white animate__animated animate__fadeIn">
          Haz uso de la sección izquierda para regresar a la navegación en mi
          sitio web.
        </p>
      </div>
    </div>
  );
}

export default Default;
