window.addEventListener("load", function () {
  foco();
});

function foco() {
  document.querySelector("body").classList.add("oscuridad");

  const titulo = document.createElement("h1");
  titulo.classList.add("titulo");
  const anio = new Date().getFullYear();
  const nombre = document.createElement("span");
  nombre.classList.add("nombre");
  nombre.innerText = "Roberto Viveros";
  titulo.innerText = `Demostraciones de desarrollo web ${anio} por ${nombre.innerText} `;
  document.body.appendChild(titulo);

  const img = document.createElement("img");
  img.classList.add("foco");
  img.setAttribute("src", "images/foco-apagado.jpg");

  img.addEventListener("click", () => {
    if (img.src.indexOf("apagado") > 0) {
      img.setAttribute("src", "images/foco-prendido.jpg");
      document.body.classList.remove("oscuridad");
      document.body.classList.add("luz");
    } else {
      img.setAttribute("src", "images/foco-apagado.jpg");
      document.body.classList.remove("luz");
      document.body.classList.add("oscuridad");
    }
  });
  document.body.appendChild(img);
}
