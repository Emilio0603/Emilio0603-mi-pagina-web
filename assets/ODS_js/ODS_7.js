// Animación Reveal al hacer scroll
function revealElements() {
  const elements = document.querySelectorAll('.reveal');
  elements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visible = 100;

    if (elementTop < windowHeight - visible) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);
