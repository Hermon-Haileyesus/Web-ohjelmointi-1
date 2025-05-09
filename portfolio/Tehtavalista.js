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


function lisaa(event) {
    event.preventDefault(); 


    const inputElement = document.getElementById("taskInput");
    const maaraElement = document.getElementById("taskCount");

    const uusiTehtava = inputElement.value.trim();
    const maara = parseInt(maaraElement.value, 10);

    if (uusiTehtava === "") {
        alert("Tehtävä ei voi olla tyhjä!"); 
        return;
    }
    if (isNaN(maara) || maara < 1) {
        alert("Syötä kelvollinen numero (vähintään 1)!");
        return;
    }


    if (lista.includes(uusiTehtava)) {
        alert("Tehtävä on jo listassa!"); 
        return;
    }
    
    for (let i = 0; i < maara; i++) {
        lista.push(uusiTehtava);
    }

    inputElement.value = ""; 
    maaraElement.value = "";

    paivitaLista(); 
}
window.onload = paivitaLista;


