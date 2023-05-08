console.log("Sesión JS07 Promesas");

/* Una promesa(promise) es un objeto que
representa la terminación o fracaso de una operación
asíncrona. */

/* Para crear una promesa se usa el constructor
new Promise(); los parametros de mi función de callback debe tener 2 parametros, uno cuando se resuelva la promesa y otra cuando se rechace */

/* Las promesas son asincronas*/

/* const pinkiPromise = new Promise( /* Función Callback )*/

const pinkiPromise = new Promise( (fncCallBackResolve, fncCallBackReject) =>{
    const menorEdad = false;

    if(menorEdad)
        fncCallBackResolve("Hay que estar siempre juntos");
    else
        fncCallBackReject("No te conozco");
}  );


/* Consumir las promesas */
/* Usando los métodos then, catch y finally */

console.log("Antes de consumir la promesa");

/* Then solo consume la parte del Resolve
pinkiPromise.then(fncCallback)
*/

/* Para consumir la parte del reject le debemos poner .catch */
pinkiPromise.then( (response) => console.log("Promesa Resuelta " + response) ).catch( (error) => console.error("Tu promesa fue rechazada " + error) );

console.log("Despues de consumir la promesa");

/* ------------------- Una promesa que reciba dos números a y b y los divida, pero en caso de que b sea 0, me envie un rechazo diciéndome porque no se puede realizar la división */

const divisionPromesa = new Promise( (fncCallBackResolveA, fncCallBackRejectB) =>{
    let a=10;
    let b=0;

    if(b!==0)
        fncCallBackResolveA(( )=> a/b);
    else
        fncCallBackRejectB("No se puede realizar división entre 0");
});

divisionPromesa.then( (response) => console.log("Promesa Resuelta " + response) ).catch( (error) => console.error("Tu promesa fue rechazada " + error) );


/* ------------Haciendo la división con parámetros */


const divisionConParametros = (a,b) => {
    const myPromise = new Promise( (resolve, reject) =>{

        if (b===0)
            reject("No se puede realizar una división entre 0")
        else
            resolve(a/b)
    }  );

    return myPromise
}



divisionConParametros(3,4)
.then((response)=> {console.log(response); return response+10})
.then((mas10Unidades)=> console.log(mas10Unidades))
.catch((error)=> console.log(error));

divisionConParametros(3,0)
.then((response)=> console.log(response))
.catch((error)=> console.log(error));

divisionConParametros(3,34)
.then((response)=> console.log(response))
.catch((error)=> console.log(error))
.finally( ()=>console.log("Se realizó la división"));


/* -------------Consumir las promesas con async y await------------- */

/* Para que una función asincrona se comporte como sincrona */

console.log("----------Resolviendo divisiones-------------");

const realizarDivisionSincrona = async() => {

    const resultado = await ( divisionConParametros(20,4) );
    console.log(resultado);
    console.log(resultado+100);
    const resultadoErroneo = await divisionConParametros(20,0);
    console.log(resultadoErroneo)
}
realizarDivisionSincrona();

/* Se le debe poner el async antes del await, si no no va a funcionar */



console.log("-----------Terminando divisiones-------------");


// ---------------- Manejo de exepciones con try y catch

/* Sintaxis
    try{

    } catch(error){

    }
*/

const manejoDeExepciones = async () =>{
    console.log("----Resolviendo divisiones usando try y catch---->");
    
    try {
        const resultadoErroneo = await divisionConParametros(20,0) ;
        console.log( resultadoErroneo)
    } catch (error) {
        console.error("async-await" + error);
    }
    
    
    console.log("<----Terminando divisiones usando try y catch-----");
};

manejoDeExepciones();

/* Existe otra forma rapida de tener una promesa, esto mediante el método Promise.resolve, el return es una promesa */

/* Sintaxis
Promise.resolve();
*/


const promesaRapida = Promise.resolve(123);

/* ------Resolver con then-------------- */

promesaRapida.then((response) => console.log("Promesa Resuelta con then " + response));

/* ---------Resolver con try y catch------------- */

const resolucion = async () =>{
    try {
        console.log( await promesaRapida);
    } catch (error) {
        console.error(error);
    }
};

resolucion();