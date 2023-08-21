const sections = document.querySelectorAll(".section");
let currentSection = 0;

window.addEventListener("wheel", (event) => {
    const direction = event.deltaY > 0 ? 1 : -1;
    currentSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));
    scrollToSection(currentSection);
});

function scrollToSection(index) {
    sections[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start" // This will make it scroll horizontally
    });
}
