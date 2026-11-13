import React, { useEffect, useRef, useState } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiKotlin,
  SiPhp,
  SiPython,
  SiReact,
  SiVuedotjs,
  SiVuetify,
  SiTailwindcss,
  SiBootstrap,
  SiJetpackcompose,
  SiNodedotjs,
  SiExpress,
  SiMqtt,
  SiFirebase,
  SiSqlite,
  SiGit,
  SiGithub,
  SiGitlab,
  SiAndroidstudio,
} from "react-icons/si";
import { FaJava, FaDatabase, FaMicrochip } from "react-icons/fa";

const SI_ICONS = {
  SiJavascript,
  SiTypescript,
  SiKotlin,
  SiPhp,
  SiPython,
  SiReact,
  SiVuedotjs,
  SiVuetify,
  SiTailwindcss,
  SiBootstrap,
  SiJetpackcompose,
  SiNodedotjs,
  SiExpress,
  SiMqtt,
  SiFirebase,
  SiSqlite,
  SiGit,
  SiGithub,
  SiGitlab,
  SiAndroidstudio,
};

const FA_ICONS = { FaJava, FaDatabase };

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&@<>/\\";
const DECRYPT_MILLIS = 700;
const DECRYPT_FRAME_MILLIS = 35;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Muestra el texto "descifrándose" letra por letra la primera vez que el elemento entra en pantalla. */
function useDecrypt(text) {
  const ref = useRef(null);
  const [shown, setShown] = useState(text);

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion()) return undefined;

    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const started = performance.now();
        timer = setInterval(() => {
          const progress = Math.min(1, (performance.now() - started) / DECRYPT_MILLIS);
          const revealed = Math.floor(text.length * progress);
          setShown(
            text
              .split("")
              .map((char, i) =>
                i < revealed || char === " " ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
              )
              .join("")
          );
          if (progress === 1) clearInterval(timer);
        }, DECRYPT_FRAME_MILLIS);
      },
      { threshold: 0.6 }
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [text]);

  return [ref, shown];
}

export function SectionHeader({ index, title, subtitle }) {
  const n = String(index).padStart(2, "0");
  const [titleRef, shownTitle] = useDecrypt(title);
  return (
    <div className="mb-10 sm:mb-14">
      <div className="flex items-center gap-3 mb-3">
        <p className="tag-label text-xs sm:text-sm">{`[ ${n} ] `}{subtitle}</p>
        <span className="hazard-stripes h-2 w-16 sm:w-24" aria-hidden />
        <span className="hidden sm:inline font-mono text-[10px] tracking-widest text-white/30" aria-hidden>
          SECTOR_{n} // 34.60°S 58.38°W
        </span>
      </div>
      <h2
        ref={titleRef}
        aria-label={title}
        className="font-display text-3xl sm:text-5xl font-bold text-white tracking-wide"
      >
        <span aria-hidden>{shownTitle}</span>
      </h2>
      <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-neoncyan via-neonpink to-transparent" />
    </div>
  );
}

/** Barras de ecualizador que laten; decorativas. */
export function Equalizer({ bars = 5, className = "" }) {
  return (
    <span className={`equalizer ${className}`} aria-hidden>
      {Array.from({ length: bars }, (_, i) => (
        <span key={i} style={{ animationDelay: `${(i * 0.17) % 0.8}s` }} />
      ))}
    </span>
  );
}

export function TechIcon({ icon, lib, size = 18 }) {
  const Icon = lib === "fa" ? FA_ICONS[icon] : lib === "si" ? SI_ICONS[icon] : null;
  if (!Icon) return <FaMicrochip size={size} className="text-neonpurple" />;
  return <Icon size={size} className="text-neoncyan" />;
}

export function Badge({ children }) {
  return (
    <span className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-full border border-neonpink/40 text-neonpink/90 bg-neonpink/5">
      {children}
    </span>
  );
}

export function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-neoncyan/20 bg-void/60 py-3 select-none">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-4 font-mono text-sm tracking-widest text-neoncyan/80 whitespace-nowrap"
          >
            {item} <span className="text-neonpink mx-2">✱</span>
          </span>
        ))}
      </div>
    </div>
  );
}

