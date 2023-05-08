console.log("Sesion Js03");

// ----- Declaración de bloque --------------------

{
    /*
    Las variables declaradas con let y const
    solo tendrán alcance(scope) dentro del bloque
    o bloques anidados.
    */
 let nombre = "Sergio";
 const apellido = "Torres";
 let edadSergio = 39, edadLuis = 25; 
 // let edadSergio = 39;
 // let edadLuis = 25;
 let numCohorteSergio = numCohorteLuis = 26;

   {
    /*
     bloque anidado
     Si una variable local tiene el mismo nombre de
     una varible global o de bloque superior, la varible
     local oculta las otras variables, para que la variable
     local sea usada.
     */
    let nombre = "Luis";
    const apellido = "SP";  
    console.log(`Me llamo ${nombre} ${apellido}`);
    console.log(`Sergio: ${edadSergio} años`); // 39
    console.log(`Luis ${edadLuis} años`) // 25
    console.log(`Sergio cohorte: ${numCohorteSergio} `); // 26
    console.log(`Luis cohorte ${numCohorteLuis} `) // 26

}
console.log(`Me llamo ${nombre} ${apellido}`);
console.log(`Sergio: ${edadSergio} años`); // 39
console.log(`Luis ${edadLuis} años`) // 25
console.log(`Sergio cohorte: ${numCohorteSergio} `); // 26
console.log(`Luis cohorte ${numCohorteLuis} `) // 26
}
//console.log(`Me llamo ${nombre} ${apellido}`); Las variables no estaán definidas
//console.log(`Sergio: ${edadSergio} años`); // Las variables no estaán definidas
//console.log(`Luis ${edadLuis} años`) // Las variables no estaán definidas
console.log(`Luis cohorte ${numCohorteLuis} `) // 
//console.log(`Sergio cohorte: ${numCohorteSergio} `); // 


/* ----------------------Condicional if-else---------------- */
/* La condicional if ejecuta una sentencia si una condicion especificada es evaluada como verdadera

Sintaxis:
if(condicion) sentencia;

if(condicion){
    sentencias;
}

if(condicion) sentencia;
else sentencia;

if(condición) {
    sentencia;
} else if(condicion2){
    sentencia;
} else if(condicion n){
    sentencia;
} else {
    sentencia;
}
*/


/*  */


const temperatura = 42;
let mensaje;

//if(temperatura === 21) mensaje = `Temperatura ideal ${temperatura} `;
//else mensaje = `${temperatura} grados no es ideal`;

if(temperatura === 21) {
    mensaje = `Temperatura ideal ${temperatura}`;
}
else if(temperatura>21 && temperatura <40){
    mensaje = `Temperatura de ${temperatura} grados es caliente`;
} 
else if (temperatura<21){
    mensaje = `Temperatura de ${temperatura} grados es fria`;
}
 else {
    mensaje = `Temperatura de ${temperatura} grados no existe`;
}

console.log(mensaje);


/* -----------Ejercicio---------------- */
/*  
Preguntar por el número de mes, del 1 al 12 
y luego de acuerdo al mes, desplegar en un 
alert o en el dom la estación del año, donde
el mes 12,1,2= Invierno 3,4,5=Primavera
6,7,8= Verano 9,10,11= Otoño
usar if else
*/


/* ---------------Switch----------------------- */

/* La instrucción switch evalúa una expresion y se compara con el valor  de cada instancia en "case" y se ejecuta las sentencias asociadas a ese "case" hasta que se encuentre la sentencia break

Sintaxis:
    Switch(expresión){
        case valor 1: 
            sentencias;
            break;
        case valor 2:
            sentencias;
            break;
        case valor n:
            sentencias;
            break;
        default:
            sentencias;
            break;
    }


*/



const setVelocidadVentilador= ( velocidad) => {
    let msj;
    switch (velocidad){
      case 0:
        msj = "Apagado";
        break;
      case 1:
        msj = "Velocidad baja";
        break;
      case 2:
        msj = "Velocidad media";
        break;
      case 3:
        msj = "Velocidad alta";
        break;
      case 4: case 5:
        msj = "Velocidad super alta";
        break;
      default:
        msj = "el nivel no existe";
    }
    return msj;
  }

  /* En este caso la comparación es estricta, por lo que si se pone un string no se hace la conversión */

  
  console.log("El ventilador está en:" + " "+ setVelocidadVentilador(1));


  /* --------------Práctica------------------------- */
  /* Refactorizar el ejercicio anterior y usar un switch */
/*const getEstacion=()=>{
    const mes=parseInt(document.getElementById.value)
    let notificacionMes;
    switch (mes){
      case 12: case 1: case 2:
        notificacionMes = "Este mes corresponde a Invierno";
        break;
      case 3: case 4: case 5:
        notificacionMes = "Este mes corresponde a Primavera";
        break;
      case 6: case 7: case 8:
        notificacionMes = "Este mes corresponde a Verano";
        break;
      case 9: case 10: case 11:
        notificacionMes = "Este mes corresponde a Otoño";
        break;
      default:
        notificacionMes = "El mes introducido no es valido";
    }
    return notificacionMes;
}
*/
const getEstacion=()=>{
    const mes=parseInt(document.getElementById("mes").value);
    let notificacionMes;
    switch (mes){
      case 12: case 1: case 2:
        notificacionMes = "Este mes corresponde a Invierno";
        break;
      case 3: case 4: case 5:
        notificacionMes = "Este mes corresponde a Primavera";
        break;
      case 6: case 7: case 8:
        notificacionMes = "Este mes corresponde a Verano";
        break;
      case 9: case 10: case 11:
        notificacionMes = "Este mes corresponde a Otoño";
        break;
      default:
        notificacionMes = "El mes introducido no es valido";
    }
    return notificacionMes;
  }

  function mostrarEstacion() {
    const resultado = getEstacion();
    document.getElementById("resultado").textContent = resultado;
  }


  /* -----------Operador condicional ternario------------------
Este es el unico Operador de JS, con 3 operandos.
Generalmente se usa como opción a la sentencia if else */

/* 
Sintaxis:

condicion ? expresiónSiCondicionEsVerdadera : expresiónSiCondicionEsFalsa


*/

const subtotal = 1_000;
const pagoTarjetaCredito = true;
/* let msj;
if(pagoTarjetaCredito) msj= subtotal*1.025;
else msj = subtotal* 1;
*/



console.log(`La cuenta es de ${pagoTarjetaCredito ? subtotal*1.025 : subtotal*1} pesos` );

const edad= 17;
// Se permite el acceso al antro de mala muerte?

console.log(`Acceso ${edad>=18 ? "Permitido":"Denegado"} ` );
/* A los de 17 solo con permiso */
console.log(`Acceso ${edad>=18 ? "Permitido": edad===17? "Solo con permiso":"Acceso denegado"} ` );

/* Practica, refactorizar el ejercicio de saludo con un operador ternario

const printGreetings = number => {
    if(number > 1)
        printGreetings(number-1);
    
    console.log("Greeting", number);
};
printGreetings(10);
*/


const printGreetings = number => {
    let result = (number > 1) ? printGreetings(number-1) : number;
    console.log("Greeting", result);
    return number+1;
};
printGreetings(12);
