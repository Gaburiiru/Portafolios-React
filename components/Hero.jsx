import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload, FaCoffee } from "react-icons/fa";
import { Marquee } from "./Shared";
import { perfil } from "../data/content";
import { getOrIncrementVisits, bumpCoffees, getCoffees } from "../utils/visits";

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

export default function Hero() {
  const typed = useTypedRoles();
  const time = useClock();
  const [copied, setCopied] = useState(false);
  const [visits, setVisits] = useState(1);
  const [coffees, setCoffees] = useState(0);
  const [bump, setBump] = useState(false);

  useEffect(() => {
    setVisits(getOrIncrementVisits());
    setCoffees(getCoffees());
  }, []);

  const invitarCafe = () => {
    setCoffees(bumpCoffees());
    setBump(true);
    setTimeout(() => setBump(false), 350);
  };

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
        <div className="sun animate-flicker" />
        <div className="grid-floor" />
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
            className="font-mono text-sm px-5 py-3 rounded border border-neoncyan/60 text-neoncyan hover:bg-neoncyan/10 hover:shadow-neoncyan transition"
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

          <button
            onClick={invitarCafe}
            className={`flex items-center gap-2 font-mono text-xs px-4 py-2.5 rounded-full border border-neonyellow/50 text-neonyellow hover:bg-neonyellow/10 transition ${
              bump ? "scale-110" : "scale-100"
            }`}
          >
            <FaCoffee /> invitame un café{coffees > 0 ? ` (${coffees})` : ""}
          </button>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs text-white/50">
          <span>ROL <span className="text-white/80">DEV FRONT-END / ANDROID</span></span>
          <span>UBICACIÓN <span className="text-white/80">{perfil.ubicacion.toUpperCase()}</span></span>
          <span>STACK <span className="text-white/80">REACT · VUE · TYPESCRIPT · KOTLIN</span></span>
          <span>HORA LOCAL <span className="text-neonpink">{time}</span></span>
          <span>
            SOS LA VISITA <span className="text-neongreen">#{visits}</span> ACÁ
          </span>
        </div>
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
