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
    })

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

function multi(products) {
  let padre = document.getElementById("main-main")
  if (padre.childNodes.length > 3) {
    document.getElementById("autos").remove()
  }
  showlist(filterAndOrder(products))
  if (filterAndOrder(products).length < 1) {
    document.getElementById("main-main").innerHTML = "<h1 center >¡UPS! No encontramos ningun producto con esas caracteristicas</h1>"
  }
}

function showlist(products) {
  const list = document.createElement("ul");
  list.id = "autos"
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

  document.getElementById("main-main").appendChild(list)

}

document.addEventListener("DOMContentLoaded", async function (e) {
  localStorage.getItem("userFunction")
  const products = (await getJSONData(PRODUCTS_URL)).data;
  showlist(filterAndOrder(products))
  document.getElementById("enviar").onclick = function () {
    multi(products)
  }
})