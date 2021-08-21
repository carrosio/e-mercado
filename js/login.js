//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

//Buscar Elementos en LOGIN.HTML
let txtname = document.getElementById("inputEmail");
let txtpass = document.getElementById("inputPassword");

//Local Storage
localStorage.setItem("name", txtname.value);
localStorage.setItem("pass", txtpass.value);


function backToIndex(){
  if (txtname.value && txtpass.value) {
    localStorage.setItem("name", txtname.value)
    localStorage.setItem("pass", txtpass.value)
    window.location = "index.html"
  }
}


document.addEventListener("DOMContentLoaded", function(e){
   document.getElementById("submitBottom").addEventListener("click", backToIndex)
});