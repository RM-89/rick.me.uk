// src/plugins/satteri-pele.mjs
import { render, PeleError } from 'pele';

let counter = 0;

export const satteriPele = {
  name: 'pele',
  code(node) {
    if (node.lang !== 'mermaid') return;
    try {
      const { svg } = render(node.value, {
          fontSize: 18,
          idPrefix: `pele${counter++}`
      });
      const html = `<figure class="pele">${svg}</figure>`.replace(/\n\s*\n/g, '\n');
      return { raw: html, mdxExpressions: false };
    } catch (e) {
      if (!(e instanceof PeleError)) throw e;
    }
  },
};
