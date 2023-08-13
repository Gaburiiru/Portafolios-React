import React from "react";
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <div
      className="
        bg-indigo-950
        h-screen
        w-72
        text-white
        text-center
        flex
        flex-col
        items-center
        justify-center
      "
    >
      <Link to="/Home">
        <img
          src="/src/assets/img/icon.jpg"
          className="w-40 rounded-full"
          alt="Icon"
        />
      </Link>
      <h1 className="p-6 subtitulos text-3xl text-indigo-300">GABO</h1>
      <nav>
        <ul className="flex flex-col space-y-2 text-2xl font-extralight">
          <li className="hover:text-indigo-700">
            <Link to="/SobreMi">Sobre mí</Link>
          </li>
          <li className="hover:text-indigo-700">
            <Link to="/Educacion">Educacion</Link>
          </li>
          <li className="hover:text-indigo-700">
            <Link to="/Portafolio">Portafolio</Link>
          </li>
          <li className="hover:text-indigo-700">
            <Link to="/Contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Layout() {
  return (
    <>
      <div className="flex">
        <Header />
        <div className="flex-grow flex items-center justify-center">
        <Outlet />
        </div>
      </div>
    </>
  );
}
export default Layout;
