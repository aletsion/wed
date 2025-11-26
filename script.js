// Mobile menu
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
const header = document.querySelector('.header');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
