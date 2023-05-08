console.log("Sesión JS06-Formulario");

const refForm = document.forms["registro"];

refForm.addEventListener("submit", (event) => {
    event.preventDefault(); /* Omita las acciones por default */
    /* console.log(event); */

     /* En los formularios(inputs) se utiliza.value */
    /* Crear el objeto con los datos del formulario */
    
    
    const email = refForm.elements["inputEmail4"];
    const password = refForm.elements["inputPassword4"];
    const address = refForm.elements["inputAddress"];
    const city = refForm.elements["inputCity"];
    const state = refForm.elements["inputState"];
    const zip = refForm.elements["inputZip"];



    user = {
    
    
        email: email.value ,
        password: password.value,
        address: address.value,
        city: city.value,
        state: state.value,
        zip: zip.value
    }
    console.log(user);
} );
