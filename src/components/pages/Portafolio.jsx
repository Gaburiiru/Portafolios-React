import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { proyectos } from "../../data/proyectos";
import { Link } from "react-router-dom";

function Portafolio() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-indigo-300 text-4xl font-medium py-6 subtitulos hover:text-white animate__animated animate__swing">
        Portafolio
      </h1>
      <div className="flex justify-center items-center w-170 h-fit hover:scale-110 rounded-xl shadow-xl hover:shadow-black/50">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          autoPlay={true}
          interval={3000}
          stopOnHover={true}
          animationHandler={"fade"}
          useKeyboardArrows
        >
          {proyectos.map((proyecto) => (
            <Link
              className="relative hover:text-indigo-500 text-xl font-medium"
              to={"/Proyecto/" + proyecto.id}
              key={proyecto.id}
            >
              <div className="relative">
                <img
                  src={proyecto.image}
                  alt={proyecto.id}
                  className="rounded-xl shadow-2xl contrast-75 brightness-50"
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
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
      <Link to="/ListadoProyectos">
        <button className="bg-indigo-500 my-10 px-4 py-1 rounded-xl shadow-xl shadow-indigo-600/30 font-mono text-lg text-white animate__animated animate__lightSpeedInRight hover:bg-indigo-600">
          Ver mas +
        </button>
      </Link>
    </div>
  );
}

export default Portafolio;
