//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function showItem(items) {
    let itemName = localStorage.getItem("nameItem")
    if (itemName.includes(items.name)) {
        itemInfoHTML(items)
    }
}

function itemInfoHTML(items){
    const name = document.createElement("h4")
    const imageCont = document.createElement("div")
    const infoCont = document.getElementById("infoCont")
    const desc = document.createElement("p");
    const price = document.createElement("h6");
    const soldCount = document.createElement("p")
    const category = document.createElement("p")

    imageCont.className = ("showImgaes")
    desc.className = ("descriptionItem")
    soldCount.className = ("soldCount")
    price.className = ("price")
    name.className = ("titleItem")

    category.appendChild(document.createTextNode("Categoria:" + " " + items.category))
    desc.appendChild(document.createTextNode(items.description))
    name.appendChild(document.createTextNode(items.name))
    price.appendChild(document.createTextNode(items.cost + " " + items.currency))
    soldCount.appendChild(document.createTextNode("Vendidos:" + " " + items.soldCount))
    
    infoCont.appendChild(category)
    infoCont.appendChild(name)
    infoCont.appendChild(imageCont)
    infoCont.appendChild(desc)
    infoCont.appendChild(price)
    infoCont.appendChild(soldCount)
    
    for (x of items.images) {
        let img = document.createElement("img")
        img.src = x
        imageCont.appendChild(img)
    }
}
function itemComment(coments){

}


document.addEventListener("DOMContentLoaded",  async function(e){
    const info_car = ( await getJSONData(PRODUCT_INFO_URL)).data
    const coments = ( await getJSONData(PRODUCT_INFO_COMMENTS_URL)).data
    console.log(info_car)
    showItem(info_car)
});