// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';

// Si conectas un dominio propio, cambia `site` por tu dominio y `base` por '/'.
const site = 'https://luisgc92.github.io';
const base = '/LuisGarzon';

/** Antepone `base` a las rutas absolutas de imágenes y enlaces escritos en Markdown. */
function rehypeBase() {
  const prefix = base.replace(/\/$/, '');
  const fix = (v) => (typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') && !v.startsWith(prefix + '/') ? prefix + v : v);
  const walk = (node) => {
    if (node.type === 'element' && node.properties) {
      if ('src' in node.properties) node.properties.src = fix(node.properties.src);
      if ('href' in node.properties) node.properties.href = fix(node.properties.href);
    }
    // El HTML escrito dentro del Markdown llega como texto sin procesar.
    if (node.type === 'raw' && typeof node.value === 'string') {
      node.value = node.value.replace(/\b(src|href)="(\/[^"]*)"/g, (_, attr, v) => `${attr}="${fix(v)}"`);
    }
    (node.children || []).forEach(walk);
  };
  return (tree) => walk(tree);
}

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  markdown: { processor: unified({ rehypePlugins: [rehypeBase] }) },
});
