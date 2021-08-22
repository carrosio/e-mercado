function showlist(products) {
    const list = document.createElement("ul");
    for (let x of products) {
        //variables
        const product = document.createElement("li");
        const name = document.createElement("h1")
        const price = document.createElement("h5");
        const desc = document.createElement("p");
        const img = document.createElement("img");

        //aplicar class y src
        product.className = "list-group-item "
        img.src = x.imgSrc
        
        //dependencias 
        name.appendChild(document.createTextNode(x.name))
        price.appendChild(document.createTextNode(x.cost + " USD"))
        desc.appendChild(document.createTextNode(x.description))
        img.appendChild(document.createTextNode(img))
        
        product.appendChild(name)
        product.appendChild(price)
        product.appendChild(desc)
        product.appendChild(img)
        
        list.appendChild(product)
    }

    //mostrar lista en body
    document.body.appendChild(list)
}


document.addEventListener("DOMContentLoaded", async function (e) {
    const products = (await getJSONData(PRODUCTS_URL)).data
    showlist(products)

});