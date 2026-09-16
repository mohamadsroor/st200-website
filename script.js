const title = document.querySelector(".hero-content h1");

function animateTitle() {
    const scrollPosition = window.scrollY;

    /*
     * Nach 500 Pixeln Scrollweg ist die Animation abgeschlossen.
     * Math.min verhindert, dass der Wert größer als 1 wird.
     */
    const progress = Math.min(scrollPosition / 500, 1);

    /*
     * Der Titel beginnt ungefähr in der Bildschirmmitte
     * und bewegt sich anschließend nach oben.
     */
    const startY = window.innerHeight / 2;
    const endY = 28;
    const currentY = startY + (endY - startY) * progress;

    /*
     * Der Titel beginnt mit normaler Größe und wird
     * bis auf 35 Prozent verkleinert.
     */
    const startScale = 1;
    const endScale = 0.35;
    const currentScale =
        startScale + (endScale - startScale) * progress;

    title.style.transform =
        `translate(-50%, -50%) translateY(${currentY}px) scale(${currentScale})`;

    /*
     * Nach Abschluss bekommt der Titel einen kompakteren Glow.
     */
    if (progress === 1) {
        title.classList.add("title-docked");
    } else {
        title.classList.remove("title-docked");
    }
}

window.addEventListener("scroll", animateTitle);
window.addEventListener("resize", animateTitle);

animateTitle();
