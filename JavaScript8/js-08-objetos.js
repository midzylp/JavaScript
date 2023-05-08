console.log("Hola, bienvenido a la sesión de objetos");


/* -------------Crear un objeto------------ */

const frutasColores = {
    //clave: valor
    fresa: ["rojo"],
    pepino: ["verde"],
    mango: ["amarillo"],
    naranja: ["anaranjado","amarilla"],
    mandarina: ["anaranjado"],
    mora: ["morada"],
    pitaya: ["rosa","rojo","blanco", "amarillo"]
};

/* ------------Formas de leer el color  del pepino es  */

console.log(frutasColores.pepino);
console.log(frutasColores.pitaya[1]);
console.log(frutasColores.pitaya.join("-"));

/* Modificar un valor */
/* Agregar el color verde al mango */

frutasColores.mango.push("verde");
console.log("El mango es: " + frutasColores.mango);

/* ------------------Iterando los objetos--------------- */

/* Existen 2 formas de hacerlo */
/* Iterar los valores con for-in */
/* Itera sobre todas las propiedades (keys) de un objeto */

for(let fruta in frutasColores){
    console.log( `${fruta} tiene los colores ${frutasColores[fruta]}`)
};

/* --------------- Uso de symbol ------------------ */

/* Se utiliza para añadir claves de propiedades únicas y que estén ocultas a otros mecanismos como la iteración y stringify. 

Esto nos sirve para realizar el concepto de encapsulación.

*/

/* En el ejemplo de abajo creamos una variable tipo symbol y la utilizamos en el objeto de abajo para que no se muestre al momento de imprimir en consola */

const sueldoOculto= Symbol();

const datosEmpleado = {
    nombre: "El kesas",
    apellido: "Britas",
    [sueldoOculto]: 50_000
}

for (let dato in datosEmpleado){
    console.log(`${dato}: ${datosEmpleado[dato]}`)
};

localStorage.setItem("datos-empleado", JSON.stringify(datosEmpleado)); /* En este caso al guardar en localStorage se observa como Object, object por que lo convierte a String, tenemos que cambiarlo a JSON */

/* Bote de lunetas, la programación orientada a objetos intenta simular la vida real */

const boteLunetas = {
    gramaje: 30,
    sabor: "chocolate",
    costo: 35,

    abrir : function(){
        return "despachar producto";
    },

    comer: function(gramosComidos){     
        return this.gramaje-=gramosComidos;
    }
}

console.log("Me bote de lunes tiene(g) : " +boteLunetas.comer(5));


const car = {
    color: "black",
    type: "sedan",
    brand: "Hyundai",
    price: 250_000,
   /*  igniteEngine: function (boolean) {
      if (boolean === true) {
        return "Engine is on";
      } else {
        return "Engine is off";
      }
    } */
    igniteEngine: ( state ) => state? "Engine is on": "Engine is off"

  };
  
  console.log(car.igniteEngine(false));
  

  /* Si quiero hacer lo mismo de arriba pero con otro objeto, se podría hacer mediante copiar y pegar, pero es mejor realizar una plantilla, para crear nuevos objetos a partir de ahí */

  