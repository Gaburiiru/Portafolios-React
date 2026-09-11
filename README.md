# Gabriel Ricardes — Portfolio

Portfolio personal con estética cyberpunk / vaporwave / retro-future.

## Stack del sitio
- React 18 + Vite
- Tailwind CSS
- react-icons

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```
Esto genera la carpeta `dist/` lista para deployar.

## Deploy en Netlify

Ya incluye `public/_redirects` para que el ruteo funcione en Netlify.

**Opción A — Drag & drop:**
1. `npm run build`
2. Entrá a tu sitio en Netlify → pestaña "Deploys" → arrastrá la carpeta `dist/` al área de deploy manual.

**Opción B — Conectado a Git (recomendado):**
1. Subí este proyecto a un repo de GitHub/GitLab.
2. En Netlify: "Site settings" → "Build & deploy" → conectá el repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Cada push a la rama principal redeploya solo.

## Editar contenido

Todo el contenido (perfil, experiencia, proyectos, stack, educación) vive en:
`src/data/content.js`

Para cambiar textos, agregar proyectos nuevos o actualizar el stack, editá ese archivo — los componentes de `src/components/` lo consumen automáticamente.

El CV en PDF se sirve desde `public/Gabriel_Ricardes_CV.pdf` (el botón "Descargar CV" apunta ahí).
