console.log("API Fetch");

/* 
La API Fetch nos ayuda a acceder y manipular peticiones HTTP, proporciona una forma lógica y fácil de obtener recursos de la red de manera Asíncrona

Sintaxis:

°Solicitud GET

fetch(url)
    .then()
    .catch



*/

const url = "https://fakestoreapi.com/products";

const getProducts = ( httpUrl ) =>{    

    fetch( httpUrl )
        .then( result => {
            console.log("Respuesta: " + result.status );
            return result.json(); // Conversión de JSON a objeto
        })
        .then ( (productsObj)=> {
            console.log(productsObj)
            // Quiero imprimir solo el titulo de cada producto.
            for (let index = 0; index < productsObj.length; index++) {
                console.log(productsObj[index].title);
            }
            
        })
        .catch( error=> console.log(error)  );

}

getProducts( url );


/* ---------Consumir el fecth usando async y await---------------------- */

const getProductsWithAwait = async ( httpUrl) =>{
    const productsJson = await fetch(httpUrl);
    console.log("Status: " +productsJson.status);
    const products = await productsJson.json();
    console.log(products); 
    localStorage.setItem("mis-productos", JSON.stringify(products))
    for(let product of products)
        console.log(product.title)
};

//getProductsWithAwait(url);


/* ---------------------------Realizar una solicitud post--------------- */

const postUser = ( url, userData) =>{

    // fetch().then( ()=>{} ).catch( ()=>{} );
    fetch( url, {
      method: 'POST',  // PUT o DELETE
      body:  JSON.stringify(userData)    , // Los datos del usuario, conversión Obj->JSON
      headers : { 'Content-Type': 'application/json'}
    })
      .then( (response )=> response.json() )
      .then( (register) => console.log( register.createdAt )  )
      .catch( (error)=>{ console.log(error)} );
  }
  
  const user = {
      name: "El Iván",
      job: "leader"
  };
  
  const urlPOST = "https://reqres.in/api/users";
  
  postUser( urlPOST, user );


