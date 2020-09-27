function afUnion(a, b) {
  return Array.from(new Set([...a, ...b]));
}

function afIntersection(a, b) {
  let resultado = [];
  for (let el of a) {
    if (b.includes(el)) resultado.push(el);
  }

  return Array.from(new Set([...resultado]));
}

function afDifference(a, b) {
  let resultado = [];
  for (let el of a) {
    if (!b.includes(el)) resultado.push(el);
  }

  return Array.from(new Set([...resultado]));
}

function opAlfabetos(op, a, b) {
   if (op === "Union") return afUnion(a, b);
   else if (op === "Interseccion") return afIntersection(a, b);
   else if (op === "Diferencia") return afDifference(a, b);
}
