//Función que se ejecuta una vez que se haya lanzado el evento de
// USAR ESTE ARCHIVO PARA EL PRÓXIMO EJERCICIO
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.body.onload = addElement;

function addElement () {
  // crea un nuevo div
  // y añade contenido
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hola!¿Qué tal?");
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);


document.addEventListener("DOMContentLoaded", function (e) {
    const productos = (await getJSONData(PRODUCTS_URL)).data;
    showList(productos)

});