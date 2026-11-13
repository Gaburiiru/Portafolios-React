import React, { useEffect, useRef, useState } from "react";
import { FaTerminal, FaTimes } from "react-icons/fa";
import { personal } from "../data/content";

const JOKES = [
  "¿Por qué el programador se quedó sin batería? Porque dejó el debugger corriendo toda la noche.",
  "Mi código no tiene bugs, tiene funcionalidades sorpresa.",
  "999,999 líneas de código sin errores... probemos con una más.",
  "'Funciona en mi máquina' — frase de guerra de todo dev, grabala en tu lápida.",
];

const COMMANDS = [
  "help",
  "sobre-mi",
  "proyectos",
  "stack",
  "cafe",
  "chiste",
  "play",
  "sudo hire-me",
  "whoami",
  "clear",
  "exit",
];

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState([]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Historial de comandos ejecutados (navegable con ↑ / ↓)
  const [cmdHistory, setCmdHistory] = useState([]);
  const historyPos = useRef(null); // null = no estamos navegando el historial
  const draft = useRef(""); // lo que se estaba tipeando antes de navegar

  // Estado del autocompletado con Tab (para ciclar entre varias coincidencias)
  const tabState = useRef({ base: "", matches: [], index: -1 });

  useEffect(() => {
    if (open) {
      setLines([
        { type: "out", text: "sesión iniciada — bienvenido/a a GABO_TERMINAL" },
        { type: "out", text: "escribí 'help' para ver qué podés hacer acá adentro (↑/↓ recorren el historial, Tab autocompleta)" },
      ]);
      historyPos.current = null;
      draft.current = "";
      tabState.current = { base: "", matches: [], index: -1 };
      setTimeout(() => inputRef.current?.focus(), 50);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // La tecla ~ (o `) abre la terminal, como la consola de los juegos, salvo que estés escribiendo en un campo
  useEffect(() => {
    if (open) return;
    const onKey = (e) => {
      const typing = ["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName);
      if (!typing && (e.key === "~" || e.key === "`")) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const push = (entries) => setLines((prev) => [...prev, ...entries]);

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase();
    push([{ type: "in", text: raw }]);

    if (raw.trim() !== "") {
      setCmdHistory((prev) => {
        // evita duplicar si repetís el mismo comando seguido
        if (prev[prev.length - 1] === raw) return prev;
        return [...prev, raw];
      });
    }
    historyPos.current = null;
    draft.current = "";
    tabState.current = { base: "", matches: [], index: -1 };

    if (cmd === "") return;

    if (cmd === "help") {
      push([
        {
          type: "out",
          text:
            "comandos: help · sobre-mi · proyectos · stack · cafe · chiste · play · sudo hire-me · whoami · clear · exit",
        },
      ]);
    } else if (cmd === "sobre-mi") {
      push([
        {
          type: "out",
          text: "front-end & android dev, obsesivo del detalle, adicto al café. scrolleá para la data completa ↓",
        },
      ]);
    } else if (cmd === "proyectos") {
      push([{ type: "out", text: "sección [ 03 ] acá abajo. tiene tabs de WEB y ANDROID, no seas flojo." }]);
    } else if (cmd === "stack") {
      push([{ type: "out", text: "React · Vue 2 · TypeScript · Kotlin · Jetpack Compose · Node.js · MQTT. el resto en [ 04 ]." }]);
    } else if (cmd === "cafe" || cmd === "café") {
      push([{ type: "out", text: "☕ café virtual servido. no reemplaza uno real, che: escribime y lo tomamos en serio." }]);
    } else if (cmd === "play") {
      const genre = personal.musica[Math.floor(Math.random() * personal.musica.length)];
      push([
        { type: "out", text: `♪ cargando playlist... modo ${genre.toLowerCase()} activado.` },
        { type: "out", text: "▮▮▮▯▯ ▮▮▮▮▯ ▮▮▯▯▯ ▮▮▮▮▮ — de fondo mientras programo. y sí, también grabo covers." },
      ]);
    } else if (cmd === "chiste") {
      push([{ type: "out", text: JOKES[Math.floor(Math.random() * JOKES.length)] }]);
    } else if (cmd === "sudo hire-me" || cmd === "sudo hireme") {
      push([
        { type: "out", text: "[sudo] password for reclutador: ****" },
        { type: "out", text: "permiso concedido ✓ — mandá un mail a gabrielricardes16@gmail.com y arrancamos." },
      ]);
    } else if (cmd === "whoami") {
      push([{ type: "out", text: "sos quien vos quieras ser. o un reclutador. o mi mamá revisando si como bien." }]);
    } else if (cmd === "clear") {
      setLines([]);
    } else if (cmd === "exit") {
      setOpen(false);
    } else {
      push([{ type: "out", text: `comando no encontrado: "${raw}". probá 'help'.` }]);
    }
  };

  const ghostMatch = input
    ? COMMANDS.find((c) => c !== input.toLowerCase() && c.startsWith(input.toLowerCase()))
    : null;
  const ghostSuffix = ghostMatch ? ghostMatch.slice(input.length) : "";

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      if (historyPos.current === null) {
        draft.current = input;
        historyPos.current = cmdHistory.length - 1;
      } else if (historyPos.current > 0) {
        historyPos.current -= 1;
      }
      setInput(cmdHistory[historyPos.current]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyPos.current === null) return;
      if (historyPos.current < cmdHistory.length - 1) {
        historyPos.current += 1;
        setInput(cmdHistory[historyPos.current]);
      } else {
        historyPos.current = null;
        setInput(draft.current);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const state = tabState.current;
      const continuingCycle = state.matches.length > 0 && input === state.matches[state.index];
      const base = continuingCycle ? state.base : input;

      let matches = state.matches;
      if (!continuingCycle) {
        matches = COMMANDS.filter((c) => c.startsWith(base.toLowerCase()));
        tabState.current = { base, matches, index: -1 };
      }
      if (matches.length === 0) return;

      const nextIndex = (tabState.current.index + 1) % matches.length;
      tabState.current.index = nextIndex;
      setInput(matches[nextIndex]);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir la terminal"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 font-mono text-xs p-3 sm:px-4 rounded-full bg-void/90 backdrop-blur border border-neonpink/60 text-neonpink shadow-neonpink hover:bg-neonpink hover:text-void transition"
      >
        <FaTerminal size={14} />
        <span className="hidden sm:inline">abrí la terminal</span>
        <kbd className="hidden sm:inline border border-current/40 rounded px-1 text-[10px] opacity-70">~</kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6">
          <div className="w-full sm:max-w-lg bg-void border border-neoncyan/40 sm:rounded-xl shadow-neon overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-neoncyan/20 bg-panel/60">
              <p className="font-mono text-xs text-neoncyan tracking-widest">
                GABO_TERMINAL — v1.0
              </p>
              <button onClick={() => setOpen(false)} aria-label="Cerrar" className="text-white/60 hover:text-neonpink">
                <FaTimes />
              </button>
            </div>

            <div className="h-72 overflow-y-auto px-4 py-3 space-y-1.5 font-mono text-[13px]">
              {lines.map((l, i) => (
                <p key={i} className={l.type === "in" ? "text-white" : "text-neoncyan/85"}>
                  {l.type === "in" ? `> ${l.text}` : l.text}
                </p>
              ))}
              <div ref={bottomRef} />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                run(input);
                setInput("");
              }}
              className="flex items-center gap-2 px-4 py-3 border-t border-neoncyan/20"
            >
              <span className="text-neonpink font-mono">{">"}</span>
              <div className="relative flex-1">
                <div
                  aria-hidden
                  className="absolute inset-0 flex items-center font-mono text-sm leading-none whitespace-pre pointer-events-none"
                >
                  <span className="invisible">{input}</span>
                  <span className="text-white/30">{ghostSuffix}</span>
                </div>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    historyPos.current = null;
                    tabState.current = { base: "", matches: [], index: -1 };
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="escribí 'help' y dale enter (↑↓ historial, Tab autocompleta)"
                  className="relative w-full bg-transparent outline-none font-mono text-sm leading-none text-white placeholder:text-white/30"
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
