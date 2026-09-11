import React, { useState } from "react";
import { SectionHeader, Badge } from "./Shared";
import { experiencia } from "../data/content";

function ProyectoDigicard({ proyecto, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="neon-card rounded-xl p-5 sm:p-6">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <h4 className="font-display text-lg sm:text-xl text-white">{proyecto.nombre}</h4>
        <span className="text-neonpink font-mono text-xl leading-none">{open ? "–" : "+"}</span>
      </button>

      <div className="flex flex-wrap gap-2 mt-3">
        {proyecto.stack.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>

      <p className="text-white/60 text-sm mt-4 leading-relaxed">{proyecto.detalle}</p>

      {open && (
        <ul className="mt-4 space-y-2 font-mono text-sm text-white/75 border-t border-white/10 pt-4">
          {proyecto.bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-neoncyan">▸</span> {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experiencia" className="relative max-w-6xl mx-auto px-5 py-20 sm:py-28">
      <SectionHeader index={3} subtitle="EXPERIENCIA" title="TRAYECTORIA PROFESIONAL" />

      {experiencia.map((exp) => (
        <div key={exp.empresa} className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6 border-b border-neoncyan/20 pb-4">
            <div>
              <h3 className="font-display text-2xl text-white">
                {exp.puesto} <span className="text-neonpink">@ {exp.empresa}</span>
              </h3>
              <p className="font-mono text-xs text-white/50 mt-1">{exp.modalidad}</p>
            </div>
            <p className="font-mono text-sm text-neoncyan whitespace-nowrap">{exp.periodo}</p>
          </div>

          <p className="text-white/70 mb-8 leading-relaxed max-w-3xl">{exp.resumen}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {exp.proyectos.map((p) => (
              <ProyectoDigicard key={p.nombre} proyecto={p} defaultOpen={true} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
