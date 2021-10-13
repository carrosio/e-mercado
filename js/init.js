const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
const CART_BUY_URL2 = "https://japdevdep.github.io/ecommerce-api/cart/654.json"




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
  
  
  function exit(){
  localStorage.removeItem("name")
  window.location = "index.html"
}
  
  const menu = document.getElementById("menu")
  const user = document.createElement("div")
  menu.appendChild(user)
  user.setAttribute("class", "dropdown")
  user.setAttribute("id", "dropdownUser")
  document.getElementById("dropdownUser").innerHTML = 
 '<button class="usuario btn dropdown-toggle" type="button" data-toggle="dropdown">' +
 localStorage.getItem("name") + 
'<span class="caret">' + 
'</span>' +
'</button>' +
'<ul class="dropdown-menu">' + 
'<li><a class="options-centered" href="my-profile.html"><i class="fas fa-user"></i> Mi Perfil</a></li> '+ 
'<li><a class="options-centered" href="cart.html"><i class="fas fa-shopping-cart"></i> Carrito</a></li> '+ 
'<li><a class="options-centered" id="exitbuttom" href="#"><i class="fas fa-sign-out-alt"></i> Exit</a></li> '+ 
 ' </ul>'

 document.getElementById("exitbuttom").onclick = function(){exit()}

}

/* boxExit.addEventListener("click", function() {
    localStorage.removeItem("name")
    window.location = "index.html"
  }) */

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

