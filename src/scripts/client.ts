import mediumZoom from "medium-zoom";
import { enableZoom } from "pele/core";

mediumZoom('[data-zoomable]', {
    background: '#1b1d25'
});

document.querySelectorAll<HTMLElement>('figure.pele').forEach((figure) => enableZoom(figure));

window.addEventListener('scroll', () => {
    document.body.classList.toggle('scrolled', window.scrollY > 0);
});
