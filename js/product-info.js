//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


function showItemProfile(item) {
    console.log(item)
    const category = document.getElementById("categoryItem")
    const nameItem = document.getElementById("titleItem")
    const desc = document.getElementById("descriptionItem")
    const price = document.getElementById("priceItem")
    const sold = document.getElementById("soldCount")
    const imgMain = document.getElementById("img-main")
    const img1 = document.getElementById("img1")
    const img2 = document.createElement("div")

    img2.setAttribute("class", "imageset")
    imgMain.appendChild(img2)


    category.innerHTML = 'Categoria: ' + item.category
    nameItem.innerHTML = item.name
    desc.innerHTML = item.description
    price.innerHTML = item.currency  + ' ' + item.cost + ' ' + '<i class="fas fa-tag"></i>'
    sold.innerHTML = 'Ventas: ' +  item.soldCount
   

    let arrImg = item.images
    for (x of arrImg) {
        const imageX = document.createElement("img")
        imageX.setAttribute("src", x)
        img2.appendChild(imageX)
        
    }
    

    document.getElementById("commentBox").innerHTML = '<div id="commentBox" class="areaBox">' +
    '<textarea placeholder="Dejanos tu comentario..." id= "commentTxt" class=" txtArea commentTxt">' + '</textarea>' + 
    '<div id="boxSelect">' +
    '<h5 id="commentScore">' + "Score" + '</h5>' + 
    '<select id="rankStrars" name="assingRankingComment">' +
        '<option id="str1" value="1">' + 1 + '</option>' + 
        '<option id="str2" value="2">' + 2 + '</option>' + 
        '<option id="str3" selected value="3">' + 3 + '</option>' + 
        '<option id="str4" value="4">' + 4 + '</option>' + 
        '<option id="str5" value="5">' + 5 + '</option>' + 
    '</select>' + 
    '</div>' + 
    '<button id="submitComment" "class= "sendbuttom" type="submit">' + "Enviar" + '</button>' + 
    '</div>'
}

function relatedProductsArr(index, arrProducts){
    let newArr = []
    for (x of index)
    {
        newArr.push(arrProducts[x])
    }
    return newArr
}

function showRelatedProducts(relatedProducts) {
    document.getElementById("infoCont").innerHTML = 
    '<div class="relatedProducts"></div>'
}


function newComment(){
    const today = new Date()
    const date = today.getFullYear() + '-' + (today.getMonth()+1)+ '-' + today.getDay()
    
    const commentTxt = document.getElementById("commentTxt").value
    const commentUsr =  document.getElementById("nombreUser").textContent
    /* const selectedScore = document.getElementsByName("rankStrars") */
    //JQUERRY//
    const score = $('#rankStrars :selected').text()

    let newComent = {
        "score": score,
        "description": commentTxt,
        "user": commentUsr,
        "dateTime": date,
        }
    return newComent
}


function generateComentList(comments) {
    for (x of comments) {
         const listContainerComments = document.getElementById("listContainerComments")
         const comentNew = document.createElement("li")
         comentNew.setAttribute("id", "listComment")
         comentNew.setAttribute("name", "EveryComment")
         listContainerComments.appendChild(comentNew)
         comentNew.innerHTML = 
         '<h6 class="UserCommentName" id="UserCommentName">' + '<i class="fas fa-user"></i> ' + '' + x.user + '</h6>' +
         '<p class="commentdate">' + '<i class="fas fa-calendar-day"></i> ' + x.dateTime +'</p>' + 
         '<h5>'+ x.description  +'</h5>' + 
          '<span class=" prendida fa-lg fa fa-star checked"></span>'.repeat(x.score) + '<span class="apagada fa-lg fa fa-star"></span>'.repeat(5 - x.score) 
     }
 }

document.addEventListener("DOMContentLoaded",  async function(e){
    const products = (await getJSONData(PRODUCTS_URL)).data;
    const info_car = ( await getJSONData(PRODUCT_INFO_URL)).data
    const coments = ( await getJSONData(PRODUCT_INFO_COMMENTS_URL)).data
    showItemProfile(info_car)
    /* relatedProductsArr(info_car.relatedProducts, products) */
    let arrComents = coments
    /* showRelatedProducts(relatedProductsArr(info_car.relatedProducts, products)) */
    function arr(){
        arrComents.push(newComment())
    }
    generateComentList(arrComents)
    function deleteComents(){
        let cont = document.getElementById("listContainerComments")
        cont.innerHTML = ''
    }
    document.getElementById("submitComment").onclick = function(){
        arr()
        deleteComents()
        generateComentList(arrComents)
        document.getElementById("commentTxt").value = ''
    }

    
});