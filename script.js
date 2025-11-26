// GIỮ NGUYÊN PARTICLES
particlesJS("particles-js", { /* config đẹp như cũ */ });

// Three.js 3D Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('3d-bg'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Add 3D floating shapes...
const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);
camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// GSAP + Typed + Vanilla Tilt
new Typed("#typed", {
  strings: ["FULL-STACK ENGINEER", "3D WEB DEVELOPER", "CYBERPUNK ENTHUSIAST", "FUTURE IS NOW"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true
});

VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
});

// GSAP Animations khi scroll...
