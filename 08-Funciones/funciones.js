function verdadero() {
  return true;
}
console.log(verdadero());

async function asincrona() {
  return setTimeout(() => console.log("Hola soy una promesa"), 5000);
}

function* pares() {
  let id = 0;
  while (true) {
    yield (id += 2);
  }
}
const num = pares();
console.log(num.next());
