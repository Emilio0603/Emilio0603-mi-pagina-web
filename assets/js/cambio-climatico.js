document.addEventListener("DOMContentLoaded", () => {
  const barra = document.getElementById("barra-temperatura");
  let temp = 50;
  let direction = 1;

  setInterval(() => {
    temp += direction;
    if (temp >= 90 || temp <= 10) direction *= -1;
    barra.style.height = `${temp}%`;
  }, 100);

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


  // Reveal al hacer scroll
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // Expansión texto factores
  const toggle = document.getElementById("toggle-factores");
  const contenido = document.getElementById("contenido-factores");

  toggle.addEventListener("click", () => {
    contenido.style.display = contenido.style.display === "block" ? "none" : "block";
  });
});

function setValorPersonalAnimado() {
  const valorFinal = 9; // Valor deseado (del 1 al 10)
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

document.addEventListener("DOMContentLoaded", () => {
  setValorPersonalAnimado();
});

