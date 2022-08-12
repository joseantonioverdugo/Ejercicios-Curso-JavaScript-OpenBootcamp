const compra = ["lechuga", "huevos", "leche", "melon", "pollo"];

compra.push("Aceite de Girasol");
// compra.splice(5,0, 'Aceite de Girasol')
console.log(compra);

const peliculas = [
  {
    titulo: "El efecto mariposa",
    director: "Eric Bress",
    fecha: new Date(2004, 3, 30),
  },
  {
    titulo: "Spider-Man: No Way Home",
    director: "Jon Watts",
    fecha: new Date(2021, 11, 16),
  },
  {
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    fecha: new Date(1995, 0, 13),
  },
];

const peliculasNuevas = peliculas.filter(
  (pelicula) => pelicula.fecha > new Date(2010, 0, 1)
);

console.log(peliculasNuevas);

const directores = peliculas.map((pelicula) => {
  return pelicula.director;
});
console.log(directores);

const titulos = peliculas.map((nombre) => {
  return nombre.titulo;
});
console.log(titulos);

const cadena = directores.concat(titulos);
console.log(cadena);

const propagacion = [...directores, ...titulos];
console.log(propagacion);
