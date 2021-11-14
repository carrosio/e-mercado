let editIcon = document.getElementsByClassName("fa-edit")
let values = document.getElementsByClassName("name-profile")


let infoUSER = {
    "name": "" ,
    "lastname": "" ,
    "age": null ,
    "mail": "",
    "phone": null
}
let strInfo
let ParseStrInfo

JSON.stringify(infoUSER)


function toStr() {
    strInfo = JSON.stringify(infoUSER)
    console.log(strInfo)
}
function toParse(){
    ParseStrInfo = JSON.parse(strInfo)
}


function gettingValues(){
    toStr()
    toParse()
    for (let x = 0; x < values.length; x++){
        let valueType
        if (x == 0){
            valueType = ParseStrInfo.name
        }
        else if (x == 1){
            valueType = ParseStrInfo.lastname
        }
        else if (x == 2){
            valueType = ParseStrInfo.age
        }
        else if (x == 3){
            valueType = ParseStrInfo.mail
        }
        else if (x == 4){
            valueType = ParseStrInfo.phone
        }
        values[x].innerHTML = valueType
    }
    console.log(infoUSER)
}

function saveToLocal(){
    localStorage.setItem("data", ParseStrInfo )
}

document.addEventListener("DOMContentLoaded", function (e) {

    gettingValues()
    for (let x = 0; x < editIcon.length; x++) {
        editIcon[x].onclick = function(){
            
            let type

            if (x == 2 || x == 4) {
                type = "number"
            }
            else if (x == 3){
                type = "email"
            }
            else {
                type = "text"
            }
            values[x].innerHTML = `<input id="input${x}"type="${type}">  </input><i id="apply-input" class="fas fa-check-circle fa-1.8x"></i>`
            
            document.getElementById("apply-input").onclick = function() {
                const newValue = document.getElementById(`input${x}`).value
                if (!newValue) {
                    alert("Ingrese un dato valido")
                }
                
                else {
                    if (x == 0){
                       infoUSER.name = newValue
                       gettingValues()
                    }
                    else if (x == 1){
                        infoUSER.lastname = newValue
                        gettingValues()
                    }
                    else if (x == 2) {
                        infoUSER.age = newValue
                        gettingValues()
                    }
                    else if (x == 3) {
                        infoUSER.mail = newValue
                        gettingValues()
                    }
                    else {
                        infoUSER.phone = newValue
                        gettingValues()
                    }
                }
            }
        }
    }
    
  

});