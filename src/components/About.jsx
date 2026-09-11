import React from "react";
import { SectionHeader } from "./Shared";
import { perfil } from "../data/content";
import yo from "../assets/yo.jpg";

export default function About() {
  return (
    <section id="sobre" className="relative max-w-6xl mx-auto px-5 py-20 sm:py-28">
      <SectionHeader index={1} subtitle="SOBRE MI" title="QUIÉN SOY" />

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
        <div className="relative mx-auto lg:mx-0 w-56 sm:w-64">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-neoncyan via-neonpurple to-neonpink opacity-40 blur-lg" />
          <img
            src={yo}
            alt="Foto de Gabriel Ricardes"
            className="relative rounded-2xl border-2 border-neoncyan/40 grayscale hover:grayscale-0 transition duration-500 w-full object-cover aspect-[4/5]"
          />
          <p className="mt-3 text-center font-mono text-[11px] text-neoncyan/70 tracking-widest">
            GABRIEL_R.JPG © {new Date().getFullYear()}
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-white/80 leading-relaxed">{perfil.bio}</p>
          <p className="text-white/60 leading-relaxed">{perfil.bioSecundaria}</p>

          <div className="neon-card rounded-xl p-6">
            <p className="tag-label text-xs mb-3">// AHORA MISMO</p>
            <ul className="space-y-2 font-mono text-sm text-white/80">
              {perfil.ahoraMismo.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-neonpink">→</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
