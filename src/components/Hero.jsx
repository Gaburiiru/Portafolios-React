import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload } from "react-icons/fa";
import { Marquee, Equalizer } from "./Shared";
import { perfil, personal } from "../data/content";

const ROLES = [
  "Front-end Developer",
  "Android Developer",
  "React & TypeScript",
  "Vue 2 & Vuex",
  "Kotlin & Jetpack Compose",
  "adicto profesional al café",
];

function useTypedRoles() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex % ROLES.length];
    const speed = deleting ? 35 : 65;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1200);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return text;
}

function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("es-AR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const GENRE_MILLIS = 2600;

/** Recorre los géneros que escucho, uno cada pocos segundos. */
function useRotatingGenre() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % personal.musica.length), GENRE_MILLIS);
    return () => clearInterval(id);
  }, []);
  return personal.musica[index];
}

export default function Hero() {
  const typed = useTypedRoles();
  const time = useClock();
  const genre = useRotatingGenre();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(perfil.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="top" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Fondo synthwave */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#150a2e] via-[#0a0316] to-[#0a0316]" />
        <div className="sun hero-sun animate-flicker" />
        <div className="grid-floor" />
        <div className="hero-scrim absolute inset-0" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-6xl w-full mx-auto px-5 pt-28 pb-16">
        <p className="tag-label text-xs sm:text-sm mb-4">
          [ 00 ] DEV FRONT-END &amp; MOBILE · PRESIONÁ COSAS, ROMPÉ COSAS
        </p>

        <h1
          data-text="GABRIEL RICARDES"
          className="glitch font-display text-4xl sm:text-6xl md:text-7xl font-black leading-[1.05]"
        >
          GABRIEL RICARDES
        </h1>

        <p className="mt-5 font-mono text-lg sm:text-2xl text-neoncyan h-8">
          &gt; {typed}
          <span className="blink-cursor" />
        </p>

        <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
          {perfil.experienciaTexto} construyendo interfaces que se sienten bien, de la web al mobile.
          Sin humo: acá abajo hay proyectos de verdad, código de verdad y un poquito de humor.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="/Gabriel_Ricardes_CV.pdf"
            download
            className="flex items-center gap-2 font-mono text-sm px-5 py-3 rounded bg-neonpink text-void font-bold hover:shadow-neonpink transition shadow-neon"
          >
            <FaDownload /> Descargar CV
          </a>
          <a
            href="#proyectos"
            className="font-mono text-sm px-5 py-3 rounded border border-neoncyan/60 bg-void/60 text-neoncyan hover:bg-neoncyan/10 hover:shadow-neoncyan transition"
          >
            Ver proyectos
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <SocialBtn href={perfil.github} label="GitHub"><FaGithub /></SocialBtn>
          <SocialBtn href={perfil.linkedin} label="LinkedIn"><FaLinkedin /></SocialBtn>
          <SocialBtn href={perfil.instagram} label="Instagram"><FaInstagram /></SocialBtn>
          <button
            onClick={copyEmail}
            aria-label="Copiar email"
            className="w-11 h-11 grid place-items-center rounded-full border border-neoncyan/50 text-neoncyan hover:bg-neoncyan/10 hover:shadow-neoncyan transition"
          >
            <FaEnvelope />
          </button>
          {copied && (
            <span className="font-mono text-xs text-neongreen border border-neongreen/40 px-2 py-1 rounded">
              email copiado ✓
            </span>
          )}
        </div>

        <dl className="hud-readout mt-14 grid grid-cols-2 lg:grid-cols-5 font-mono text-xs max-w-5xl">
          <Readout label="ROL" value="DEV FRONT-END / ANDROID" />
          <Readout label="UBICACIÓN" value={perfil.ubicacion.toUpperCase()} />
          <Readout label="HORA LOCAL" value={time} tone="text-neonpink" />
          <Readout label="EN LOOP">
            <span className="flex items-center gap-2 text-neoncyan">
              <Equalizer /> {genre.toUpperCase()}
            </span>
          </Readout>
          <Readout label="STACK" value="REACT · VUE · KOTLIN" tone="text-neongreen" wide />
        </dl>
      </div>

      <div className="relative z-10">
        <Marquee
          items={[
            "REACT",
            "VUE 2",
            "TYPESCRIPT",
            "KOTLIN",
            "JETPACK COMPOSE",
            "CLEAN ARCHITECTURE",
            "MVVM",
            "PWA",
            "NODE.JS",
            "MQTT",
          ]}
        />
      </div>
    </section>
  );
}

function Readout({ label, value, tone = "text-white/85", wide = false, children }) {
  return (
    <div className={`px-4 py-3 border border-neoncyan/15 -ml-px -mt-px bg-void/40 ${wide ? "col-span-2 lg:col-span-1" : ""}`}>
      <dt className="text-[10px] tracking-widest text-white/40 mb-1">{label}</dt>
      <dd className={tone}>{children ?? value}</dd>
    </div>
  );
}

function SocialBtn({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-11 h-11 grid place-items-center rounded-full border border-neonpink/50 text-neonpink hover:bg-neonpink/10 hover:shadow-neonpink transition"
    >
      {children}
    </a>
  );
}
