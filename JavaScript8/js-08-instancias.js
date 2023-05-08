import{ Car, ElectricCar } from "./js-08-clase-auto.js";
console.log("Importar y exportar clases");

const elantra = new Car("Elantra", "Hyundai", 410_000);

console.log( elantra.getDescription());
console.log(elantra.name);
console.log(elantra.brand); //undefined, porque el atributo está protegido

const electricElantra = new ElectricCar("Elantra Electric", "Hyundai", 450_000,5);
console.log(electricElantra.getDescription());

/* Paso 1 en el script type="module" */
/* Paso 2: exportar desde el archivo lo que se quiera exportar */
/* Paso 3: importar  */