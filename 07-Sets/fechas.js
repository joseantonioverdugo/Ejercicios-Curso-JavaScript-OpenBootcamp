const fecha = new Date();
console.log(fecha);

const nacimiento = new Date(1991, 10, 24);
console.log(nacimiento);

const comp = fecha > nacimiento;
console.log(comp);

const diaNacimiento = nacimiento.getDate();
console.log(diaNacimiento);
const mesNacimiento = nacimiento.getMonth() + 1;
console.log(mesNacimiento);
anyoNacimiento = nacimiento.getFullYear();
console.log(anyoNacimiento);
