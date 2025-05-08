console.log("Tehtävälista-sivu avattu");
var lista = ["Tehtävä 1", "Tehtävä 2"];

function paivitaLista() {
    const ulElement = document.getElementById("taskList");
    ulElement.innerHTML = ""; 
    
    for (var tehtava of lista) {
        const liElement = document.createElement("li");
        liElement.innerHTML = tehtava;
        ulElement.appendChild(liElement); 
    }
}


function lisaa() {
    const inputElement = document.getElementById("taskInput");
    const uusiTehtava = inputElement.value.trim();
    if (uusiTehtava === "") {
        alert("Tehtävä ei voi olla tyhjä!"); 
        return;
    }

    if (lista.includes(uusiTehtava)) {
        alert("Tehtävä on jo listassa!"); 
        return;
    }
    lista.push(uusiTehtava);
    inputElement.value = ""; 
    paivitaLista(); 
}
window.onload = paivitaLista;


