const title = document.querySelector(".hero-title");

function updateTitle() {
    if (!title) return;

    const scrollDistance = 600;
    const progress = Math.min(window.scrollY / scrollDistance, 1);

    /* Position: von Bildschirmmitte bis nach oben */
    const startTop = window.innerHeight / 2;
    const endTop = 34;
    const currentTop =
        startTop + (endTop - startTop) * progress;

    /* Größe: von 100 Prozent auf 35 Prozent */
    const startScale = 1;
    const endScale = 0.35;
    const currentScale =
        startScale + (endScale - startScale) * progress;

    title.style.top = `${currentTop}px`;
    title.style.transform =
        `translate(-50%, -50%) scale(${currentScale})`;

    if (progress >= 1) {
        title.classList.add("title-docked");
    } else {
        title.classList.remove("title-docked");
    }
}

window.addEventListener("scroll", updateTitle);
window.addEventListener("resize", updateTitle);

updateTitle();
