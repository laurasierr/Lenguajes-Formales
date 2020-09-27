function pCardinalidad(p) {
  return p.split("").length;
}

function pInverso(p) {
  return p.split("").reverse().join("");
}


function opPalabras(op, p) {
  if (op === "Inverso") return pInverso(p);
  else if (op === "Cardinalidad") return pCardinalidad(p);
}
