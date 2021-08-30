function filterAndOrder(products) {
  let relevancia = false;
  let orderByPrice = true;
  let direction = -1;
  let minRange = document.getElementById("minRange").value;
  let maxRange = document.getElementById("maxRange").value;

  let productsFiltred = [];
  for (let x of products) {
    if (x.cost > minRange && x.cost < maxRange) {
      productsFiltred.push(x);
    }
    /* soldCount */
  }

  if (relevancia) {
    productsFiltred.sort(function (a, b) {
      if (a.soldCount > b.soldCount) {
        return -1;
      }
      if (a.soldCount < b.soldCount) {
        return 1;
      }
      return 0;
    });
  }

  if (orderByPrice) {
    direction ? 1 : -1;
    productsFiltred.sort(function (a, b) {
      if (a.cost > b.cost) {
        return -1 * direction;
      }
      if (a.cost < b.cost) {
        return 1 * direction;
      }
      return 0;
    });
  }

  console.log(productsFiltred);
  return productsFiltred;
}

function showlist(products) {
  const list = document.createElement("ul");
  list.className = "list-group-item ";
  for (let x of products) {
    //variables
    const product = document.createElement("li");
    const name = document.createElement("h1");
    const price = document.createElement("h5");
    const desc = document.createElement("p");
    const img = document.createElement("img");

    //aplicar class y src
    product.className = "list-group-item ";
    img.src = x.imgSrc;
    img.className = "list-group-item ";

    //dependencias
    name.appendChild(document.createTextNode(x.name));
    price.appendChild(document.createTextNode(x.cost + " USD"));
    desc.appendChild(document.createTextNode(x.description));
    img.appendChild(document.createTextNode(img));

    product.appendChild(name);
    product.appendChild(price);
    product.appendChild(desc);
    product.appendChild(img);

    list.appendChild(product);
  }

  //mostrar lista en body
  document.body.appendChild(list);
}

document.addEventListener("DOMContentLoaded", async function (e) {
  const products = (await getJSONData(PRODUCTS_URL)).data;
  let bottom = document.getElementById("submitBottom");
  bottom.addEventListener("click", showlist(filterAndOrder(products)));
});
