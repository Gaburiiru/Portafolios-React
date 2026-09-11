import React from "react";
import { FaMusic, FaGamepad } from "react-icons/fa";
import { SectionHeader, Badge } from "./Shared";
import { personal } from "../data/content";

export default function Personal() {
  return (
    <section id="fuera-del-codigo" className="relative max-w-6xl mx-auto px-5 py-20 sm:py-28">
      <SectionHeader index={2} subtitle="FUERA DEL CÓDIGO" title="ADEMÁS DE ESCRIBIR CÓDIGO" />

      <div className="space-y-5 max-w-3xl">
        <p className="text-white/75 leading-relaxed">{personal.intro}</p>
        <p className="text-white/75 leading-relaxed">{personal.gamerBit}</p>
        <p className="text-white/75 leading-relaxed">{personal.puente}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        <div className="neon-card rounded-xl p-6">
          <p className="flex items-center gap-2 font-mono text-xs tracking-widest text-neonpink mb-4">
            <FaMusic /> EN LOOP
          </p>
          <div className="flex flex-wrap gap-2">
            {personal.musica.map((g) => (
              <Badge key={g}>{g}</Badge>
            ))}
          </div>
        </div>

        <div className="neon-card rounded-xl p-6">
          <p className="flex items-center gap-2 font-mono text-xs tracking-widest text-neoncyan mb-4">
            <FaGamepad /> GAME OVER... OTRA VEZ
          </p>
          <div className="flex flex-wrap gap-2">
            {personal.gaming.map((g) => (
              <Badge key={g}>{g}</Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="neon-card rounded-xl p-6 sm:p-8 mt-6">
        <p className="tag-label text-xs mb-3">// CÓMO LLEGUÉ ACÁ</p>
        <p className="text-white/75 leading-relaxed">{personal.origen}</p>
        <p className="text-white/60 leading-relaxed mt-4 border-t border-white/10 pt-4">
          {personal.aprendiendo}
        </p>
      </div>
    </section>
  );
}
