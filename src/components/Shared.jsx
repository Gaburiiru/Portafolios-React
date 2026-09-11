import React from "react";
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

export function SectionHeader({ index, title, subtitle }) {
  const n = String(index).padStart(2, "0");
  return (
    <div className="mb-10 sm:mb-14">
      <p className="tag-label text-xs sm:text-sm mb-2">{`[ ${n} ] `}{subtitle}</p>
      <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-wide">
        {title}
      </h2>
      <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-neoncyan via-neonpink to-transparent" />
    </div>
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

