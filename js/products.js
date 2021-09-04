function filterAndOrder(products) {
  let minRange = document.getElementById("minRange").value;
  let maxRange = document.getElementById("maxRange").value;
  let orderBy = Array.from(document.getElementsByName("radioOrder")).find(
    (r) => r.checked
  ).value;
  /*   Orden por precio
   */
  let productsFiltred = [];
  for (let x of products) {
    if (x.cost > minRange && x.cost < maxRange) {
      productsFiltred.push(x);
    }
  }

  if (orderBy === "moda") {
    productsFiltred.sort(function (a, b) {
      if (a.soldCount > b.soldCount) {
        return -1;
      }
      if (a.soldCount < b.soldCount) {
        return 1;
      }
      return 0;
    });
  } else {
    /* 1 es equivalente a "prcio mayor" */
    orderBy ? 1 : -1;
    productsFiltred.sort(function (a, b) {
      if (a.cost > b.cost) {
        return -1 * orderBy;
      }
      if (a.cost < b.cost) {
        return 1 * orderBy;
      }
      return 0;
    });
  }

  return productsFiltred;
}


//remueve los autos anteriores a la busqueda
function noneSpace(){
  let carContainer = document.getElementById("autos")
  carContainer.remove()
}

function multi(products) {
  //si la cantidad de autos es mayor a 4, 
  //elimina los anteriores para que no se repitan infitiamente
  let padre = document.getElementById("main-main");
  if (padre.childNodes.length > products.length - 1) {
    document.getElementById("autos").remove();
  }
  showlist(filterAndOrder(products));
}

function showlist(products) {
  const list = document.createElement("ul");
  list.id = "autos";
  list.className = "listaBase";
  for (let x of products) {
    //variables
    const product = document.createElement("li");
    const name = document.createElement("h4");
    const price = document.createElement("h6");
    const desc = document.createElement("p");
    const img = document.createElement("img");

    //aplicar class y src
    product.className = "list-group-item ";
    img.src = x.imgSrc;

    //dependencias
    name.appendChild(document.createTextNode(x.name));
    price.appendChild(document.createTextNode(x.cost + " USD"));
    desc.appendChild(document.createTextNode(x.description));

    product.appendChild(img);
    product.appendChild(name);
    product.appendChild(price);

    product.appendChild(desc);

    list.appendChild(product);
  }

  //mostrar lista en body

  document.getElementById("main-main").appendChild(list);
}

function filterBySearch(products) {
  let searchBar = document.getElementById("search");
  let filtredItems = [];
  searchBar.addEventListener("keyup", (e) => {
    let searchText = e.target.value.toLowerCase();
    for (x of products) {
      
      if (x.name.toLowerCase().includes(searchText) ||
      x.description.toLowerCase().includes(searchText)) {
        filtredItems.push(x)
      
      }
    }
    noneSpace()
    console.log(filtredItems)
    showlist(filtredItems)
  });
}

document.addEventListener("DOMContentLoaded", async function (e) {
  localStorage.getItem("userFunction");
  const products = (await getJSONData(PRODUCTS_URL)).data;
  showlist(filterAndOrder(products));
  document.getElementById("enviar").onclick = function () {
    multi(products);
  };
  document.getElementById("search").onkeyup = function () {
    filterBySearch(filterAndOrder(products))
  };
});
