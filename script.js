// Particles
particlesJS("particles-js", {
    particles: { number: { value: 80 }, color: { value: "#6e56cf" }, size: { value: 3 }, line_linked: { enable: true, color: "#6e56cf", opacity: 0.3 }, move: { speed: 2 } },
    interactivity: { events: { onhover: { enable: true, mode: "repulse" } } }
});

// Typed
new Typed("#typed", {
    strings: ["Full-Stack Developer", "React & Next.js Expert", "UI/UX Enthusiast", "Open Source Lover"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});

// Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', current === 'dark' ? 'light' : 'dark');
});

// Load theme
if (localStorage.getItem('theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
}

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const navList = document.querySelector('.nav__list');
menuToggle.addEventListener('click', () => navList.classList.toggle('active'));
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => navList.classList.remove('active'));
});

// Header scroll
window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
