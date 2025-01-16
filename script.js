document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const options = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    sections.forEach((section) => {
        section.classList.add("hidden");
        observer.observe(section);
    });
});

// CSS for animation effects
const style = document.createElement("style");
style.textContent = `
.hidden { opacity: 0; transform: translateY(50px); transition: all 0.5s ease-in-out; }
.visible { opacity: 1; transform: translateY(0); }
`;
document.head.append(style);
