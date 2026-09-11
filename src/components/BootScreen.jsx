import React, { useEffect, useState } from "react";

const LINES = [
  "> iniciando gabo_dev.exe ...",
  "> cargando café en memoria RAM... OK",
  "> compilando personalidad... 98%",
  "> ⚠ nivel de sarcasmo dentro de parámetros normales",
  "> conectando con el multiverso vaporwave...",
  "> listo. bienvenido/a, humano/a.",
];

export default function BootScreen({ onDone }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setVisibleLines(LINES.slice(0, i));
      if (i >= LINES.length) {
        clearInterval(interval);
        setTimeout(() => setClosing(true), 600);
        setTimeout(() => onDone(), 1100);
      }
    }, 340);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const skip = () => {
    setClosing(true);
    setTimeout(() => onDone(), 350);
  };

  return (
    <div
      onClick={skip}
      className={`fixed inset-0 z-[100] bg-void flex flex-col items-center justify-center px-6 cursor-pointer transition-opacity duration-500 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-md font-mono text-sm text-neoncyan space-y-2">
        {visibleLines.map((line, i) => (
          <p key={i} className={line.includes("⚠") ? "text-neonyellow" : ""}>
            {line}
          </p>
        ))}
        <span className="blink-cursor" />
      </div>
      <p className="mt-10 font-mono text-[11px] text-white/30 tracking-widest">
        (TOCÁ PARA SALTEAR)
      </p>
    </div>
  );
}
