// Particles – giữ nguyên vì đẹp
particlesJS("particles-js", {
  particles: {
    number: { value: 120, density: { enable: true, value_area: 800 } },
    color: { value: "#8b5cf6" },
    shape: { type: "circle" },
    opacity: { value: 0.6, random: true },
    size: { value: 4, random: true },
    line_linked: { enable: true, distance: 140, color: "#8b5cf6", opacity: 0.3, width: 1.5 },
    move: { enable: true, speed: 3, direction: "none", random: false }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
    modes: { repulse: { distance: 100, duration: 0.4 } }
  },
  retina_detect: true
});

// Typing
new Typed("#typed", {
  strings: ["Full-Stack Developer", "React & Next.js Expert", "UI/UX Enthusiast", "Open Source Contributor", "Coffee Addict"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true,
  showCursor: true,
  cursorChar: "|"
});

// AOS
AOS.init({ duration: 1200, easing: 'ease-out-quart', once: true });

// Theme, Mobile menu, Scroll header, Form submit, CV download counter... (còn 300 dòng nữa)
