document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  function handleReveal() {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const threshold = 100;

      if (top < windowHeight - threshold) {
        el.classList.add("active");
      }
    });
  }

  handleReveal(); // Ejecuta al cargar
  window.addEventListener("scroll", handleReveal);
});

function setValorPersonalAnimado() {
  const valorFinal = 8; // Puedes cambiarlo entre 1 y 10
  const progreso = document.getElementById("valor-progreso");
  const texto = document.getElementById("valor-texto");

  if (!progreso || !texto) return;

  let valorActual = 0;
  const intervalo = setInterval(() => {
    if (valorActual > valorFinal) {
      clearInterval(intervalo);
      return;
    }

    const porcentaje = valorActual / 10;
    const offset = 283 * (1 - porcentaje);
    progreso.style.strokeDashoffset = offset;

    if (valorActual <= 5) {
      progreso.style.stroke = "red";
    } else if (valorActual <= 7) {
      progreso.style.stroke = "orange";
    } else {
      progreso.style.stroke = "green";
    }

    texto.textContent = valorActual;
    valorActual++;
  }, 100);
}

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
document.addEventListener("DOMContentLoaded", () => {
  revelarElementosScroll();
  setValorPersonalAnimado();
});
