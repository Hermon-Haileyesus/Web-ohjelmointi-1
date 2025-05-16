let a = 3;
let b = 5;
let c = 7;
let d = 15;


function summa(a, b) {
    alert("Summa: " + (a + b));
}

function vahennys(b, c) {
    alert("Vähennys: " + (b - c));
}

function kerto(c, d) {
    alert("Kerto: " + (c * d));
}

function jako(d, a) {
    if (a !== 0) {
        alert("Jako: " + (d / a));
    } else {
        alert("Virhe: Nollalla ei voi jakaa.");
    }
}


function getNumbers() {
    return {
        eka: Number(document.getElementById("numero1").value),
        toka: Number(document.getElementById("numero2").value)
    };
}
function clearInputs() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
}




function laskin_summa() {
    let { eka, toka } = getNumbers();
    summa(eka, toka);
    clearInputs()
}

function laskin_vahennys() {
    let { eka, toka } = getNumbers();
    vahennys(eka, toka);
    clearInputs()
}

function laskin_kerto() {
    let { eka, toka } = getNumbers();
    kerto(eka, toka);
    clearInputs()
}

function laskin_jako() {
    let { eka, toka } = getNumbers();
    jako(eka, toka);
    clearInputs()
}


function laskin_abs() {
    let { eka } = getNumbers();
    alert("Itseisarvo: " + Math.abs(eka));
    clearInputs()
}

function laskin_sqrt() {
    let { eka } = getNumbers();
    alert("Neliöjuuri: " + Math.sqrt(eka));
    clearInputs()
}

function laskin_pow() {
    let { eka, toka } = getNumbers();
    alert("Potenssi: " + Math.pow(eka, toka));
    clearInputs()
}

function laskin_max() {
    let { eka, toka } = getNumbers();
    alert("Suurin: " + Math.max(eka, toka));
    clearInputs()
}

function laskin_min() {
    let { eka, toka } = getNumbers();
    alert("Pienin: " + Math.min(eka, toka));
    clearInputs()
}

function laskin_round() {
    let { eka } = getNumbers();
    alert("Pyöristetty: " + Math.round(eka));
    clearInputs()
}



function naytaAika() {
    let nyt = new Date();

    
    let paivamaara = `${nyt.getDate()}.${nyt.getMonth() + 1}.${nyt.getFullYear()}`;
    let aika = `${nyt.getHours()}.${nyt.getMinutes()}.${nyt.getSeconds()}`;
    let paivaJaAika = `${paivamaara} klo ${aika}`;

    let viikonpaivat = ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"];
    let kuukaudet = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"];

    let viikonpaiva = viikonpaivat[nyt.getDay()];
    let kuukausi = kuukaudet[nyt.getMonth()];


    document.getElementById("paivamaara").innerText = `Päivämäärä: ${paivamaara}`;
    document.getElementById("aika").innerText = `Aika: ${aika}`;
    document.getElementById("paivaJaAika").innerText = `Päivämäärä ja aika: ${paivaJaAika}`;
    document.getElementById("viikonpaiva").innerText = `Viikonpäivä: ${viikonpaiva}`;
    document.getElementById("kuukausi").innerText = `Kuukausi: ${kuukausi}`;
}
const veijo = new Set(["luku", "poisto"]);
const elvira = new Set(["luku", "kirjoitus", "muokkaus"]);
const mehdi = new Set(["luku", "muokkaus", "poisto"]);
const tuuli = new Set(["kirjoitus", "poisto"]);


function fillList(käyttäjä, oikeukset) {
    const ul = document.querySelector(`#${käyttäjä} ul`);
    for(var oikeus of oikeukset){
        const liElement = document.createElement("li");
        liElement.innerHTML = oikeus;
        ul.appendChild(liElement); 
    }
}

fillList("Veijo", veijo);
fillList("Elvira", elvira);
fillList("Mehdi", mehdi);
fillList("Tuuli", tuuli);

const Veijotuuli = veijo.union(tuuli);
const Mehdielvira = mehdi.intersection(elvira);
const Elviratuuli = elvira.symmetricDifference(tuuli);

function listataan(käyttäjä, oikeukset) {
    const ul = document.getElementById(`${käyttäjä}` );
    for(var oikeus of oikeukset){
        const liElement = document.createElement("li");
        liElement.innerHTML = oikeus;
        ul.appendChild(liElement); 
    }
}
listataan("veijotuuli", Veijotuuli)
listataan("mehdielvira", Mehdielvira)
listataan("elviratuuli", Elviratuuli)







