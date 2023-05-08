console.log("SesiónJS01");

/* 7 datos primitivos
Strings: "Hola"
*/

console.log("Tipo de dato string: Hello world");

/* Number: 12, -45, 12.8, +infinity, - infinity, NaN, los numeros usan 64 bits para almacenar, 
pero solo se usan 53 bits para representar el numero*/

console.log("Tipo de dato number: ", 12, -56/0, 45/0, 56*"hola");
console.log("Valor máximo: ", Number.MAX_VALUE);
console.log("Valor seguro: ", Number.MAX_SAFE_INTEGER)

/* Bigint: Sirven para representar valores numericos enteros,
de los que el tipo number no puede representar o no es seguro */

console.log("MAX_SAFE_INTEGER+1: ", Number.MAX_SAFE_INTEGER+1);
console.log("MAX_SAFE_INTEGER+2: ", Number.MAX_SAFE_INTEGER+2); /* No representa el valor */
let myBigInt = 9007199254740991n; /* Se agrega la n al final, para que sea bigint */
console.log("Valor de dato bigint: ", myBigInt);
console.log("MAX_SAFE_INTEGER+1n: ", myBigInt+ 1n);
console.log("MAX_SAFE_INTEGER+2n: ", myBigInt+ 2n); /* Aquí si lo representa adecuadamente */

/* Boolean: Solamente 2 estados: "True" o "False" */

console.log("Tipo de dato boolean: ", true);
console.log("Tipo de dato boolean: ", false);

/* Undefined: Es un dato que es declarado pero no definido en el tipo */

let myVar; /* Solo se declara pero no se le da un valor */
console.log("Tipo de dato undefined: ", myVar);

/* Null, intencionalmente se borra el tipo de dato */
let myVarNull; /* Se declara solamente */
console.log("Tipo de dato myVarNull: ", typeof(myVarNull)); /* El typeof te lo imprime como tipo string */
myVarNull = "Saludos Sr.PP"; /* Se asigna un dato string */
console.log("Tipo de dato myVarNull: ", typeof(myVarNull));
myVarNull = null;
console.log("Tipo de dato myVarNull: ", typeof(myVarNull)); /* No es un objeto, 
solo que Js tiene un error que jamas va a ser solucionado y el null lo pone como tipo object */

/* Symbol: Crea propiedades privadas en los objetos, estas sirven 
para ocultar información al exterior */
/* ---------------------------------------------------------------------------------------------------------------------------------------- */
/* Tipos de datos Object:
Los hay de 2 tipos, los que son puramente objetos
Object: Son clave, valor, lo mejor es declararlos como const para no modificarlos*/

const misDatosDePerfil = {
    /* Clave:valor, recuerda separar por comas entre cada clave y valor */
    nombre: "Sergio",
    apellido: "Torres",
    edad: 39,
    isBelicoso: false,
    /* Puedes poner objetos dentro de un objeto */
    musicaPreferidaPorGenero: {
        rock: "La celula que explota",
        corridosTumbados: "Ella Baila Sola",
    },
    nombreCompleto: function fullName(){
        return this.nombre + " " + this.apellido
    }
}

console.log("Datos completos: ", misDatosDePerfil);
console.log("Nombre: ", misDatosDePerfil.nombre);
console.log("Música de fin de semana: ", misDatosDePerfil.musicaPreferidaPorGenero.corridosTumbados); 
/* El punto se utiliza para traer un atributo o un método */
console.log("Nombre completo: ", misDatosDePerfil.nombreCompleto() );

/* Tipos Array:
Almacena diferentes tipos de datos, su primer elemento es el indice 0 */

/* Se deben separar de igual forma mediante "," y se utilizan corchetes "[]" */
const cancionesPP = [ 
    "Soy el belicón",
    "El azul",
    "El Tsurito",
    "AMG",
    {
        2020: 5,
        2021: 30,
        2022: 56,
        total: 91
    }
];

console.log("Cancion con color: ", cancionesPP[1]);
console.log("Canciones hechas en el año 2021: ", cancionesPP[4].total);
console.log("Canciones hechas en el año 2021: ", cancionesPP[4][2021]);

console.log("Canciones de PP en numero de elementos: ", cancionesPP.length);
console.log("Contiene la cancion AMG: ", cancionesPP.indexOf("AMG"));

/* ----------------------------------------------------------------------------------------------
Conversión de datos */

const myNumber = 420; 
console.log("Numero de minutos en la sesión: " + myNumber);
const myNumberTxt = String(myNumber);
console.log("Numero de minutos en la sesión: " + myNumberTxt);

/* To Numer, ParseInt y ParseFloat */

/* ToNumber */
const myString = "420";
const sumatoria = 80 + Number(myString); /* Se convierte el myString a tipo number y hace la sumatoria */
console.log("Valor de sumatoria: " + sumatoria);

/* toParseInt */
const myStringInteger= "420 2020";
const sumatoriaEntera = 80 + parseInt(myStringInteger); /* Solamente devuelve el numero entero, a pesar de ser numero flotante */
console.log("Valor de sumatoria Entera: " + sumatoriaEntera);

/* toParseFloat si toma el numero con los puntos decimales 
const myStringInteger= "420.2020";
const sumatoriaEntera = 80 + parseFloat(myStringInteger);  Solamente devuelve el numero entero, a pesar de ser numero flotante 
console.log("Valor de sumatoria Entera: " + sumatoriaEntera);
*/

/* toBoolean Strings */

const isBelicoso= "false";
console.log(typeof isBelicoso);
console.log( Boolean(isBelicoso));

if ( isBelicoso == false)
console.log("Denle su belikin");
else
console.log("Abra paso a la barredora");

/* Para que sea False, debe ser string vacio, 0, null y undefined */

/* toBoolean, pero para numericos es
Number 
[]= 0, [30] = 30, [3,1]= NaN, false= 0, true= 1
String
[]="", [1,2]= "1,2", function(){}= function(){}, {}=[object, Object] */




