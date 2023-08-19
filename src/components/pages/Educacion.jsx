import React from "react";
import "animate.css";
import assets from "../../assets/assets";


function Educacion() {
  return (
    <div className="flex flex-col items-center">
      <h1
        className="
          text-indigo-300
          text-3xl
          sm:text-4xl
          py-6
          subtitulos
          hover:text-white
          animate__animated
          animate__wobble
        "
      >
        Educación
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 m-4">
        <div className="mx-auto sm:w-128 bg-violet-500 opacity-70 hover:opacity-100 h-fit p-6 text-center font-normal text-lg text-white rounded-2xl sm:hover:scale-110 sm:hover:z-40 shadow-xl hover:shadow-violet-500/40">
          <h2 className="text-3xl p-2">Mis estudios</h2>
          <p>
            Realize mis estudios secundarios en la Tecnica N°14, Poseo el titulo
            secundario de
            <a href="https://www.facebook.com/tecnica.catorce/?locale=es_LA">
              <b className="hover:text-indigo-600">
                Tecnico en Programacion (2013-2020).
              </b>
              🎓
            </a>
          </p>
          <p>
            Realize una diplomatura en la CUDI de
            <a href="https://www.cudi.ar/oferta-academica/area-diplomaturas/desarrollo-de-software/">
              <b className="hover:text-indigo-600">
                {" "}
                Desarrollo de Software WEB (2021-2022).
              </b>
              💻
            </a>
          </p>
          <p>
            Actualmente estudio una tecnicatura universitaria en la UNLAM de
            <a href="https://www.unlam.edu.ar/index.php?seccion=3&idArticulo=670">
              <b className="hover:text-indigo-600">
                Desarrollo de Aplicaciones Móviles (2021-Actual).
              </b>
              ☎️
            </a>
          </p>
        </div>
        <div className="mx-auto sm:w-128 bg-lime-400 opacity-70 hover:opacity-100 p-6 text-center font-normal text-lg text-white h-fit rounded-2xl sm:hover:scale-110 sm:hover:z-40 shadow-xl hover:shadow-lime-500/40 mb-40">
          <h2 className="text-3xl p-2">Tecnologías</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div >
              <ul>
                <p className="py-2">
                  <b>Para realizar paginas web utilizo:</b>
                </p>
                <li>
                  <a
                    href="https://es.wikipedia.org/wiki/JavaScript"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-2 hover:text-indigo-500"
                  >
                    <img
                      src={assets.js}
                      className="w-12 px-2"
                    />
                    JavaScript
                  </a>
                </li>
                <li>
                  <a
                    href="https://es.wikipedia.org/wiki/CSS"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-2 hover:text-indigo-500"
                  >
                    <img
                      src={assets.css}
                      className="w-12 px-2"
                    />
                    CSS
                  </a>
                </li>
                <li>
                  <a
                    href="https://es.wikipedia.org/wiki/HTML"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-2 hover:text-indigo-500"
                  >
                    <img
                      src={assets.html}
                      className="w-12 px-2"
                    />
                    HTML
                  </a>
                </li>
                <li>
                  <a
                    href="https://es.wikipedia.org/wiki/SQL"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-2 hover:text-indigo-500"
                  >
                    <img
                      src={assets.sql}
                      className="w-12 px-2"
                    />
                    SQL
                  </a>
                </li>
                <li>
                  <a
                    href="https://es.react.dev/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-2 hover:text-indigo-500"
                  >
                    <img
                      src={assets.react}
                      className="w-12 px-2"
                    />
                    REACT
                  </a>
                </li>
                <li>
                  <a
                    href="https://getbootstrap.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-2 hover:text-indigo-500"
                  >
                    <img
                      src={assets.bootstrap}
                      className="w-12 px-2"
                    />
                    Bootstrap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <p className="py-2">
                  <b>Tambien poseo conocimientos en:</b>
                </p>
                <li>
                  <a
                    href="https://www.microsoft.com/es-es/sql-server/sql-server-downloads"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-2 hover:text-indigo-500"
                  >
                    <img
                      src={assets.sql_server}
                      className="w-12 px-2"
                    />
                    SQL Server
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.python.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-2 hover:text-indigo-500"
                  >
                    <img
                      src={assets.python}
                      className="w-12 px-2"
                    />
                    Python
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.java.com/es/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-2 hover:text-indigo-500"
                  >
                    <img
                      src={assets.java}
                      className="w-12 px-2"
                    />
                    Java
                  </a>
                </li>
                <li>
                  <a
                    href="https://kotlinlang.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-2 hover:text-indigo-500"
                  >
                    <img
                      src={assets.kotlin}
                      className="w-12 px-2"
                    />
                    Kotlin
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.php.net/manual/es/intro-whatis.php"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-2 hover:text-indigo-500"
                  >
                    <img
                      src={assets.php}
                      className="w-12 px-2"
                    />
                    PHP
                  </a>
                </li>
                <li>
                  <a
                    href="https://firebase.google.com/?hl=es"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-2 hover:text-indigo-500"
                  >
                    <img
                      src={assets.firebase}
                      className="w-12 px-2"
                    />
                    Firebase
                  </a>
                </li>
                <li>
                  <a
                    href="https://es.wikipedia.org/wiki/Bash"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-2 hover:text-indigo-500"
                  >
                    <img
                      src={assets.bash}
                      className="w-12 px-2"
                    />
                    Bash
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Educacion;
