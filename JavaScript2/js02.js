console.log("Sesion Js02");

/* ----------Función declarada------------ */
/* Function declaration, function statement */
/* Una caracteristica es que las funciones declaradas,
tienen hoisting, es decir pueden ser declaradas antes 
o despues de invocar la funcion */

console.log("El resultado de 5*10= "+ multiplica(5,10));

multiplica(5,10); /* Invocando la función sin retorno */
multiplica(8,8);
multiplica(-4,2);

/* Sintaxis:
function nombreFuncionCamelCase(parametros){
Instrucciones;
} */

function multiplica(operandoA, operandoB){
    const resultado = operandoA*operandoB;
    console.log(resultado);
}

function divide(dividendo, divisor){
    return dividendo/divisor
}

console.log(divide(10,5));
console.log(divide(10,"5")); /* Convierte el string a numerico por tipado debil */
console.log(divide("10","5")); /* De igual forma los convierte */
console.log(divide("5 0","5")); /* Aqui da NaN porque el 5 0 no lo reconoce */


/* -------------Funciones expresadas---------------- */
/* Function expressions: Estas funciones son declaradas
dentro de la asignación de una variable, pueden ser anonimas,
es decir que no tienen nombre, las funciones expresadas no tienen hoisting,
porque no se carga en memoria hasta que se utilice*/

/* Sintaxis:
const nombreVariable = function nombreFuncion(parametros){
    Instrucciones;
}
*/

 

const sum = function sumatoria(a,b){
    return a+b;
}

const resta = function (a,b){
    return a-b;
}

const potencia = function(a,b){
    return a**b;
}

console.log(sum(9,9));
console.log(resta(90,20));


/* ------------Funciones autoinvocadas----------------- */
/* Self-invoking functions */
/* Se autoinvocan, se pueden definir con funciones anonimas 
Estas pueden servir para encapsular codigo*/

(function (){
    console.log("Me autoinvoco en la función");
}) ();


/* -----------------Funciones flecha----------------- */
/* Arrow functions
Son funciones similares a las funciones declaradas,
pero no requieren la palabra function, si tiene una sola instruccion 
no requiere llaves de apertura y cierre, si la instruccion es el mismo retorno,
no requiere la palabra return */

/* const areaRectangulo = function (base,altura){
    return base*altura;

}
 */
const areaRectangulo = (base, altura) => base*altura;

console.log("Area del rectangulo 5*3 = " + areaRectangulo(5,3));


/* -------------Parametros default-------------- */

/**
 * 
 * @param {number} base esto es la descripción de la base
 * @param {number} altura esto es la descripción de la altura
 * @returns área del rectangulo
 */

const areaTriangulo = (base=1, altura=1)=> base*altura/2;
console.log("Area de triangulo b:5 a:10 = " + areaTriangulo(5,10));
console.log("Area de triangulo b:8 a:sin argumento = " + areaTriangulo(8));


/* --------------Parametros rest--------------------------- */
/* rest parameters, nos permiten representar una serie de valores indefinidos,
en los argumentos, estos se presentan como un array
Sintaxis: ...nombreParametro, debe estar al final de la lista de parametros */

function sumatoriaVariosNumeros(a,b, ...restoDatos){
    let suma;
    suma = a + b ;
    for (let index = 0; index < restoDatos.length; index++) {
        suma += restoDatos[index]; /* Suma= suma + restoDatos[index] */
        
    }
    
    return suma;
}

console.log("Sumatoria de varios numeros = " + sumatoriaVariosNumeros(5,6));
console.log("Sumatoria = " + sumatoriaVariosNumeros(5,6,9,10,20,50));

/* ------------------Funciones de Callback------------------ */
/* Función que se pasa a otra función como argumento, para luego 
invocarse y completar algun tipo de rutina o acción */

/* 3 Funciones, una que imprima en consola, alert, otra que imprima en el h1 */

const imprimirConsola = function(cualquierCosa){
    console.log(cualquierCosa);
}

const imprimirAlert = function(cualquierCosa){
    alert(cualquierCosa)
}

// Función que agrega un encabezado h1 al DOM
function addH1ToDOM(mensaje) {
    const h1 = document.createElement("h1");
    h1.innerText = mensaje;
    document.body.appendChild(h1);
  }

function getName(  ){
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un buen día`;
    imprimirConsola(text);
}
function getNameAndPrint(funcionImprimir){ /* Asi deberia ser con el callback */
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un buen día`; 
    funcionImprimir(text);
}

//getNameAndPrint(imprimirConsola);
//getNameAndPrint(imprimirAlert);
//getNameAndPrint(addH1ToDOM);
//getName();

/* ---------------------Escribe una función que tome un arreglo de numeros y duplique el valor de cada numero del arreglo e imprima el nuevo arreglo actualizado */


/* [5,10,15,20,25] -> [10,20,30,40,50] */

function double(arr) {
    const doubleNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      const duplicate = arr[i] * 2;
      doubleNumbers.push(duplicate);
    }
   return doubleNumbers;
}

/* Funcion que nos sirve de callback */
//const duplicate = (number) => number * 2;

/*function doubleWithMap (array){
    const duplicateNumber = array.map(function(number){
        return number * 2;
    } );
    return duplicateNumber;
}
*/

function doubleWithMap (array){
    const duplicateNumber = array.map(number => number*2 );
    return duplicateNumber;
}

const numbers = [5, 10, 15, 20, 25];

//console.log(double(numbers));
console.log(doubleWithMap(numbers));

/* /*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.
*/


const student1Courses = ["Math", "English", "Programming","Biology","Physics","Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];
const student3Courses = ["Music"];

function cursosEnComun (student1Courses,student2Courses) {
    const courses = [];
    for (let i=0; i < student1Courses.length; i++) {
     for (let j=0; j < student2Courses.length; j++) {
      if (student1Courses[i] == student2Courses[j]){
       courses.push(student1Courses[i]);
      }
     }
    } 
    return `Cursos en común: ${courses}`;
  }
  console.log(cursosEnComun( student1Courses, student2Courses ));

  /* Usar filter y usar includes 
  function cursosEnComunV2(student1Courses, student2Courses){
    const filtrado = student1Courses.filter(student1Courses => student2Courses.includes(student1Courses))
    return filtrado;
  }
  */

  function getCommonCoursesWithFilter(student1Courses,student2Courses) {
    return student1Courses.filter(course => student2Courses.includes(course));
}

const commonCourses = getCommonCoursesWithFilter(student1Courses, student2Courses);
const commonCoursesFilter= getCommonCoursesWithFilter(commonCourses,student3Courses)
console.log("Common courses:", commonCoursesFilter.join(", "));


/* -------------Contar la cantidad de caracteres de una frase--------------- */
/* Pepe Pecas Pica Papas con un pico y una pala */
/* La cantidad de letras p=8, usando arrow functions */


/*function searchLetter(frase){
const buscaLaLetra = (frase) => frase.includes("p");
return buscaLaLetra
}

console.log(searchLetter("pepe pecas pica papas con un pico y una pala"))

const pepito = "pepe pecas pica papas con un pico y una pala";

const buscaLaP= (frase) => frase.search("p");

console.log("El numero de letras P es = "+ buscaLaP("pepe pecas pica papas con un pico y una pala"));
*/

phrase = 'pepe pecas pica papas con un pico y una pala'

const countChar = (p, phrase) => phrase.split("").filter(c => c == p).length;

console.log("Cantidad de letras 'p':", countChar('p', phrase));

/*------------------------ Funciones recursivas--------------- */
/* Es una tecnica de programación donde la función se llama 
asimisma, se debe tener precaución de no entrar en bucle infinito */


/* function funcionRecursiva(valor){
    if(condicionDeParo){

    }
    else {
        //Llamada recursiva.
    }
} */

const factorialConCicloFor = (numero)=>{
    let total=1;
    for (let index = 1; index <= numero; index++) {
        total = total*index;
    }
    return total;
}

function factorialRecursivo(numero){
if(numero===1)
        return 1;
    return numero * factorialRecursivo(numero-1)
}


console.log("Factorial de 5: "+ factorialConCicloFor(5));
console.log("Factorial de 5: "+ factorialRecursivo(5));


/* ------------------------Ejercicio--------------------------- */
/* Una funcion recursiva que muestre en consola
saludo 1
saludo 2
saludo 3
...
saludo 10 */

/*function saludoRecursivo(numero){
    if(numero===0)
    return 1;
    return console.log(`Saludo ${numero}`);
}
Mi codigo todo rancio
*/
const saludar = ( numero ) => {
    if( numero === 1){
        console.log("Saludo " + numero);
    }else{
        saludar(numero - 1)
        console.log("Saludo " + numero);
    };
};

saludar(10);


