// Particles Background
particlesJS("particles-js", {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#7c3aed" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#7c3aed", opacity: 0.3, width: 1 },
        move: { enable: true, speed: 2 }
    },
    interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "repulse" } } },
    retina_detect: true
});

// Typing Animation
new Typed("#typing", {
    strings: ["Full-Stack Developer", "React & Next.js Expert", "UI/UX Enthusiast", "Problem Solver"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
});

// AOS Init
AOS.init({ duration: 1000, once: true });

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Mobile menu, smooth scroll, form submit, scroll header... (còn 200 dòng nữa)
