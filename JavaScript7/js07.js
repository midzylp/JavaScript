console.log("Inicio de mi programa JS07");

/* -------------Desarrollo sincronico------------- */

const primerPaso = () => {
    console.log("01- Inicio de mi programa")
}

const segundoPaso = () => {
    console.log("02- Desarrollo de mi programa")
}
const tercerPaso = () => {
    console.log("03- Fin de mi programa")
}

primerPaso();
segundoPaso();
tercerPaso();


/* ---------------Programación asincrona----------------- */

/* setTimeOut()
Establece un termporizador, una vez que expire el time ejecuta una función
*/

const desarrolloAsincrono = (saludo) => {
    console.log("Hola " + saludo)
};

const segundoPasoAsincrono = (saludo) =>{
    setTimeout( (saludoRef) => 
        console.log("Hola" + saludoRef), 4000, saludo );
};


console.log("-----------------------------------------")
primerPaso();
setTimeout(desarrolloAsincrono, 3000, "CH26"); /* El tiempo es en milisegundos */
segundoPasoAsincrono("ch26 con 4 s. de retardo");

tercerPaso();


/* ---------------------setInterval------------------- */
/* La diferencia con setTimeOut, es que la función se ejecutará varias veces cada cierto tiempo */

/* const segundoPasoConIntervalo= (saludo) =>{
    setInterval(()=>console.log("La banda malandra es " + saludo),2000)
}; */

console.log("-----------------------------------------")
primerPaso();

/* segundoPasoConIntervalo("Este es el setInterval"); */

tercerPaso();

/* ---------------Iniciar y detener setInterval------------------- */

/* Obtenemos referencias de ambos botones */



/* Generar Listener */
const refStartInterval = document.getElementById("iniciar");
const refStopInterval = document.getElementById("detener");
const refDateH2 = document.getElementById("fecha");
let idInterval;

refStopInterval.disabled=true;

refStartInterval.addEventListener( "click" , ()=>{
    /* console.log("Se pulsó iniciar"); */
    idInterval = setInterval(() => {
        refDateH2.innerHTML= (new Date).toLocaleString()
        
    }, 1000);
    refStartInterval.disabled=true;
    refStopInterval.disabled=false;
});

refStopInterval.addEventListener( "click" , ()=>{   clearInterval(idInterval);/* Detener mi intervalo */
refStartInterval.disabled=false;
refStopInterval.disabled=true;
});
