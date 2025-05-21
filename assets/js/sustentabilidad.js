document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  function scrollReveal() {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  scrollReveal();
  window.addEventListener("scroll", scrollReveal);

  // Funcionalidad del desplegable
  const toggleBtn = document.getElementById("toggle-desplegar");
  const contenido = document.getElementById("contenido-desplegable");

  toggleBtn.addEventListener("click", () => {
    const visible = contenido.style.display === "block";
    contenido.style.display = visible ? "none" : "block";
    toggleBtn.textContent = visible ? "▼" : "▲";
  });
});
