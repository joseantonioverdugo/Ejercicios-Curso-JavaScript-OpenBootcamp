const nombre = "Jose"
const apellido = "Verdugo"
const datos = { nombre, apellido }
console.log(datos)

// sessionStorage.setItem("datos", JSON.stringify(datos))
// localStorage.setItem("datos", JSON.stringify(datos))

const now = new Date()
// document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(
//   now.getTime() + 2 * 60000
// )}`
