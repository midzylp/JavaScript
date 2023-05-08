console.log("Sesión Js05 Hola");

/*--------------- Operadores aritmeticos---------------- */
//Adicion +
/* Multiplicación * */
/* Sustraccion - */
/* División / */
/* Exponencial ** */
/* Resto % */

/* ejemplo */
let dinero = 20 + 10;

/* -----------Operadores de asignación---------- */
/* Asigna un valor a su operando izquierdo basandose
en el valor de su operando derecho */

/* Asignación = */
/* Asignación de adición += */
dinero +=15; /* dinero= dinero + 15; */
/* Multiplicación *= */
/* Sustracción -= */
/* División /= */
/* Exponencial **= */
/* Resto %= */

12 + 7 + 12 + 4 + 1;

console.log(2**3**2); /* 512 de resultado, esto se resuelve de derecha a izquierda
esto debido a que los exponentes se resuelven de derecha a izquierda */

/* ----------------------Operadores unarios------------------ */
/* Un operador unario, realiza una operación en un solo operando */
/* Negación - */
dinero = -3; /* Esto no es equivalente a -=, aquí queda el resultado con -3 */

/* Conversión a Numérico + */
dinero = +dinero;
dinero = +"200"; /* Lo convierte a 200 numérico */
console.log(dinero);


/* typeof */
/* Sirve para determinar el tipo de datos de un elemento */

/* Operador lógico not */
let valorBooleano = !true;
console.log(valorBooleano);

/* Operadores de incremento y decremento en una unidad */
/* Operadores de pre incremento y predecremento */

/* Preincremento ++valor */
/* Predecremento --valor */

/* Operador de post-incremento y post-decremento */
/* Post-incremento valor++ */
/* Post-decremento valor-- */

let numero = 10;
numero ++; /* 11 */ 
++ numero; /* 12 */
console.log(numero);

/* 
let nuevo valor = numero;
numero = numero +1;
*/
let nuevoValor = numero++; /* Primero asigna el valor y luego hace el incremento */
console.log(nuevoValor);
console.log(numero);


/* 
numero=numero+1;
nuevoDato=numero;
*/

let nuevoDato = ++numero;
console.log (nuevoDato);

let x = 3;
let y = ++x;

console.log(`x: ${x++} y: ${++y} `);
console.log(`x: ${x} y: ${y}`);

/* Estos solo sirven para aumentar el valor de 1 en 1, para aumentar mas, se requiere de el +=  */


/*------------------ Operadores logicos AND y OR--------------- */

const a = true;
const b = false;
const c = true;

console.log(a || b && c);

/* Operadores de corto circuito */
/* Cuando los operadores lógicos and y or actuan sobre diferentes valores booleanos */

/* OP1 && OP2 Si OP1 es verdadero, se realiza, el resultado de OP2 */
console.log( a && "Holi Crayoli");
console.log( b && "Holi Crayoli");

console.log( NaN && "El valor es un número que se puede procesar:");
console.log( "false" && "El valor es un número que se puede procesar:");
console.log( "" && "El valor es un número que se puede procesar:");

/* OP||OP2 si OP1 es verdadero, se realiza OP1, en caso contrario se realiza OP2 */

console.log( a || "Holi Crayoli");
console.log( b || "Holi Crayoli");

console.log( NaN || "El valor es un número que se puede procesar:");
console.log( "false" || "El valor es false");
console.log( "" || "No hay dato");

/* El primer operando va a decidir si se ejecuta el de la derecha */
const noDefinido = true;
console.log( noDefinido || theBigBang );

/* Quiero imprimir: Estas autorizado si la variable isOnline e isActive is true */

const isOnline= true;
const isActive= true;

if (isOnline) 
    if (isActive) 
     console.log("Estás autorizado: ");   
    
if (isOnline && isActive)
    console.log("Estás autorizado");

/* Usando operador ternario */
console.log(isOnline && isActive ? "Estas autorizado": "No estas autorizado");

/* Usando corto circuito */
console.log( isOnline && isActive && "Estas autorizado");


/* ------------------Operadores relacionales---------------------- */
/* Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. Las cadenas se comparan según el orden lexicográfico estándar, utilizando valores Unicode. En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript intenta convertirlos a un tipo apropiado para la comparación. Este comportamiento generalmente resulta en comparar los operandos numéricamente.

< menor que
> mayor que
<= menor o igual que
>= mayor o igual que
== igual que
 */

/* Cuando son de diferentes tipos se tratan de convertir a su equivalente numerico */
console.log( true == "true");
/* En este caso el true lo convierte a 1 = y el "true" es igual a NaN, por eso la respuesta es false */
console.log( 23 < "40");

console.log( "b" < "A" );

console.log( "Hola" < "HOLA" );
console.log( "Hola" < "123" );
/* Recordar que solo compara el primer caracter, en el caso de que sean iguales se va con el segundo */

console.log( "Hola" < "KeHace" + 1000);
 /* Eso es igual a "Hola" < "KeHace1000" */

 console.log( "23" == 23);


 /* -----------------Comparación estricta------------- */

 /* 
 === Estrictamente igual, se compara valor y tipo
 !== Estrictamente diferente, igual debe ser diferente en valor y tipo
 */

 console.log("23"===23);
 console.log("true"===true);
 console.log("45"!==45);


 /*----------- Operador de asignación ---------------*/
 /* 
 const myNumber = 34;
 */


 /* --------------Desestructuración(Destructuring)----------------- */

 /* 
 Es una expresión en JS que hace posible extraer datos de arreglos o objetos y nos ayuda a realizar asignaciones más complejas
 */

let variableA = 10;
let variableB = 20;
/* console.log(`a: ${variableA}, b: ${variableB}`) */
/* Quiero intercambiar los datos */

/* let temporal;

temporal = variableA;
variableA = variableB;
variableB = temporal; */

/* -Usando la desestructuración */

[variableA, variableB] = [variableB,variableA]

console.log(`a: ${variableA}, b: ${variableB}`)

const calificaciones = [50, 80, 100, 30, 60, 99];
 /* dataA = calificaciones[0]; // 50
 dataB = calificaciones[1]; // 80 */
let resto;
[ dataA, dataB, ...resto] = calificaciones;
console.log(`a: ${dataA} , b:${dataB} `);
console.log(resto);

/* Desestructuración con objetos */

const primerAnio = {
    dataA: "43 alumnos",
    dataB: "50 alumnos",
    dataC: "20 alumnos"
};

({dataA, dataB} = primerAnio);
console.log(`a: ${dataA} , b:${dataB} `);

const auto = {
    model: "Mazda",
    year: 2023,
    color: "red",
    motor: "2.0"
};

console.log("Modelo " + auto.model); /* auto["model"] es lo mismo */

/* Asignando el valor model del objeto auto a la variable model */

/* Asignar un nuevo nombre al atributo */
const {model, color: colorAuto} = auto;
console.log("Modelo " + model + " color:" + colorAuto); /* auto["model"] es lo mismo */


/* -----------Ejercicio--------------- */

/* Hacer una función que realice la división de 2 números y me entregue (return) en entero el cociente y residuo */

const division = (numA, numB) => {
    const cociente = parseInt(numA/numB);
    const residuo  = numA % numB;
    return { cociente, residuo };
  }
  
  //console.log(`El resultado de 9/5, cociente: ${ division(9,5).cociente }, residuo ${ division(9,5).residuo } `);
  
  const { cociente, residuo} = division(9,5);
  console.log(`El resultado de 9/5, cociente: ${ cociente }, residuo ${ residuo } `);
  
  // fin de la sesion;
