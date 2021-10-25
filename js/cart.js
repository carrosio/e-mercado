const main = document.getElementById("item-box-carrito");
let SelectedCurrency = "USD"

function showItems(items) {

    for (let x = 0; x < items.length; x++) {
        let id = `qty${x}`;
        let newBox = document.createElement("div");
        let unitCost = items[x].unitCost
        let currency = items[x].currency
        let nameItm = items[x].name
        let qty = items[x].count
        
        // pasar a dolares

        if (SelectedCurrency != currency){
            if (SelectedCurrency == "USD") {
                unitCost /= 40
                currency = "USD"
            }
            else {

                unitCost *= 40
                currency = "UYU"
            }
        }

        newBox.setAttribute("name", "nameBox");
        newBox.setAttribute("class", "nameBoxItems  list-group-item list-group-item-action")
        main.appendChild(newBox);
        

       /*  let count = items[x].count;
        if (selector == x) {
            count = countVal;
        }
 */
        newBox.innerHTML =
            `<div class="containerBox"><h5>${nameItm}</h2>` +
            `<h6>${unitCost} ${currency}</h5>` +
            `<h5>` +

            `<input class="QtyNumber" min="1" max="10" id="${id}" value="${qty}" name="qtyEntry" type="number"></input>` +
            `</h5>` +
            `<h6 class="style-text white-box" id="SubTot${x}">Subtotal: ${qty * unitCost} ${""} ${currency}</h5>
            </div>`
             +
            `<div class=""><img class="item-image img-thumbnail" src="${items[x].src}">`;
    }
}

function subTotal(items, id, countVal) {
    let cost = items[id].unitCost
    let unitCost = items[id].unitCost
    let currency = items[id].currency
    
    if (SelectedCurrency != currency){
        if (SelectedCurrency == "USD") {
            cost = unitCost  / 40
            
        }
        if (SelectedCurrency == "UYU") {
            cost = unitCost * 40
        }
    }
    
    console.log(cost)
    let subTotal = countVal * cost;
    document.getElementById(`SubTot${id}`).innerHTML = `Subtotal: ${subTotal}${" "}${SelectedCurrency}`
}

document.addEventListener("DOMContentLoaded", async function (e) {
    localStorage.getItem("userFunction");
    
    let cartBuy = (await getJSONData(CART_BUY_URL2)).data;
    let articlesList = cartBuy.articles;
    
    
    // show items
    showItems(articlesList);
   
    // cambio de moneda
    let currencySelect = document.getElementById("select-currency")
    currencySelect.onchange = function(){
        main.innerHTML = ''
        let selected = currencySelect.options.selectedIndex
        SelectedCurrency = currencySelect.options[selected].value
        showItems(articlesList)
    }

    let selectors = document.getElementsByName("qtyEntry");
    // asignar ID a cada producto && permitir cambios
    for (let x = 0; x < selectors.length; x++) {
        let selectorSelected = document.getElementById(`qty${x}`);
        selectorSelected.onchange = function () {
            subTotal(articlesList, x, selectorSelected.value);
            
        };
    }
});
