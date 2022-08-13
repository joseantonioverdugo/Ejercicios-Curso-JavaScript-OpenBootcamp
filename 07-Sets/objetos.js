const datos = {
  nombre: "Jose Antonio",
  apellido: "Verdugo",
  edad: 30,
  altura: 185,
  eresDesarrollador: true,
};

const prop = datos.edad;
console.log(prop);

const datos2 = [
  {
    ...datos,
  },
  {
    nombre: "Pedro",
    apellido: "Angulo",
    edad: 35,
    altura: 180,
    eresDesarrollador: true,
  },
  {
    nombre: "Amaia",
    apellido: "Etxeberria",
    edad: 28,
    altura: 165,
    eresDesarrollador: false,
  },
];

const ordenar = datos2.sort((a, b) => b.edad - a.edad);
console.log(datos2);
