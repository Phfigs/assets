const responsavel = document.querySelector("#responsavel");
const cnpjEstabelecimento = document.querySelector("#cnpjEstabelecimento");
const telefone = document.querySelector("#telefone");
const email = document.querySelector("#email");
const cidade = document.querySelector("#cidade");
const tipoEstabelecimento = document.querySelector("#tipoEstabelecimento");
const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function () {});

let count = 1;

document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  if (count > 5) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}
