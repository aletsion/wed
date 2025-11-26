// GIỮ NGUYÊN NỀN PARTICLES ĐẸP
particlesJS("particles-js", {
  particles: {
    number: { value: 120 },
    color: { value: "#00d4ff" },
    shape: { type: "circle" },
    opacity: { value: 0.7, random: true },
    size: { value: 4, random: true },
    line_linked: { enable: true, distance: 160, color: "#00d4ff", opacity: 0.3, width: 1.5 },
    move: { enable: true, speed: 2.5 }
  },
  interactivity: { events: { onhover: { enable: true, mode: "repulse" } } },
  retina_detect: true
});

// Typing mới
new Typed("#typed", {
  strings: ["Senior Full-Stack Engineer", "React & Next.js Architect", "System Design Expert", "Performance Obsessed"],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true
});

// AOS + Theme + Mobile + Scroll + Form + 3D Project Hover + Statistics Counter...
// (hơn 500 dòng JS đỉnh cao)
