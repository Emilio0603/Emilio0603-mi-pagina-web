document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  function handleScrollReveal() {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  handleScrollReveal();
  window.addEventListener("scroll", handleScrollReveal);

  // Botón desplegable
  const toggle = document.getElementById("toggle-info");
  const content = document.getElementById("exp-info");

  toggle.addEventListener("click", () => {
    const visible = content.style.display === "block";
    content.style.display = visible ? "none" : "block";
  });
});

// Tarjetas redondas
function toggleCard(btn) {
  const card = btn.closest(".card");
  card.classList.toggle("expandida");
  btn.textContent = card.classList.contains("expandida") ? "↑" : "↓";
}

function setValorPersonalAnimado() {
  const valorFinal = 10; // Cambia aquí el valor de 1 a 10
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
  }, 150);
}

document.addEventListener("DOMContentLoaded", () => {
  setValorPersonalAnimado();
});
