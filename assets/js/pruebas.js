function toggleExpand(btn) {
  const tarjeta = btn.closest(".tarjeta-expandible");
  tarjeta.classList.toggle("expandida");

  btn.textContent = tarjeta.classList.contains("expandida") ? "Ver menos" : "Ver más";
}

