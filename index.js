window.onload = function () {
  selectMode();
}

function selectMode(e) {
  let mode = "Alfabetos";
  if (e) {
    document.querySelectorAll("a").forEach(a => a.classList.remove("active"));
    e.classList.add("active");
    mode = e.getAttribute("data-mode");
  }
  const container = document.querySelector("#dvContent");
  while (container.firstChild) container.removeChild(container.firstChild);
  const template = document.querySelector(`#tp${mode}`);
  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function calcular(e) {
  const tab = e.getAttribute("data-tab");
  const operation = e.getAttribute("data-operation");
  if (tab === "alfabetos") {
    const a = document.querySelector("#itAf1").value.split(",");
    const b = document.querySelector("#itAf2").value.split(",");
    const res = opAlfabetos(operation, a, b);
    document.querySelector("#restTitulo").innerText = `Resultado de la operacion: ${operation.toLowerCase()}`;
    document.querySelector("#res").innerText = `{${res.join(",")}}`;
  } else if (tab === "lenguajes") {
    const a = document.querySelector("#itLg1").value.split(",");
    const b = document.querySelector("#itLg2").value.split(",");
    let nPotencia = 0;
    if (operation === "Potencia") nPotencia = parseInt(prompt("Ingrese el numero de la potencia"));
    const res = opLenguajes(operation, a, b, nPotencia - 1);
    document.querySelector("#restTitulo").innerText = `Resultado de la operacion: ${operation.toLowerCase() + (operation === "Potencia" ? " L" + nPotencia : "")}`;
    if (operation === "Cardinalidad") document.querySelector("#res").innerText = `${res}`;
    else document.querySelector("#res").innerText = `{${res.join(",")}}`;
  } else if (tab === "palabras") {
    const p = document.querySelector("#itP").value.trim();
    const res = opPalabras(operation, p);
    document.querySelector("#restTitulo").innerText = `Resultado de la operacion: ${operation.toLowerCase()}`;
    document.querySelector("#res").innerText = res;
  }
}
