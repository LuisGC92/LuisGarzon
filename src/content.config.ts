import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Plantilla de caso de estudio de UX Writing y Content Design.
 * Los metadatos van aquí; la narración (contexto, proceso, decisiones) va en el cuerpo Markdown.
 */
const casos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casos' }),
  schema: z.object({
    titulo: z.string(),
    anio: z.number(),
    orden: z.number().default(99),
    borrador: z.boolean().default(false),
    // Una frase que resume el reto y el resultado: es lo primero que lee un reclutador.
    resumen: z.string(),
    // Etiquetas cortas para la tarjeta de la home (p. ej. «Onboarding», «Microcopy»).
    etiquetas: z.array(z.string()).default([]),
    portada: z.string(),
    portadaAlt: z.string(),
    rol: z.string(),
    alcance: z.string(),
    equipo: z.string().optional(),
    sitio: z.object({ texto: z.string(), url: z.url() }).optional(),
    // Titular de la sección de resultados; admite *cursiva* para el acento en serif.
    resultadosTitulo: z.string().default('Resultados'),
    resultados: z.array(z.object({ valor: z.string(), texto: z.string() })).default([]),
    aprendizaje: z.string(),
  }),
});

export const collections = { casos };
