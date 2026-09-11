import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const LINKS = [
  { href: "#sobre", label: "SOBRE_MI" },
  { href: "#fuera-del-codigo", label: "FUERA_DEL_CÓDIGO" },
  { href: "#experiencia", label: "EXPERIENCIA" },
  { href: "#proyectos", label: "PROYECTOS" },
  { href: "#stack", label: "STACK" },
  { href: "#educacion", label: "EDUCACION" },
  { href: "#contacto", label: "CONTACTO" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-void/85 backdrop-blur border-b border-neoncyan/20" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <a href="#top" className="font-display text-lg text-white tracking-widest">
          GABO<span className="text-neonpink">.</span>DEV
        </a>

        <ul className="hidden lg:flex items-center gap-7 font-mono text-xs tracking-widest">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-neoncyan/80 hover:text-neonpink link-underline">
                [{l.label}]
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/Gabriel_Ricardes_CV.pdf"
          download
          className="hidden lg:flex items-center gap-2 text-xs font-mono border border-neonpink/60 text-neonpink px-3 py-2 rounded hover:bg-neonpink/10 hover:shadow-neonpink transition"
        >
          <FaDownload size={12} /> CV
        </a>

        <button
          className="lg:hidden text-white text-xl"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-void/95 backdrop-blur border-t border-neoncyan/20 px-5 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-neoncyan/90 tracking-widest"
            >
              [{l.label}]
            </a>
          ))}
          <a
            href="/Gabriel_Ricardes_CV.pdf"
            download
            className="text-sm font-mono border border-neonpink/60 text-neonpink px-3 py-2 rounded w-fit"
          >
            ↓ Descargar CV
          </a>
        </div>
      )}
    </header>
  );
}
