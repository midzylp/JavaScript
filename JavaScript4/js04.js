console.log("Sesion JS04 Hola")

/* Declarar un array */

const nombresCh26 = ["Sofi", "Alejandro", "Ixchel", "Said"];

/* Usando el constructor de arreglos */

const apellidosCh26 = new Array("Montellano", "Torres", "Vazquez");

const numCajonesEstacionamiento = new Array(4); /* [,,,,] */

const numCohortesAntiguas = new Array(26,27,28,29); /* [26,27,28,29] */

console.log("Apellido de Sergio " +apellidosCh26[1]);

/* Agregar un nuevo apellido al final del arreglo apellidos */

apellidosCh26.push("Ruiz");

console.log(apellidosCh26);


/* Matrices (arreglos de 2 dimensiones) */
/* Arrays anidados */
/* [ [] , [] , [] ] */

const personasEnCohorte = [
/* CH26 */   ["Arath","José","Karen","Sofi"], 
/* CH27 */   ["Manuel", "María", "Francisco", "Pablo", "Pepe"], 
/* CH28 */   ["Doris","Brendan","Lucas"]
/* No es necesario que tengan la misma dimensión, es decir la misma cantidad de elementos */
];

console.log("Personas CH27 " + personasEnCohorte[1].join(", "));

/* Accediendo a Francisco */


console.log("Paco en CH27 " + personasEnCohorte[1][2]);

console.log("Lucas de Ch28: " + personasEnCohorte[2][2]);

console.log("Karen de Ch28: " + personasEnCohorte[0][2]);

personasEnCohorte[1][3] = "Juan";

console.log(personasEnCohorte[1].join(", "));

/* myArray3D = [[]],[[]],[[]]] */


/* Iterar un arreglo de 2 dimensiones */

// Iterar todos los elementos en un arreglo de 2 dimensiones.

for (let fila = 0; fila < personasEnCohorte.length; fila++) {
    console.log(`Indice ${fila}: ${personasEnCohorte[fila]}`);
    for (let columna =0 ;columna < personasEnCohorte[fila].length; columna++) {
     console.log(`Nombre: ${personasEnCohorte[fila][columna]}`);        
    }
    
}


/* Usando forEach */

personasEnCohorte.forEach(fila => console.log(fila.forEach(columna=>console.log(columna))));


/* Iterar usando for of
Ejecuta sentencias por cada elemento de un objeto
iterable, como por ejemplo (arrays, strings y objetos)
*/

const myName= "Sergio";

for (let char of myName){
    console.log(char);
}

for (let fila of personasEnCohorte){
    for(let columna of fila){
        console.log(columna);
    }
}


/* -------------------------Consideraciones para el ciclo For------------------- */

/* No es necesario indicar el inicio, la comparación y la expresión final */

/* 
Sintaxis ciclo For:
for(inicio; comparación; expresiónFinal){
    sentencias;
  }
*/
/* Break: rompe con la iteración en curso y sale del ciclo */
let nIteracion = 0;
for(/*inicio*/; /* comparacion */ ; /* expresionFinal */){
    console.log(nIteracion);
    if(nIteracion===5)break;
    nIteracion++;
}

/* ----------------Ejercicio---------------------- */
/* Iterar y mostrar a las personas en cohorte y detener cuando se encuentre a Maria, dejar de iterar 
personas: Se usa un label para indicar en el break, hacia que ciclo romperá
*/
personas:
for (let fila of personasEnCohorte){
    for(let columna of fila){
        console.log(columna);
        if(columna=="María")break personas;
    }
}

/* Continue
Termina la ejecución de la sentencia en la iteración actual 
y continua la ejecución del ciclo con la proxima iteración(o en el label que se indique)
*/

console.log("Uso de continue");
/* No imprimir a María */
personas:
for (let fila of personasEnCohorte){
    for(let columna of fila){
        if (columna === "María"|| columna==="Maria")continue;{
        
        const concatenacion = "Persona " + columna;
        console.log(concatenacion);
        }
    }
}


/* ------------Ciclo while--------------------
Crea un bucle que ejecuta una sentencia mientras la condicion sea verdadera

while (condicion)
sentencias;

*/
/* let counter= 0;
while (confirm("¿Quieres continuar?")){
console.log(`Has continuado ${++counter} ${counter<2?"vez":"veces"}`)
} */

const numbers = [9,5,6,7];

let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}



/* -------------Ciclo do while----------------- */

/* Crea un bucle que ejecuta una sentencia hasta que
la condición de comprobación se evalúe como falso. */

/* La condición se evalúa despues de ejecutar la sentencia,
por lo que la sentencia se ejecuta por lo menos 1 vez */

/* 
Sintaxis:

do{
    sentencias;
} while(comprobación );

*/

/* let iteration = 0;
do {
    iteration ++;
    console.log("N. iteracion do-while: " + iteration)
} while (confirm("¿Deseas continuar?"));  */

let valor =-2;
while (valor<5) {
    console.log("While: " +valor);
    valor ++;
}
    
valor=5;
do {
    console.log("Do-While: " +valor);
    valor ++;
} while ( valor < 5);


/* FIFO: first input, first output
LIFO: last input, first output



*/

const alimentos = [];

/* Usar FIFO */
alimentos.push("Manzanas del lunes");
alimentos.push("Manzanas del miercoles");
console.log(alimentos);
/* Sacar las manzanas */
console.log("Sacando las manzanas antiguas: "+ alimentos.shift());
console.log("Sacando las manzanas antiguas: "+ alimentos.shift());
console.log(alimentos);


/* Usar LIFO */
const productos = [];
/* Temporada Navideña */
productos.push("Desarmadores");
productos.push("Luces de colores");
console.log(productos);
/* Quitando productos */
console.log("Sacando el producto reciente: " + productos.pop());
console.log("Sacando el producto reciente: " + productos.pop());
console.log(productos);





