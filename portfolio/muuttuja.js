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
