const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";



//Obtener datos de localstorage
let checkName = localStorage.getItem("name")
let checkPass = localStorage.getItem("pass")

// Si no tiene nombre, lo envia al login. Si lo tiene, continua en index.
if (!checkName) {
  window.location = "login.html"
}

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

localStorage.setItem("userFunction", user)

function user(){
  let boxUser = document.createElement("div")
  let boxName = document.createElement("button")
  let dropDown = document.createElement("div")
  let myCarrito = document.createElement("a")
  let myProfile = document.createElement("a")
  let myExit = document.createElement("a")
  let boxExit = document.createElement("div")
  let name = document.createElement("p")
  let exit = document.createElement("div")
  let exitTxt = document.createTextNode("Salir")
  let ponerName = document.createTextNode(checkName)
  let selectNav = document.getElementById("menu")
  
// atributos id
  boxUser.setAttribute("id", "boxUser")
  dropDown.setAttribute("id", "dropDown")
  myCarrito.setAttribute("id", "mYcarrito")
  myProfile.setAttribute("id", "mYProfile")
  boxExit.setAttribute("id", "boxExit")
  boxName.setAttribute("id", "boxName")
  boxUser.setAttribute("id", "boxUser")
  name.setAttribute("id", "nombreUser")
  exit.setAttribute("id", "userExit")
  dropDown.setAttribute("id", "dropDownUser")
 
 // añadir dependencias
  selectNav.appendChild(boxUser)
  boxUser.appendChild(boxName)
  boxUser.appendChild(boxExit)
  boxUser.appendChild(dropDown)
  dropDown.appendChild(myCarrito)
  dropDown.appendChild(myProfile)
  boxName.appendChild(name)
  name.appendChild(ponerName)
  boxExit.appendChild(exit)
  exit.appendChild(exitTxt)
  
// clases
  boxName.classList.add("usuario")
  boxExit.classList.add("usuario")
  name.classList.add("usuarioName")
  exit.classList.add("usuarioName")
  boxUser.classList.add("usuario")
  dropDown.classList.add("optionsDrop")

  // inner


  // delete localstroage and exit to main
  boxExit.addEventListener("click", function() {
    localStorage.removeItem("name")
    window.location = "index.html"
  })
}


var getJSONData = function(url){
    var result = {};
    /* showSpinner(); */
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          /* hideSpinner(); */
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        /* hideSpinner(); */
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
  user()
});

