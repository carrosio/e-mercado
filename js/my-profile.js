

let infoUSER = {
    "name": "pepe" ,
    "lastname": null ,
    "age": null ,
    "mail": null,
    "phone": null
}

localStorage.setItem("infoUser", infoUSER)





document.addEventListener("DOMContentLoaded", function (e) {
    

    let editIcon = document.getElementsByClassName("fa-edit")
    let values = document.getElementsByClassName("name-profile")

    
    for (let x = 0; x < values.length; x++) {
        
        let inputSaved = null
        values[x].innerHTML = inputSaved
        if (!inputSaved) {
            values[x].innerHTML = `<p>¡Campo sin completar!</p>`
        } 
    }

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
                    values[x].innerHTML = newValue
                }
                
            }
        }
    }
    
  

});