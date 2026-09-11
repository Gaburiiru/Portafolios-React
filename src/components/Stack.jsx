import React from "react";
import { SectionHeader, TechIcon } from "./Shared";
import { stack } from "../data/content";

export default function Stack() {
  return (
    <section id="stack" className="relative max-w-6xl mx-auto px-5 py-20 sm:py-28">
      <SectionHeader index={4} subtitle="STACK & HERRAMIENTAS" title="LO QUE USO" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(stack).map(([categoria, items]) => (
          <div key={categoria} className="neon-card rounded-xl p-6">
            <p className="font-mono text-xs tracking-widest text-neonpink mb-5">
              {categoria.toUpperCase()}
            </p>
            <div className="flex flex-wrap gap-3">
              {items.map((item) => (
                <div
                  key={item.nombre}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-void/50 border border-white/10 hover:border-neoncyan/50 transition text-sm text-white/80"
                >
                  <TechIcon icon={item.icon} lib={item.lib} size={16} />
                  {item.nombre}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
