import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { SectionHeader, Badge } from "./Shared";
import { proyectosWeb, proyectosMovil } from "../data/content";

const withProtocol = (url) => (url.startsWith("http") ? url : `https://${url}`);

function CardMedia({ image, title }) {
  if (image) {
    return (
      <div className="card-media relative h-44 overflow-hidden">
        <img
          src={image}
          alt={`Captura de ${title}`}
          loading="lazy"
          className="w-full h-full object-cover object-top brightness-90 contrast-[1.08] saturate-[1.15] group-hover:scale-105 group-hover:brightness-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neonpurple/25 via-transparent to-neoncyan/15 mix-blend-color" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#150a2e] via-[#150a2e]/55 to-transparent" />
      </div>
    );
  }

  const initials = title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="card-media relative h-44 grid place-items-center overflow-hidden bg-gradient-to-br from-panel to-deep">
      <div className="sun absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-25 blur-2xl" />
      <div className="relative w-20 h-32 rounded-2xl border-2 border-neoncyan/60 grid place-items-center shadow-neoncyan group-hover:border-neonpink group-hover:shadow-neonpink transition">
        <span className="absolute top-1.5 w-6 h-1 rounded-full bg-neoncyan/50" />
        <span className="font-display font-black text-2xl text-white">{initials}</span>
      </div>
    </div>
  );
}

function CardLink({ href, icon, label, tone }) {
  const tones = {
    cyan: "border-neoncyan/50 text-neoncyan hover:bg-neoncyan hover:text-void",
    pink: "border-neonpink/50 text-neonpink hover:bg-neonpink hover:text-void",
  };
  return (
    <a
      href={withProtocol(href)}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded border font-mono text-xs tracking-widest transition ${tones[tone]}`}
    >
      {icon} {label}
    </a>
  );
}

function ProjectCard({ title, kind, image, description, tecnology, url, urlLabel, git, nota }) {
  return (
    <article className="neon-card hud-corners rounded-xl overflow-hidden group flex flex-col">
      <CardMedia image={image} title={title} />
      <div className="p-5 -mt-2 relative flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h4 className="font-display text-lg text-white group-hover:text-neoncyan transition">{title}</h4>
          {kind && (
            <span className="shrink-0 mt-1 font-mono text-[10px] text-neonpink/80 uppercase">{kind}</span>
          )}
        </div>
        <p className="text-white/60 text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tecnology.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3">
          {url && <CardLink href={url} icon={<FaExternalLinkAlt size={10} />} label={urlLabel} tone="cyan" />}
          {git && <CardLink href={git} icon={<FaGithub size={12} />} label="CÓDIGO" tone="pink" />}
          {!url && !git && (
            <span className="flex items-center gap-2 font-mono text-xs text-white/40">
              <FaLock size={10} /> {nota ?? "Proyecto de cursada · sin repo público"}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

const TABS = [
  { key: "mobile", label: "ANDROID" },
  { key: "web", label: "WEB" },
];

export default function Projects() {
  const [tab, setTab] = useState("mobile");

  return (
    <section id="proyectos" className="relative max-w-6xl mx-auto px-5 py-20 sm:py-28">
      <SectionHeader index={3} subtitle="PROYECTOS" title="COSAS QUE CONSTRUÍ" />

      <div role="tablist" className="flex gap-3 mb-10 font-mono text-sm">
        {TABS.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={tab === t.key}
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
          ? proyectosWeb.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.name}
                image={p.image}
                description={p.description}
                tecnology={p.tecnology}
                url={p.url}
                urlLabel="DEMO"
                git={p.git}
              />
            ))
          : proyectosMovil.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.nombre}
                kind={p.type}
                image={p.image}
                description={p.description}
                tecnology={p.tecnology}
                url={p.url}
                urlLabel="APK"
                git={p.git}
                nota={p.nota}
              />
            ))}
      </div>
    </section>
  );
}
