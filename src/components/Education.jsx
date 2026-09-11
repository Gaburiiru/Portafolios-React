import React from "react";
import { SectionHeader } from "./Shared";
import { educacion } from "../data/content";

export default function Education() {
  return (
    <section id="educacion" className="relative max-w-6xl mx-auto px-5 py-20 sm:py-28">
      <SectionHeader index={6} subtitle="EDUCACIÓN" title="FORMACIÓN" />

      <div className="space-y-5">
        {educacion.map((e, i) => (
          <div
            key={e.titulo}
            className="neon-card rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          >
            <div className="flex items-start gap-4">
              <span className="font-display text-neonpurple text-2xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="font-display text-lg text-white">{e.titulo}</h4>
                <p className="text-white/60 text-sm mt-1">{e.institucion}</p>
              </div>
            </div>
            <p className="font-mono text-sm text-neoncyan whitespace-nowrap sm:pl-4">
              {e.periodo}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
