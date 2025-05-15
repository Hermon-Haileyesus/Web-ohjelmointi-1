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

function laskin_summa() {
    let eka = parseFloat(document.getElementById("numero1").value);
    let toka = parseFloat(document.getElementById("numero2").value);
    summa(eka, toka);
}

function laskin_vahennys() {
    let eka = parseFloat(document.getElementById("numero1").value);
    let toka = parseFloat(document.getElementById("numero2").value);
    vahennys(eka, toka);
}

function laskin_kerto() {
    let eka = parseFloat(document.getElementById("numero1").value);
    let toka = parseFloat(document.getElementById("numero2").value);
    kerto(eka, toka);
}

function laskin_jako() {
    let eka = parseFloat(document.getElementById("numero1").value);
    let toka = parseFloat(document.getElementById("numero2").value);
    jako(eka, toka);
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


