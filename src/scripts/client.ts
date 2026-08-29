import mediumZoom from "medium-zoom";

mediumZoom('[data-zoomable]', {
    background: '#1b1d25'
});

window.addEventListener('scroll', () => {
    document.body.classList.toggle('scrolled', window.scrollY > 0);
});
