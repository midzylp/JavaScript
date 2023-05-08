console.log("Bienvenido a la sesión de Clases");

/* Como crear una clase???? 
Utilizar la palabra reservada class
para el nombre se usa la notación pascal-Case o UpperCamelCase
*/

class Car{
    
    //Método constructor, se usa con la palabra reservada constructor
    constructor(nameCar, brand, price){
        console.log("Has creado un nuevo objeto llamado " +nameCar);
        this.name = nameCar;
        this.brand= brand;
        this.price= price;
    }
    igniteEngine = ( state ) => state? "Engine is on": "Engine is off"
    //igniteEngine(){}
    //Agregar una función que describa las características del auto
    brandCar = (auto) => (`${auto.name} es de la marca ${auto.brand}`) 
    getDescription(){
        return `${this.name} de ${this.brand} cuesta ${this.price}`
    } 
}


/* Usar la clase para instanciar(crear) objetos */
/* Para instanciar se usa la palabra reservada new y el nombre de la clase() */

const elantra = new Car("Elantra", "Hyundai", 300000);
const aveo = new Car("Aveo", "Chevrolet", 400000);

console.log(elantra);
console.log(aveo);
console.log(elantra.name+" "+elantra.igniteEngine(true));
console.log(elantra.getDescription());
