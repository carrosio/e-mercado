//Función que se ejecuta una vez que se haya lanzado el evento de
// USAR ESTE ARCHIVO PARA EL PRÓXIMO EJERCICIO
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function showlist(products){
    const list = document.createElement("ul");
    for (let x of products) {
        const name = document.createElement("li");
        const price = document.createElement("h5");
        const desc = document.createElement("p");
        
        name.appendChild(document.createTextNode(x.name))
        price.appendChild(document.createTextNode(x.cost + " USD"))
        desc.appendChild(document.createTextNode(x.description))
        
        name.appendChild(price)
        name.appendChild(desc)
        list.appendChild(name)
    }
    
    document.body.appendChild(list)

}


document.addEventListener("DOMContentLoaded", async function (e) {
    const products = (await getJSONData(PRODUCTS_URL)).data
    showlist(products)

});