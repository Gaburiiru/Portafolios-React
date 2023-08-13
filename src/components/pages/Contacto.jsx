import React, { useState } from "react";

function Contacto() {
  const [camposIncompletos, setCamposIncompletos] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nombre = event.target.nombre.value;
    const apellidos = event.target.apellidos.value;
    const email = event.target.email.value;
    const motivo = event.target.motivo.value;
    const mensaje = event.target.mensaje.value;

    if (nombre && apellidos && email && motivo && mensaje) {
      const mailtoLink = `mailto:gabrielricardes16@gmail.com?subject=${encodeURIComponent(
        motivo
      )}&body=${encodeURIComponent(
        `Nombre: ${nombre}\nApellidos: ${apellidos}\nMensaje: ${mensaje}`
      )}`;

      window.location.href = mailtoLink;
      
      setCamposIncompletos(false);
      
      event.target.nombre.value = "";
      event.target.apellidos.value = "";
      event.target.email.value = "";
      event.target.motivo.value = "";
      event.target.mensaje.value = "";

    } else {
      setCamposIncompletos(true);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-indigo-300 text-4xl py-6 subtitulos hover:text-white animate__animated animate__rotateIn">
        Contacto
      </h1>
      <div className="grid grid-cols-1 text-center">
        <div className="bg-orange-400 opacity-70 w-96 p-6 font-normal text-lg text-white h-fit rounded-2xl hover:scale-110 hover:z-40 hover:opacity-100 shadow-xl hover:shadow-red-500/40">
          <h2 className="text-3xl p-2">Enviame un mensaje</h2>
          {camposIncompletos && (
            <p className="text-white bg-red-500 w-full my-2 py-2 rounded-xl">Debe completar todos los campos.</p>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="rounded-xl p-2 w-72 text-black"
            />
            <input
              type="text"
              name="apellidos"
              placeholder="Apellidos"
              className="my-2 rounded-xl p-2 w-72 text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-xl p-2 w-72 text-black"
            />
            <input
              type="text"
              name="motivo"
              placeholder="Motivo de contacto"
              className="my-2 rounded-xl p-2 w-72 text-black"
            />
            <textarea
              name="mensaje"
              placeholder="Mensaje"
              className="my-2 rounded-xl p-2 w-72 text-black"
            />
            <input
              type="submit"
              value="Enviar"
              className="my-2 p-2 w-72 text-white bg-indigo-500 rounded-full shadow-xl shadow-indigo-600/30 animate__animated animate__rubberBand hover:bg-indigo-600 hover:shadow-indigo-500/30"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
