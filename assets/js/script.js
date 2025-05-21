const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");
const sdgToggle = document.getElementById("sdg-toggle");

function toggleSidebar() {
  sidebar.classList.toggle("show");
}

// Abrir/Cerrar menú lateral
menuToggle.addEventListener("click", toggleSidebar);
closeBtn.addEventListener("click", toggleSidebar);

// Submenú SDG
sdgToggle.addEventListener("click", function () {
  sdgToggle.classList.toggle("open");
});

// Animación reveal on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);

// Cambia color del header al hacer scroll
window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.classList.remove("transparent");
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    header.classList.add("transparent");
  }
});

// Cargar header.html dinámicamente
fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    // Activar el menú después de insertarlo
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");

    function toggleSidebar() {
      sidebar.classList.toggle("show");
    }

    menuToggle.addEventListener("click", toggleSidebar);
    closeBtn.addEventListener("click", toggleSidebar);
  });

// Animación al hacer scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);

// Header transparente al inicio
window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.classList.remove("transparent");
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    header.classList.add("transparent");
  }
});

