import React from "react";

// Escena retro: horizonte, grid, palmeras y un auto con estelas de luz.
// Inspirada en la estética synthwave/outrun (Akira, Katana Zero, arcades 80s/90s),
// con formas genéricas, sin personajes ni marcas de nadie.
// Nota: el contenido está pegado al horizonte a propósito, porque este SVG se
// renderiza en una franja ancha y baja (viewBox "slice"), así que todo lo
// importante tiene que entrar en la parte inferior para no cortarse.
export default function RetroScene({ className = "" }) {
  return (
    <svg
      viewBox="0 0 600 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
    >
      {/* horizonte */}
      <line x1="0" y1="150" x2="600" y2="150" stroke="#05d9e8" strokeOpacity="0.5" strokeWidth="1.5" />

      {/* grid con perspectiva */}
      <g stroke="#ff2bd6" strokeOpacity="0.35" strokeWidth="1">
        <line x1="300" y1="150" x2="40" y2="200" />
        <line x1="300" y1="150" x2="150" y2="200" />
        <line x1="300" y1="150" x2="300" y2="200" />
        <line x1="300" y1="150" x2="450" y2="200" />
        <line x1="300" y1="150" x2="560" y2="200" />
      </g>
      <g stroke="#05d9e8" strokeOpacity="0.3" strokeWidth="1">
        <line x1="60" y1="164" x2="540" y2="164" />
        <line x1="20" y1="179" x2="580" y2="179" />
        <line x1="-30" y1="195" x2="630" y2="195" />
      </g>

      {/* palmeras (wireframe neón, compactas para no cortarse) */}
      {[70, 530].map((x, i) => (
        <g
          key={i}
          transform={`translate(${x},150) scale(${i === 1 ? -1 : 1},1)`}
          fill="none"
          strokeLinecap="round"
        >
          <path d="M0,0 C-2,-8 2,-16 0,-25" stroke="#a239ea" strokeWidth="4" opacity="0.85" />
          <path d="M0,-25 C-14,-28 -22,-36 -28,-46" stroke="#05d9e8" strokeWidth="3" opacity="0.85" />
          <path d="M0,-25 C-9,-34 -12,-44 -9,-52" stroke="#05d9e8" strokeWidth="3" opacity="0.75" />
          <path d="M0,-25 C4,-36 14,-42 24,-46" stroke="#ff2bd6" strokeWidth="3" opacity="0.85" />
          <path d="M0,-25 C9,-32 20,-34 30,-32" stroke="#ff2bd6" strokeWidth="3" opacity="0.75" />
        </g>
      ))}

      {/* estelas de luz */}
      <g strokeLinecap="round">
        <line x1="150" y1="154" x2="215" y2="154" stroke="#05d9e8" strokeWidth="2.5" opacity="0.85" />
        <line x1="140" y1="160" x2="220" y2="160" stroke="#ff2bd6" strokeWidth="2.5" opacity="0.7" />
        <line x1="155" y1="166" x2="210" y2="166" stroke="#05d9e8" strokeWidth="2" opacity="0.55" />
      </g>

      {/* auto (silueta baja, estilo deportivo retro) */}
      <g transform="translate(215,0)">
        <path
          d="M0,166 L2,157 C4,153 9,150 15,150 L34,150 C40,150 45,147 49,143 L58,136 C62,133 67,131 72,131 L92,131 C97,131 101,134 103,138 L108,150 L118,152 C122,153 124,156 124,160 L124,166 Z"
          fill="#0e0620"
          stroke="#05d9e8"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
        <circle cx="24" cy="167" r="7" fill="#0a0316" stroke="#ff2bd6" strokeWidth="2" />
        <circle cx="102" cy="167" r="7" fill="#0a0316" stroke="#ff2bd6" strokeWidth="2" />
        <rect x="66" y="135" width="30" height="10" rx="2" fill="#05d9e8" opacity="0.25" />
      </g>
    </svg>
  );
}
