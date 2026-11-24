# Portafolio · Luis Garzón

Portafolio de UX Writing y Content Design, construido con [Astro](https://astro.build) y publicado en GitHub Pages.

## Cómo añadir un caso de estudio

1. Crea un archivo nuevo en `src/content/casos/`, por ejemplo `nombre-del-caso.md`. Puedes copiar `salud-total.md` como plantilla.
2. Guarda las imágenes en `public/casos/nombre-del-caso/`.
3. Completa los datos del encabezado (título, año, resumen, rol, resultados y aprendizaje) y escribe la narración debajo.
4. Para ocultar un caso mientras lo terminas, añade `borrador: true`.

Cada cambio que llega a la rama `main` se publica solo en unos minutos.

## Datos personales

El correo, LinkedIn y CV se editan en `src/config.ts`. Si un campo queda vacío, su enlace no se muestra.

## Trabajar en local

```bash
npm install
npm run dev
```
