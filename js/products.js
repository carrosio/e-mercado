//Función que se ejecuta una vez que se haya lanzado el evento de
// USAR ESTE ARCHIVO PARA EL PRÓXIMO EJERCICIO
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function cars(name, cost, description) {
    const list = document.createElement("li")
    
}




document.addEventListener("DOMContentLoaded", function (e) {
    const name = (await getJSONData(PRODUCTS_URL)).name
    const cost = (await getJSONData(PRODUCTS_URL)).cost
    const desc = (await getJSONData(PRODUCTS_URL)).description
    cars(name, cost, desc)
});