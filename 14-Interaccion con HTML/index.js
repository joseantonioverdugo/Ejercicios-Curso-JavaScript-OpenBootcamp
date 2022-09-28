const boton = document.getElementById("btn")
boton.addEventListener("click", () => {
  alert("click en el botón")
})

$("#btn").click(function () {
  console.log("Estoy trabajando con jQery")
})
