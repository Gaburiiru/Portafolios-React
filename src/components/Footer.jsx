import React from "react";

export default function Footer() {
  return (
    <footer className="relative border-t border-neoncyan/15 bg-void/70">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-white/40">
        <p>© {new Date().getFullYear()} GABRIEL RICARDES — HECHO CON REACT, CAFÉ Y VARIOS REINICIOS</p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-neongreen animate-pulse" />
          SYSTEM STATUS: ONLINE
        </p>
      </div>
    </footer>
  );
}
