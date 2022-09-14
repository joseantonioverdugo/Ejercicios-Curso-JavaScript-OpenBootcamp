import { suma, multiplicar } from "./controller.js";
import chalk from "chalk";

const mult = multiplicar(suma(1, 2), suma(4, 5));
console.log(mult);
console.log(chalk.bgGreen(mult));
