import React, { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import yo from '/src/assets/img/yo.jpg'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const is2xl = useMediaQuery("(min-width: 1536px)");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button
        className="
        lg:hidden
        p-2
        rounded-md
        text-white
        absolute
        top-0
        right-0
        m-4
        z-20
        bg-indigo-950
        "
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
          
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`
        bg-indigo-950 
        text-white 
        text-center 
        w-72
        min-h-screen 
        lg:flex 
        lg:flex-col 
        py-48
        
        ${menuOpen ? "block w-full absolute z-10 h-full py-20" : "hidden"}`}
      >
        <div className="grid justify-center">
          {is2xl ? (
            <Link to="/Home">
              <img
                src={yo}
                className="
                  m-4 w-40
                  rounded-full
                  border-4
                  border-indigo-500/100
                  shadow-xl
                  hover:shadow-indigo-600/30
                  animate__animated
                  animate__pulse"
                alt="Icon"
              />
            </Link>
          ) : (
            <a href="/Home">
              <img
                src="/src/assets/img/yo.jpg"
                className="
                  m-4 w-40
                  rounded-full
                  border-4
                  border-indigo-500/100
                  shadow-xl
                  hover:shadow-indigo-600/30
                  animate__animated
                  animate__pulse"
                alt="Icon"
              />
            </a>
          )}
          <h1 className="p-6 subtitulos text-3xl text-indigo-300">GABO</h1>
          <nav>
            <ul className="flex flex-col space-y-2 text-2xl font-extralight">
              <li className="hover:text-indigo-500">
                {is2xl ? (
                  <NavLink
                    to="/SobreMi"
                    className={({ isActive }) =>
                      isActive ? "text-indigo-500 font-normal" : ""
                    }
                  >
                    Sobre mí
                  </NavLink>
                ) : (
                  <a href="/SobreMi" className="hover:text-indigo-500">
                    Sobre mí
                  </a>
                )}
              </li>
              <li className="hover:text-indigo-500">
                {is2xl ? (
                  <NavLink
                    to="/Portafolio"
                    className={({ isActive }) =>
                      isActive ? "text-indigo-500 font-normal" : ""
                    }
                  >
                    Portafolio
                  </NavLink>
                ) : (
                  <a href="/PortafolioMobile" className="hover:text-indigo-500">
                    Portafolio
                  </a>
                )}
              </li>
              <li className="hover:text-indigo-500">
                {is2xl ? (
                  <NavLink
                    to="/Educacion"
                    className={({ isActive }) =>
                      isActive ? "text-indigo-500 font-normal" : ""
                    }
                  >
                    Educacion
                  </NavLink>
                ) : (
                  <a href="/Educacion" className="hover:text-indigo-500">
                    Educacion
                  </a>
                )}
              </li>
              <li className="hover:text-indigo-500">
                {is2xl ? (
                  <NavLink
                    to="/Contacto"
                    className={({ isActive }) =>
                      isActive ? "text-indigo-500 font-normal" : ""
                    }
                  >
                    Contacto
                  </NavLink>
                ) : (
                  <a href="/Contacto" className="hover:text-indigo-500">
                    Contacto
                  </a>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

function Layout() {
  return (
    <>
      <div className="flex relative">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
