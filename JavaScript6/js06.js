console.log("Hola Js06");


/* Función definida */

function finElementByIdFnc01 (){
    /* Instrucciones */
    return null;
}

/* Función expresada */

const findElementByIdFnc02 = function nombre (/*Parametros */ ){
    return null;
};

/* Función flecha */

const findElementByIdFnc03= ( /* Parámetros */ ) => {
    return null;
};

const findElementById = ( nameOfDeveloper ) => {
    const tituloRef = document.getElementById("titulo");

    tituloRef.innerHTML = tituloRef.innerHTML + " " + nameOfDeveloper;
};

findElementById("Luis");

const changeSubtitleById = ( nuevoSubtitulo ) => {
    const subtituleRef = document.getElementById("subtitulo");
    subtituleRef.innerHTML = `${subtituleRef.innerText}, <em>${nuevoSubtitulo}</em>`; 
};

changeSubtitleById("Viernes de cholos");

/* --------------Encontrar elementos por su tag--------------- */

/* getElementsByTagName() */

const changeEmphasis = (newTxt) =>{
    const eMRef = document.getElementsByTagName("em");
    for (element of eMRef){
        element.innerHTML = `${newTxt}`
    }
};

changeEmphasis("friki");

const goLink = (link, newTxt) => {
    const emphasisRef = document.getElementsByTagName("em");
    for(element of emphasisRef){
        element.innerHTML = `<a href=${link} Target="_blank">${newTxt}</a>`
    }
};

goLink("https://www.youtube.com/watch?v=dWZAH5w8jkQ" , "friki");


/* ----------Selector Universal-------------- */
/* querySelector */

/* Es un selector Universal, puede hacerse referencia por el Id, por el Tag, etc */

const findElementsByQuerySelector = () => {
    const refElements = document.querySelector("p em");
    refElements.innerHTML = `La Ch26 es bien <strong>chida</strong>`
};

findElementsByQuerySelector();

/* ------------------Crear nuevo elemento---------------- */
/* appendChild */

const newElement = () => {
    const newElementRef = document.createElement("p");
    
    newElementRef.innerHTML = `La Ch26 le gusta: 
    <ul>
        <li>Pan de muerto</li>
        <li>El chisme</li>
        <li>El pozole</li>
        <li>Pizza</li>
        <li>Pulque</li>
    </ul>
    `
    const articleRef = document.querySelector("article");

    articleRef.appendChild (newElementRef); /* Se agrega el nuevo elemento */
    /* Clonar el nodo anterior */
    const nodoClonado = articleRef.cloneNode(true);
    document.getElementById("article-new").appendChild(nodoClonado);

};

newElement();

/* const newElementArticle = () => {
    const newElementRef = document.createElement("p");
    
    newElementRef.innerHTML = `La Ch26 le gusta: 
    <ul>
        <li>Pan de muerto</li>
        <li>El chisme</li>
        <li>El pozole</li>
        <li>Pizza</li>
        <li>Pulque</li>
    </ul>
    `
    const articleRef = document.getElementById("article-new");

    articleRef.appendChild (newElementRef); /* Se agrega el nuevo elemento */
    /* Clonar el nodo anterior 

};

newElementArticle(); */


const changeColor = (color) => {
    const refIntro = document.getElementById("noticias");
    refIntro.style.color = color;
};

changeColor("red");

/* Agregar a un elemento un border */
/* .style.border */

const changeBorder = (border) => {
    const refIntro = document.getElementById("noticias");
    refIntro.style.border = border;
};

changeBorder( "thick solid #0000FF");

const changeBorderColor = (border, color) => {
    const refIntro = document.getElementById("noticias");
    refIntro.style.border = border;
    refIntro.style.borderColor = color;
};

changeBorderColor( "thick solid" , "lightblue");

/* -------------------Propiedades de visualización(Desaparecer elementos)----------- */

/* display: none (Quitar el elemento del DOM) */
/* visibility: hidden (Ocultar elemento) */



const quitarBoton = () => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.display = "none";
};

const ocultarBoton = () => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.visibility = "hidden";
};

const restablecerBoton = () => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.display = "inline";
    buttonRef.style.visibility = "visible";
};