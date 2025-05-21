// Animación de aparición al hacer scroll para Ciencia Abierta

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
  window.addEventListener("load", revealOnScroll);
  
  function toggleExpand(btn) {
  const tarjeta = btn.closest('.tarjeta-expandible');
  tarjeta.classList.toggle('expandida');
}

function setValorPersonalAnimado() {
  const valorFinal = 10;
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

document.addEventListener("DOMContentLoaded", () => {
  setValorPersonalAnimado();
  revelarElementosScroll();
});

window.addEventListener("scroll", revelarElementosScroll);
