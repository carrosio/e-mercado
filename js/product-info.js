//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function showItem(items, comments) {
    let itemName = localStorage.getItem("nameItem")
    if (itemName.includes(items.name)) {
        itemInfoHTML(items)
        newComentBox()
        showComments(comments, createComment())
        document.getElementById("submitComment").onclick = function(){showComments(comments, createComment())
       
        }
        
    }
}

function itemInfoHTML(items){
    console.log(items)
    const infoCont = document.getElementById("infoCont")
    infoCont.innerHTML = 
    '<p>' + "Categoría: " + items.category + '</p>' + 
    '<h4 id="imageItemBox" class="titleItem">' + items.name + '</h4>' +
    '<div class="showImgaes"></div>' +
    '<p class="descriptionItem">' + items.description + '</p>' +
    '<h6 id= "priceResalted" class="resalted">' + items.cost + '</h6>' +
    '<p>' + "Vendidos: " + items.soldCount +' </p>'
   /*  
    for (x of items.images) {
        let img = document.createElement("img")
        img.src = x
        imageCont.appendChild(img)
    } */
}



function showComments(coments, newComent){
    let arrComents = coments
    arrComents.push(newComent)
    const ListContainer = document.createElement("ul")
    const title = document.createElement("h2")
    const titletxt = document.createTextNode("Comentarios")
    const infoCont = document.getElementById("infoCont")
    const comentBox = document.createElement("div")
    comentBox.setAttribute = ("id", "commentBoxDiv")
   
    ListContainer.setAttribute("id", "listContainerComments")
    ListContainer.appendChild(title)
    infoCont.appendChild(ListContainer)
    title.appendChild(titletxt)
    infoCont.appendChild(comentBox)
 
    
    for (x of arrComents) {
        const comentNew = document.createElement("li")
        comentNew.setAttribute("id", "comentBox")
        ListContainer.appendChild(comentNew)
        comentNew.innerHTML = 
        '<h6 id="UserCommentName">'+ x.user + '</h6>' +
        '<p>' + x.dateTime +'</p>' + 
        '<h5>'+ x.description  +'</h5>' + 
         '<span class=" prendida fa-lg fa fa-star checked"></span>'.repeat(x.score) + '<span class="apagada fa-lg fa fa-star"></span>'.repeat(5 - x.score) 
    }
}

function newComentBox(){
    const infoCount = document.getElementById("infoCont")
    const comentBox = document.createElement("div")
    infoCount.appendChild(comentBox)
    comentBox.innerHTML = '<div id="commentBox" class="areaBox">' +
    '<textarea placeholder="Dejanos tu comentario..." id= "commentTxt" class=" txtArea commentTxt">' + '</textarea>' + 
    '<h5 id="commentScore">' + "Score" + '</h5>' + 
    '<select name="assingRankingComment">' +
        '<option value="str1">' + 1 + '</option>' + 
        '<option value="str2">' + 2 + '</option>' + 
        '<option value="str3">' + 3 + '</option>' + 
        '<option value="str4">' + 4 + '</option>' + 
        '<option value="str5">' + 5 + '</option>' + 
    '</select>' + 
    '<button id="submitComment" class= "sendbuttom" type="submit">' + "Enviar" + '</button>' + 
    '</div>'
}


function createComment()
    {
    const desc = document.getElementById("commentTxt").value
    let newComent = {
    "score": 4,
    "description": desc,
    "user": "macri",
    "dateTime": "2020-02-25 18:03:52",
    }
    return newComent

}

document.addEventListener("DOMContentLoaded",  async function(e){
    const info_car = ( await getJSONData(PRODUCT_INFO_URL)).data
    const coments = ( await getJSONData(PRODUCT_INFO_COMMENTS_URL)).data
    showItem(info_car, coments)
});