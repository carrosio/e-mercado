const main = document.getElementById("item-box-carrito");

function showItems(selector, countVal, items) {
    for (let x = 0; x < items.length; x++) {
        let id = `qty${x}`;
        let newBox = document.createElement("div");
        newBox.setAttribute("name", "nameBox");
        main.appendChild(newBox);

       /*  let count = items[x].count;
        if (selector == x) {
            count = countVal;
        }
 */
        newBox.innerHTML =
            `<h4>${items[x].name}</h2>` +
            `<h6>${items[x].unitCost} ${items[x].currency}</h5>` +
            `<h5>Cantidad: ` +
            `<input min="1" max="10" id="${id}" value="${items[x].count}" name="qtyEntry" type="number"></input>` +
            `</h5>` +
            `<h5 id="SubTot${x}">SubTotal: ${items[x].count * items[x].unitCost}</h5>`;
    }
}

function subTotal(items, id, countVal) {
    let subTotal = countVal * items[id].unitCost;
    document.getElementById(`SubTot${id}`).innerHTML = `Subtotal: ${subTotal}`
}

document.addEventListener("DOMContentLoaded", async function (e) {
    localStorage.getItem("userFunction");
    let carBuy = (await getJSONData(CART_BUY_URL2)).data;
    let car_articles = carBuy.articles;
    
    showItems(null, null, car_articles);
    
    let selectors = document.getElementsByName("qtyEntry");
    for (let x = 0; x < selectors.length; x++) {

        let selectorSelected = document.getElementById(`qty${x}`);
        selectorSelected.onkeyup = function () {
            subTotal(car_articles, x, selectorSelected.value);
        };
    }
});
