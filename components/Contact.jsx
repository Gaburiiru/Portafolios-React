import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaRegCopy } from "react-icons/fa";
import { SectionHeader } from "./Shared";
import { perfil } from "../data/content";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(perfil.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contacto" className="relative max-w-6xl mx-auto px-5 py-20 sm:py-28">
      <SectionHeader index={7} subtitle="CONTACTO" title="HABLEMOS" />

      <div className="neon-card rounded-2xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="tag-label text-xs mb-3">// ESCRIBIME</p>
          <button
            onClick={copyEmail}
            className="flex items-center gap-3 font-mono text-lg sm:text-2xl text-white hover:text-neonpink transition group"
          >
            {perfil.email}
            <FaRegCopy className="text-neoncyan group-hover:text-neonpink" size={16} />
          </button>
          {copied && (
            <span className="block mt-2 font-mono text-xs text-neongreen">copiado ✓</span>
          )}

          <p className="tag-label text-xs mt-8 mb-3">// TELÉFONO</p>
          <a
            href={`https://wa.me/5491169965856`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-mono text-white/80 hover:text-neongreen transition"
          >
            <FaWhatsapp /> {perfil.telefono}
          </a>
        </div>

        <div>
          <p className="tag-label text-xs mb-4">// REDES</p>
          <div className="flex flex-col gap-3 font-mono text-sm">
            <a
              href={perfil.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-neoncyan link-underline w-fit"
            >
              <FaGithub /> GitHub ↗
            </a>
            <a
              href={perfil.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-neoncyan link-underline w-fit"
            >
              <FaLinkedin /> LinkedIn ↗
            </a>
            <a
              href={perfil.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-neoncyan link-underline w-fit"
            >
              <FaInstagram /> Instagram ↗
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 font-mono text-xs text-white/50">
            <span className="w-2 h-2 rounded-full bg-neongreen animate-pulse" />
            Disponible — {perfil.ubicacion}
          </div>
        </div>
      </div>
    </section>
  );
}
