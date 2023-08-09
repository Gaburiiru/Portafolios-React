import React from "react";
import "animate.css";

function SobreMi() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-indigo-300 text-4xl font-medium py-6 subtitulos hover:text-white animate__animated animate__flip">
        Sobre mí
      </h1>
      <div className="grid gap-6 grid-cols-3">
        <div className="bg-red-400 opacity-70 w-96 p-6 text-center font-normal text-lg text-white h-fit rounded-2xl hover:scale-110 hover:z-40 hover:opacity-100 shadow-xl hover:shadow-red-500/40">
          <h2 className=" text-3xl p-2">Presentación</h2>
          <p>
            Hola, soy Gabo. Encantado de conocerte Desde que emprendí mi camino
            como desarrollador web independiente hace más de un año, he estado
            inmerso en un constante aprendizaje de nuevas tecnologías,
            lenguajes, técnicas y metodologías de trabajo. Mi objetivo es
            involucrarme en oportunidades laborales, ya sean remotas,
            presenciales o en un formato mixto. Estoy dispuesto a aportar mis
            conocimientos de manera asesorada como trainee o colaborando en la
            creación de páginas web profesionales, tanto para uso comercial como
            para un público más específico. Mi enfoque se caracteriza por la
            confianza en mí mismo, una curiosidad innata y un compromiso
            constante con la mejora de mis habilidades.
          </p>
        </div>
        <div className="bg-cyan-400 opacity-70 hover:opacity-100 w-96 p-6 text-center font-normal text-lg text-white h-fit rounded-2xl hover:scale-125 hover:z-40 shadow-xl hover:shadow-cyan-500/40">
          <h2 className=" text-3xl p-2">Información</h2>
          <p>🗿 Tengo 21 años</p>
          <p>🎧 Me gusta la música</p>
          <p>🎨 Me gusta el arte</p>
          <p>🎮 Me gustan los videojuegos</p>
          <p>💻 Me gusta la tecnología y la Programación</p>
        </div>
        <div className="bg-emerald-400 opacity-70 hover:opacity-100 w-96 p-6 text-center font-normal text-lg text-white h-fit rounded-2xl hover:scale-125 hover:z-40 shadow-xl hover:shadow-emerald-500/40">
          <h2 className=" text-3xl p-2">Actualmente</h2>
          <p>
            Estoy estudiando en la universidad Desarrollo de aplicaciones
            moviles y aprendiendo de forma independiente React, por lo que
            utilizo:
          </p>
          <ul className="flex flex-col items-center">
            <li>
              <a
                href="https://es.react.dev/"
                className="flex items-center p-2 hover:text-indigo-500"
              >
                <img
                  src="\src\assets\img\react-icon.png"
                  className="w-14 px-2"
                />
                React
              </a>
            </li>
            <li>
              <a
                href="https://es.wikipedia.org/wiki/JavaScript"
                className="flex items-center p-2 hover:text-indigo-500"
              >
                <img src="\src\assets\img\js-icon.png" className="w-12 px-2" />
                JavaScript
              </a>
            </li>
            <li>
              <a
                href="https://kotlinlang.org/"
                className="flex items-center p-2 hover:text-indigo-500"
              >
                <img
                  src="\src\assets\img\kotlin-icon.jpg"
                  className="w-12 px-2"
                />
                Kotlin
              </a>
            </li>
            <li>
              <a
                href="https://www.java.com/es/"
                className="flex items-center p-2 hover:text-indigo-500"
              >
                <img
                  src="\src\assets\img\java-icon.png"
                  className="w-14 px-2"
                />{" "}
                java
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
