// Screenshots de proyectos personales (se mantienen del portafolio anterior)
import cargarEmpleados from "../assets/proyectos/cargarEmpleados.jpg";
import carritoDeFruta from "../assets/proyectos/carritoDeFruta.jpg";
import colorPiker from "../assets/proyectos/colorPiker.jpg";
import rickAndMorty from "../assets/proyectos/RickAndMorty.jpg";
import altaProfesoresAlumnos from "../assets/proyectos/alta-profesores-alumnos.jpg";
import agregarTareas from "../assets/proyectos/agregar-tareas.jpg";
import agregarTareasReact from "../assets/proyectos/agregar-tareas-con-react.jpg";
import apiReactTienda from "../assets/proyectos/api-react-tienda.jpg";
import apiReactClima from "../assets/proyectos/api-react-clima.jpg";
import gamesBreak from "../assets/proyectos/games-break.jpg";
import apiMapaReact from "../assets/proyectos/api-mapa-react.jpg";

export const perfil = {
  nombre: "Gabriel Ricardes",
  alias: "GABO",
  rol: "Front-end & Android Developer",
  ubicacion: "Buenos Aires, Argentina",
  telefono: "+54 11 6996-5856",
  email: "gabrielricardes16@gmail.com",
  linkedin: "https://www.linkedin.com/in/gabriel-ricardes-578902214/",
  github: "https://github.com/Gaburiiru",
  instagram: "https://www.instagram.com/g___a___b___o/",
  experienciaTexto: "2 años y 8 meses",
  bio: `Soy Gabriel, o Gabo para los amigos (y ahora vos). Programo cosas para la web y para Android,
  y en algún punto del camino me terminé enamorando de Clean Architecture, MVVM y de hacer que las
  interfaces se sientan bien al tacto y no solo "funcionen". Estoy cerrando la Tecnicatura en
  Desarrollo de Aplicaciones Móviles, así que sí, todavía tomo apuntes.`,
  bioSecundaria: `Soy de los que se obsesionan con el detalle que nadie más nota (ese padding de 2px sí importa).
  Me gusta romper cosas para entender cómo funcionan y después arreglarlas mejor de como estaban. Y si hay
  feedback claro en el medio, mejor: para mí ahí es donde un proyecto realmente despega.`,
  ahoraMismo: [
    "Cerrando la Tecnicatura en Desarrollo de Aplicaciones Móviles (UNLaM)",
    "Trabajando en el cliente Android nativo de mi proyecto final, en equipo",
    "Metiéndole mano a Kotlin Multiplatform (Capricho corre en Android e iOS) y a React Native",
  ],
};

export const experiencia = [
  {
    empresa: "DIGICARD",
    puesto: "Desarrollador Web Front-end",
    modalidad: "Full Time · Remoto, Argentina",
    periodo: "Enero 2024 — Agosto 2026",
    resumen:
      "Desarrollo de aplicaciones en Vue 2 y React siguiendo Clean Architecture y patrón MVC, en equipos con despliegue a producción y control de versiones vía GitLab. Participación simultánea en múltiples proyectos, priorizando entregas y calidad de código.",
    proyectos: [
      {
        nombre: "DS9 — Tiempo y Asistencia",
        stack: ["Vue 2", "Vuetify", "Vuex", "REST APIs", "Node.js/Express"],
        detalle:
          "Solución para control de presentismo y liquidación de horas con motor de cálculo automático en tiempo real, potenciada con complementos como Workflow, Comedor (DCO) y Self Service (DSS).",
        bullets: [
          "Interfaces y componentes responsivos en Vue 2 + Vuetify.",
          "Integración de APIs REST y manejo avanzado de HTTP contra el motor de cálculo de horas.",
          "Estado global con Vuex (acciones, mutaciones, getters) + persistencia en local/sessionStorage.",
          "Componentes reutilizables (formularios, tablas, tarjetas, validaciones) para todo el equipo.",
          "Servicio proxy en Node.js/Express para integrar dispositivos biométricos Suprema (huella y rostro), ya que BioStar 2 no era customizable para sitios dinámicos modernos.",
        ],
      },
      {
        nombre: "SkySync",
        stack: ["React", "TypeScript", "Zustand", "MQTT", "Clean Architecture", "PWA"],
        detalle:
          "Monitoreo y control de dispositivos HID Amico y servicios de empresas/grupos de empresas mediante eventos MQTT y APIs propias, con administración centralizada.",
        bullets: [
          "React + TypeScript con Zustand para estado global.",
          "Consumo de endpoints REST propios junto a servicios MQTT para sincronizar dispositivos en tiempo real.",
          "Clean Architecture con mappers y DTOs para una solución escalable y mantenible.",
          "Sistema de polling que sincroniza dispositivos cargados vs. activos, con monitor de eventos.",
          "Gestión de jerarquía y niveles de usuario + soporte PWA para uso en mobile.",
        ],
      },
      {
        nombre: "Auditoría UI/UX & QA Exploratorio — App Divi",
        stack: ["React Native", "Testing exploratorio"],
        detalle:
          "Testing de caja negra sobre Divi, app en React Native para gestión de citas, eventos y horarios de visita.",
        bullets: [
          "Testing funcional y de UI para ambos roles (Visitado y Visitante).",
          "Pruebas de estabilidad: detección de crashes, errores y validación de la lógica de calendario/turnos.",
          "Propuestas de diseño e interacción para optimizar la UX del flujo de reserva.",
        ],
      },
    ],
  },
];

export const proyectosMovil = [
  {
    id: "movil-capricho",
    nombre: "Capricho",
    tecnology: ["Kotlin Multiplatform", "Compose Multiplatform", "Supabase", "Clean Architecture", "IA"],
    type: "Challenge · Android + iOS",
    image: null,
    url: null,
    git: "https://github.com/Gaburiiru/capricho",
    description:
      "Finanzas sin culpa: antes de darte un gusto te dice cuánto pesa en tu sueldo y en tus metas. Código compartido Android/iOS, estrategia de ahorro con IA, modo sin conexión, una mascota pixel art con 11 estados de ánimo y 149 tests.",
  },
  {
    id: "movil-melodya",
    nombre: "Melodya",
    tecnology: ["Kotlin", "Jetpack Compose", "Clean Architecture", "Corrutinas / Flow", "Retrofit"],
    type: "Proyecto final · Android",
    image: null,
    url: null,
    git: null,
    nota: "Repo privado del equipo · lo muestro en una entrevista",
    description:
      "Proyecto final en equipo: una plataforma para crear canciones a partir de una idea. Trabajo en el cliente Android nativo: arquitectura en capas, sesión cifrada, reproducción en segundo plano, notificaciones y CI con lint y tests.",
  },
  {
    id: "movil-1",
    nombre: "Games Break",
    tecnology: ["Java", "XML", "Activities / Fragments", "RecyclerView", "Glide"],
    type: "APK · Android",
    image: gamesBreak,
    url: "https://drive.google.com/file/d/1SHjqRbxYYgpaTtYnFtmHPxdteRPBECZS/view?usp=sharing",
    git: "https://github.com/Gaburiiru/Mi-primera-APP-Movil",
    description:
      "App para elegir intermediario de pago en tus compras. Login + CRUD completo, navegación con Activities y Fragments, listados con RecyclerView y carga de imágenes con Glide.",
  },
  {
    id: "movil-2",
    nombre: "Cuida tu Bolsillo",
    tecnology: ["Kotlin", "Jetpack Compose", "Canvas", "API de divisas"],
    type: "App nativa · Android",
    image: null,
    url: null,
    git: null,
    description:
      "Control y análisis de finanzas personales: registrás, categorizás y visualizás ingresos/egresos con gráficos de torta/dona renderizados sobre Canvas. Manejo multimoneda con API externa y persistencia local sin depender de conexión.",
  },
  {
    id: "movil-3",
    nombre: "Paw Finder",
    tecnology: ["Kotlin", "Jetpack Compose", "Material 3", "Firebase", "Google Maps SDK"],
    type: "App nativa · Android",
    image: null,
    url: null,
    git: "https://github.com/Gaburiiru/PawFinder",
    description:
      "Búsqueda, reporte y reunificación de mascotas perdidas por geolocalización en tiempo real, con mapa interactivo comunitario. Firebase (Auth, Firestore, Storage) como backend, cámara y permisos de ubicación en runtime.",
  },
];

export const proyectosWeb = [
  {
    id: 1,
    name: "API Mapa con React",
    url: "https://api-mapa-con-react.netlify.app/",
    git: "https://github.com/Gaburiiru/API-OpenStreetMaps",
    image: apiMapaReact,
    tecnology: ["React", "Tailwind CSS", "Leaflet"],
    description:
      "Buscador de destinos sobre un mapa interactivo usando la API de OpenStreetMap, con marcadores personalizados.",
  },
  {
    id: 2,
    name: "API clima con React",
    url: "https://apireactclima.netlify.app/",
    git: "https://github.com/Gaburiiru/api-react-clima",
    image: apiReactClima,
    tecnology: ["React", "Context API", "Tailwind CSS"],
    description:
      "Búsqueda de clima por ciudad y país, historial de búsquedas persistido en store y modo dark con Context API.",
  },
  {
    id: 3,
    name: "API tienda con React",
    url: "https://api-tienda-con-react.netlify.app/",
    git: "https://github.com/Gaburiiru/API-Tienda-React",
    image: apiReactTienda,
    tecnology: ["React", "Redux", "Tailwind CSS"],
    description:
      "Catálogo con búsqueda de productos, carrito de compras y manejo de estado global con Redux.",
  },
  {
    id: 4,
    name: "Agregar tareas con React",
    url: "https://agregar-tareas-con-react.netlify.app/",
    git: "https://github.com/Gaburiiru/Agregar-Tareas-Con-React",
    image: agregarTareasReact,
    tecnology: ["React", "Tailwind CSS"],
    description: "Alta y baja de tareas con nombre y descripción, componentes controlados.",
  },
  {
    id: 5,
    name: "Alta de alumnos y profesores",
    url: "https://alta-alumnos-profesor.netlify.app/",
    git: "https://github.com/Gaburiiru/Alta-Profesores-Alumnos",
    image: altaProfesoresAlumnos,
    tecnology: ["JavaScript", "HTML", "CSS"],
    description: "Alta de alumnos y profesores con modificación de estado de aprobación.",
  },
  {
    id: 6,
    name: "Agregar tareas (LocalStorage)",
    url: "https://agregar-tareas-local-storage.netlify.app/",
    git: "https://github.com/Gaburiiru/Agregar-Tareas-LocalStorage",
    image: agregarTareas,
    tecnology: ["JavaScript", "LocalStorage"],
    description: "Tareas persistidas en LocalStorage: sobreviven al refresh de la página.",
  },
  {
    id: 7,
    name: "API Rick and Morty",
    url: "https://api-fetch-rick-and-morty.netlify.app/",
    git: "https://github.com/Gaburiiru/Api-Rick-And-Morty",
    image: rickAndMorty,
    tecnology: ["JavaScript", "Fetch API"],
    description: "Consumo de la API pública de Rick and Morty, personajes renderizados en tarjetas.",
  },
  {
    id: 8,
    name: "Selector de color",
    url: "https://selector-de-color.netlify.app/",
    git: "https://github.com/Gaburiiru/Selector-de-color",
    image: colorPiker,
    tecnology: ["JavaScript", "Clipboard API"],
    description: "Elegís un color y lo convierte a hexadecimal, con copiado directo al portapapeles.",
  },
  {
    id: 9,
    name: "Carrito de frutas",
    url: "https://carrito-de-fruta.netlify.app/",
    git: "https://github.com/Gaburiiru/carrito-de-frutas",
    image: carritoDeFruta,
    tecnology: ["JavaScript", "HTML", "CSS"],
    description: "Carrito con cantidad editable y actualización del costo total en vivo.",
  },
  {
    id: 10,
    name: "Cargar empleados",
    url: "https://crud-js-local.netlify.app/",
    git: "https://github.com/Gaburiiru/CRUD-JavaScript-Local",
    image: cargarEmpleados,
    tecnology: ["JavaScript", "CRUD"],
    description: "CRUD simple de empleados: nombre, puesto, edición y borrado.",
  },
];

// { nombre, icon: nombre de icono de react-icons/si o react-icons/fa, lib: 'si' | 'fa' }
export const stack = {
  Lenguajes: [
    { nombre: "JavaScript", icon: "SiJavascript", lib: "si" },
    { nombre: "TypeScript", icon: "SiTypescript", lib: "si" },
    { nombre: "Kotlin", icon: "SiKotlin", lib: "si" },
    { nombre: "Java", icon: "FaJava", lib: "fa" },
    { nombre: "PHP", icon: "SiPhp", lib: "si" },
    { nombre: "Python", icon: "SiPython", lib: "si" },
  ],
  "Frontend & UI": [
    { nombre: "React", icon: "SiReact", lib: "si" },
    { nombre: "Vue 2", icon: "SiVuedotjs", lib: "si" },
    { nombre: "Zustand" },
    { nombre: "Vuex" },
    { nombre: "Vuetify", icon: "SiVuetify", lib: "si" },
    { nombre: "Tailwind CSS", icon: "SiTailwindcss", lib: "si" },
    { nombre: "Bootstrap", icon: "SiBootstrap", lib: "si" },
  ],
  "Mobile & Android": [
    { nombre: "Jetpack Compose", icon: "SiJetpackcompose", lib: "si" },
    { nombre: "Kotlin Multiplatform", icon: "SiKotlin", lib: "si" },
    { nombre: "Retrofit / Ktor" },
    { nombre: "Room / SQLDelight" },
    { nombre: "Hilt / Dagger" },
    { nombre: "Coil / Glide / CameraX" },
    { nombre: "Corrutinas / Flow" },
  ],
  "Backend & Datos": [
    { nombre: "Node.js", icon: "SiNodedotjs", lib: "si" },
    { nombre: "Express", icon: "SiExpress", lib: "si" },
    { nombre: "MQTT", icon: "SiMqtt", lib: "si" },
    { nombre: "REST APIs" },
    { nombre: "Firebase", icon: "SiFirebase", lib: "si" },
    { nombre: "SQL / SQL Server", icon: "FaDatabase", lib: "fa" },
    { nombre: "SQLite", icon: "SiSqlite", lib: "si" },
  ],
  "Arquitectura & Tools": [
    { nombre: "Clean Architecture" },
    { nombre: "MVVM" },
    { nombre: "MVC" },
    { nombre: "PWA" },
    { nombre: "Git", icon: "SiGit", lib: "si" },
    { nombre: "GitHub", icon: "SiGithub", lib: "si" },
    { nombre: "GitLab", icon: "SiGitlab", lib: "si" },
    { nombre: "Android Studio", icon: "SiAndroidstudio", lib: "si" },
  ],
};

export const personal = {
  intro: `Antes que nada: soy músico — grabo covers instrumentales y de vez en cuando me animo a componer algo
  propio. También soy bastante gamer, de AAA a shooters battle royale y algún souls-like para sufrir un poco
  por diversión.`,
  puente: `Esa misma cabeza curiosa la llevo al laburo: me gusta ponerme en el lugar del usuario final, testear
  cada flujo y entender el modelo de negocio de atrás, no solo el código.`,
  origen: `¿Por qué tecnología? Fui a una secundaria técnica con orientación en programación, así que ya venía
  viendo desarrollo web durante la cursada. En el último año armé mi proyecto final de Android con programación
  por bloques (al estilo Lego: armabas pantallas y lógica sin escribir una línea de código todavía) — el cierre
  perfecto de esa etapa. De ahí salté a una diplomatura en desarrollo web y después a la Tecnicatura en
  Desarrollo de Aplicaciones Móviles — y en el medio fui escalando en serio: de esas apps por bloques pasé a
  Android con Fragments y XML (la forma "de toda la vida"), después a Jetpack Compose con librerías para
  consumir APIs y manejar datos locales, y último pero no menos importante, metiéndole a Kotlin Multiplatform.`,
  aprendiendo: `Me gusta perfeccionarme e investigar más de lo que estrictamente hace falta. Ahora mismo estoy
  metiéndole a React Native, para cerrar el combo completo — nativo, web e híbrido — sin puntos ciegos.`,
  musica: ["Jazz", "Soul", "R&B", "Rock", "Punk", "Reggae", "Lo-fi", "Hip-Hop"],
  gaming: ["AAA", "Shooters / Battle Royale", "Souls-like"],
};

export const educacion = [
  {
    titulo: "Tecnicatura en Desarrollo de Aplicaciones Móviles",
    institucion: "Universidad Nacional de La Matanza (UNLaM)",
    periodo: "2021 — Actualidad",
  },
  {
    titulo: "Diplomatura en Desarrollo Web",
    institucion: "Centro Universitario de la Innovación",
    periodo: "2021 — 2022",
  },
];
