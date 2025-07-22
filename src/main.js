let atrasar = document.getElementById("btnIzq");
let adelantar = document.getElementById("btnDer");
let position = 0;
let headings = document.querySelectorAll("h2, .pear, .apple, .exotic");

function actualizar() {
  document.body.style.setProperty('--position', position);
  animation()
}

atrasar.addEventListener("click", () => {
  if (position > 0) {
    position -= 1;
    actualizar();
  }
});

adelantar.addEventListener("click", () => {
  if (position < 2) {
    position += 1;
    actualizar();
  }
});

function animation() {
  headings.forEach((heading) => {
    heading.style.animation = 'none'

    void heading.offsetWidth; // Fuerza un reflow (esto reinicia la animación en navegadores)

    heading.style.animation = 'Begin 1.4s';
  });
}
