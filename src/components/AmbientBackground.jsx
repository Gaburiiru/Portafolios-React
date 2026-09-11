import React from "react";

// Capa fija (no se mueve al hacer scroll) con el sol y el grid MUY difuminados,
// para que se sigan viendo de fondo en todas las secciones sin tapar el contenido.
export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="sun ambient-sun absolute left-1/2 top-[2%] -translate-x-1/2 w-[560px] h-[560px]" />
      <div className="grid-floor ambient-grid absolute inset-x-0 bottom-0 h-[50%]" />
    </div>
  );
}
