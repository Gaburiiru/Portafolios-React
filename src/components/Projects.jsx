import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaMobileAlt } from "react-icons/fa";
import { SectionHeader, Badge } from "./Shared";
import { proyectosWeb, proyectosMovil } from "../data/content";

function WebCard({ p }) {
  return (
    <div className="neon-card rounded-xl overflow-hidden group">
      <div className="relative h-44 overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-full object-cover object-top brightness-90 contrast-[1.08] saturate-[1.15] group-hover:scale-105 group-hover:brightness-100 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neonpurple/25 via-transparent to-neoncyan/15 mix-blend-color" />
        <div
          className="absolute inset-x-0 bottom-0 h-24"
          style={{
            background:
              "linear-gradient(to top, rgba(21,10,46,0.95) 0%, rgba(21,10,46,0.55) 45%, transparent 100%)",
          }}
        />
      </div>
      <div className="p-5 -mt-2 relative">
        <h4 className="font-display text-lg text-white mb-2">{p.name}</h4>
        <p className="text-white/60 text-sm leading-relaxed mb-3">{p.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {p.tecnology.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <div className="flex gap-4 font-mono text-xs">
          {p.url && (
            <a
              href={p.url.startsWith("http") ? p.url : `https://${p.url}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-neoncyan hover:text-white link-underline"
            >
              <FaExternalLinkAlt size={11} /> DEMO
            </a>
          )}
          {p.git && (
            <a
              href={p.git.startsWith("http") ? p.git : `https://${p.git}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-neonpink hover:text-white link-underline"
            >
              <FaGithub size={13} /> CÓDIGO
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function MobileCard({ p }) {
  return (
    <div className="neon-card rounded-xl overflow-hidden group">
      {p.image ? (
        <div className="relative h-44 overflow-hidden">
          <img
            src={p.image}
            alt={p.nombre}
            className="w-full h-full object-cover object-top brightness-90 contrast-[1.08] saturate-[1.15] group-hover:scale-105 group-hover:brightness-100 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neonpurple/25 via-transparent to-neoncyan/15 mix-blend-color" />
          <div
            className="absolute inset-x-0 bottom-0 h-24"
            style={{
              background:
                "linear-gradient(to top, rgba(21,10,46,0.95) 0%, rgba(21,10,46,0.55) 45%, transparent 100%)",
            }}
          />
        </div>
      ) : (
        <div className="relative h-44 grid place-items-center overflow-hidden bg-gradient-to-br from-panel to-deep">
          <div className="sun absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-25 blur-2xl" />
          <FaMobileAlt size={36} className="relative text-neoncyan/70" />
        </div>
      )}
      <div className="p-5 -mt-2 relative">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-display text-lg text-white">{p.nombre}</h4>
          <span className="font-mono text-[10px] text-neonpink/80 uppercase">{p.type}</span>
        </div>
        <p className="text-white/60 text-sm leading-relaxed mb-3">{p.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {p.tecnology.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <div className="flex gap-4 font-mono text-xs">
          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-neoncyan hover:text-white link-underline"
            >
              <FaExternalLinkAlt size={11} /> APK
            </a>
          )}
          {p.git && (
            <a
              href={p.git}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-neonpink hover:text-white link-underline"
            >
              <FaGithub size={13} /> CÓDIGO
            </a>
          )}
          {!p.url && !p.git && (
            <span className="text-white/30">Proyecto de cursada · sin repo público</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [tab, setTab] = useState("web");

  return (
    <section id="proyectos" className="relative max-w-6xl mx-auto px-5 py-20 sm:py-28">
      <SectionHeader index={3} subtitle="PROYECTOS" title="COSAS QUE CONSTRUÍ" />

      <div className="flex gap-3 mb-10 font-mono text-sm">
        {[
          { key: "web", label: "WEB" },
          { key: "mobile", label: "ANDROID" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 rounded-full border transition ${
              tab === t.key
                ? "border-neonpink text-neonpink bg-neonpink/10 shadow-neonpink"
                : "border-white/15 text-white/50 hover:border-neoncyan/50 hover:text-neoncyan"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {tab === "web"
          ? proyectosWeb.map((p) => <WebCard key={p.id} p={p} />)
          : proyectosMovil.map((p) => <MobileCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
