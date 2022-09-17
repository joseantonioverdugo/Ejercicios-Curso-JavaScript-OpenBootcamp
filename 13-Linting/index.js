let nombre = "Jose"
let apellido = "Verdugo"
let estudiante = `Hola soy ${nombre} ${apellido} `

console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)
let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

let letrasLenght = estudiante.length
console.log(letrasLenght)

let firstLetter = estudiante.substring(0, 1)
console.log(firstLetter)

let lastLetter = apellido.substring(apellido.length - 1)
console.log(lastLetter)

let spaces = estudiante.replace(" ", "")
console.log(spaces)

let bool = estudiante.includes(nombre)
console.log(bool)
