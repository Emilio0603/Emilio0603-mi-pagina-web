function abrirLateral(id) {
  const panel = document.getElementById("panelLateral");
  const contenido = document.getElementById("contenidoLateral");

  let html = "";

  switch (id) {
    case "info1":
      html = `
        <img src="assets/imagenes/edificio_sostenible.png" alt="Imagen info1" class="panel-img" />
        <h2 class="panel-titulo titulo-info1">Crecimiento urbano desorganizado y casas en zonas altas</h2>
        <p>Durante nuestra clase reflexionamos sobre cómo la ciudad está creciendo rápidamente en todas direcciones, especialmente hacia zonas elevadas como las montañas o cerros. Observamos fraccionamientos construidos en lugares que antes eran considerados inaccesibles, lo cual nos llevó a cuestionar la falta de planificación urbana. Este tipo de crecimiento desorganizado genera muchos problemas: llevar servicios básicos como agua y electricidad a zonas altas implica un alto costo económico, que termina pagándose con recursos públicos.</p>
        <p>Además, este desarrollo no siempre es sustentable ni justo para el medio ambiente. También discutimos la arquitectura de la ciudad, y cómo muchas zonas parecen descuidadas. Creemos que el gobierno debería implementar programas de apoyo, como subsidios para mejorar viviendas, aplicar pintura o promover una revitalización urbana más equitativa y verde, con más naturaleza en el entorno.</p>

      `;
      break;
    case "info2":
      html = `
        <img src="assets/imagenes/istockphoto-611623856-612x612.jpg" class="panel-img" alt="Estado visual">
          <h2 class="panel-titulo titulo-info2">Estado visual de las viviendas y participación ciudadana</h2>
        <p>Algo que llamó nuestra atención fue el aspecto visual de las casas. Muchas estaban descoloridas, con muros deteriorados, lo que refleja cierto abandono o falta de recursos para su mantenimiento. En contraste, notamos que algunos fraccionamientos nuevos tenían casas blancas, muy uniformes. Sin embargo, hubo una zona distinta, con casas de colores vivos, que destacaban por su alegría visual. Descubrimos que esto se debió a una iniciativa del gobierno, donde se proporcionó pintura a los vecinos para que renovaran sus hogares. Este ejemplo nos pareció positivo, porque muestra cómo una pequeña acción colectiva, con apoyo institucional, puede mejorar el entorno urbano y generar un sentido de comunidad. Refleja cómo la estética urbana también influye en la percepción y en la identidad del espacio.</p>
      `;
      break;
    case "info3":
      html = `
        <img src="assets/imagenes/tlacuache-fauna-urbana-tamara-blazquez-haik.jpg" class="panel-img" alt="Fauna y urbanismo">
        <h2 class="panel-titulo titulo-info3">Impacto urbano en la fauna y la naturaleza</h2>
        <p>Una de las reflexiones más profundas surgió al hablar sobre la fauna urbana, especialmente las aves. El profesor mencionó que los pájaros no sobreviven gracias a nosotros, sino a pesar de nosotros, una frase que nos hizo pensar seriamente. Muchas veces, sin darnos cuenta, destruimos su hábitat al expandir la ciudad y también hay quienes los lastiman deliberadamente. </p> 
        <p>Observamos que el cerro estaba seco y dañado, lo cual se debe en parte a un incendio ocurrido en junio de 2024, que afectó fuertemente la vegetación. Esto nos ayudó a entender cómo el cambio climático, la falta de naturaleza urbana y los desastres ambientales están todos conectados, y cómo afectan directamente a los ecosistemas. La naturaleza no es un adorno, es parte vital de nuestro entorno, y necesita ser protegida incluso dentro de la ciudad.</p>
      `;
      break;
    case "info4":
      html = `
    <img src="assets/imagenes/Parque-Sostenible-5-1024x451.jpg" class="panel-img" alt="Espacios recreativos">
    <h2 class="panel-titulo titulo-info4">Espacios recreativos sustentables y el contacto con la naturaleza</h2>
    <p>En clase también imaginamos propuestas para hacer más sustentable y atractivo un lugar como Cerro Gordo. Surgió la idea de instalar una tirolesa o alguna actividad recreativa accesible, que permita a las personas tener contacto directo con la naturaleza sin dañarla. </p>
    <p>Pensamos que sería una forma de generar ingresos y fomentar el ecoturismo, siempre desde una perspectiva sustentable. También hablamos de otros espacios recreativos como los estadios o campos de golf, pero sentimos que todavía faltan áreas accesibles para el ocio cotidiano: parques, ciclovías, senderos o espacios públicos donde las personas puedan correr, jugar, andar en bici y convivir. El acceso a áreas verdes y al deporte no debería ser un privilegio, sino una parte fundamental de una ciudad saludable y bien planificada.</p>
      `;
  break;
  }

  contenido.innerHTML = html;
  panel.classList.add("active");
}

function cerrarLateral() {
  document.getElementById("panelLateral").classList.remove("active");
}


function cerrarLateral() {
  const panel = document.getElementById("panelLateral");
  panel.classList.remove("active");
}

function setValorPersonalAnimado() {
  const valorFinal = 9;
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

    progreso.style.stroke = valorActual <= 5 ? "red" :
                             valorActual <= 7 ? "orange" : "green";

    texto.textContent = valorActual;
    valorActual++;
  }, 120);
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
  setValorPersonalAnimado();
  revelarElementosScroll();
});

// Valor Personal - Círculo animado
document.addEventListener("DOMContentLoaded", () => {
  const progreso = document.getElementById("valor-progreso");
  const texto = document.getElementById("valor-texto");
  let valor = 7; // cambia del 1 al 10
  let porcentaje = (valor / 10) * 283;
  progreso.style.stroke = "#0f0"; // color del progreso
  progreso.style.strokeDashoffset = 283 - porcentaje;
  texto.textContent = valor;
});

