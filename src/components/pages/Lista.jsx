import React from "react";
import { proyectos } from "../../data/proyectos";
import { Link } from "react-router-dom";

function Lista({ category }) {
  const proyectosFiltrados = proyectos.filter(
    (proyecto) => proyecto.category === category
  );

  return (
    <div className="text-white">
      <p className="font-mono text-2xl">
        Proyectos realizados con <b className="italic">{category}</b>
      </p>
      {proyectosFiltrados.map(proyecto => (
        <article key={proyecto.id}>
          <ul>
            <li>
              <Link
                className="hover:text-indigo-500 text-xl font-medium"
                to={"/Proyecto/" + proyecto.id}
              >
                {proyecto.name}
              </Link>
            </li>
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Lista;
