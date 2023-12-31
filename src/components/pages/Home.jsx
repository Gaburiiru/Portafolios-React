import React, { useState, useEffect } from "react";
import "animate.css";
import "../../assets/css/estilos.css";
import assets from "../../assets/assets";

function Home() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimated((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const copiarCorreo = () => {
    const correo = "gabrielricardes16@gmail.com";
    navigator.clipboard.writeText(correo);
    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  return (
    <>
      <div className="text-left space-y-0 mb-40">
        <p
          className={`nombre text-6xl sm:text-9xl py-10 p-4 animate__animated
          ${
            isAnimated ? "animate__flash" : ""
          }`}
        >
          Gabriel <span className="apellido inline">Ricardes</span>
        </p>
        <p className="text-indigo-300 text-2xl sm:text-4xl p-4 font-mono animate__animated animate__flipInX hover:text-white">
          Bienvenido a mi portafolio de desarrollador
        </p>
        <a
          href="https://drive.google.com/file/d/14lWz0Bqtkc4PV9TtEybhBv3hEVAUm5qm/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="shadow-xl shadow-indigo-600/30 rounded-full w-fit h-fit p-2 px-4 m-4 text-white bg-indigo-500 font-mono animate__animated animate__bounce hover:bg-indigo-600 hover:shadow-indigo-500/30">
            Descargar mi CV
          </button>
        </a>

        <div className="p-4">
          <button className="bg-indigo-500 w-11 rounded-full shadow-xl shadow-indigo-600/30 animate__animated animate__rubberBand hover:bg-indigo-600 hover:shadow-indigo-500/30">
            <a
              href="https://github.com/Gaburiiru"
              target="_blank"
              rel="noreferrer"
            >
              <img src={assets.github} className="p-1" />
            </a>
          </button>
          <button className="bg-indigo-500 w-11 mx-4 rounded-full shadow-xl shadow-indigo-600/30 animate__animated animate__rubberBand hover:bg-indigo-600 hover:shadow-indigo-500/30">
            <a
              href="https://www.linkedin.com/in/gabriel-ricardes-578902214/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={assets.linkedin} className="p-2" />
            </a>
          </button>
          <button className="bg-indigo-500 w-11 rounded-full shadow-xl shadow-indigo-600/30 animate__animated animate__rubberBand hover:bg-indigo-600 hover:shadow-indigo-500/30">
            <a
              href="https://www.instagram.com/g___a___b___o/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={assets.instagram} className="p-2" />
            </a>
          </button>
          <button
            onClick={copiarCorreo}
            className="bg-indigo-500 w-11 mx-4 rounded-full shadow-xl shadow-indigo-600/30 animate__animated animate__rubberBand hover:bg-indigo-600 hover:shadow-indigo-500/30"
          >
            <img src={assets.correo} className="p-2" />
          </button>
          {copiado && (
            <p className="text-white text-lg bg-black/50 w-fit p-2 rounded-xl inline">
              Copiado!
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
