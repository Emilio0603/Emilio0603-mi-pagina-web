document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");
  
    function checkReveal() {
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const top = el.getBoundingClientRect().top;
        const revealPoint = 100;
  
        if (top < windowHeight - revealPoint) {
          el.classList.add("active");
        }
      });
    }
  
    window.addEventListener("scroll", checkReveal);
    checkReveal(); // Ejecutar al cargar
  });
  