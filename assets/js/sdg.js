// Animación para revelar elementos al hacer scroll en la página SDG

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 100;
  
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  }
  
  window.addEventListener("scroll", revealOnScroll);
  
  // Ejecutar al cargar para elementos que ya están visibles
  window.addEventListener("load", revealOnScroll);
  
  function revelarElementosScroll() {
  const elementos = document.querySelectorAll(".reveal");
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;
    if (top < trigger) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revelarElementosScroll);
document.addEventListener("DOMContentLoaded", revelarElementosScroll);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
