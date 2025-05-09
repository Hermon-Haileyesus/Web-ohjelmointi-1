console.log("Henkilötiedot-sivu on avattu")
const henkilot = [
    { name: "Merja Meikäläinen", age: 20, job: "Opiskelija", driversLicense: true },
    { name: "Teppo Teikäläinen", age: 25, job: "Sähköteknikko", driversLicense: true },
    { name: "Helena Heikäläinen", age: 30, job: "Ohjelmistosuunnittelija", driversLicense: false },
    { name: "Semir Sikäläinen", age: 18, job: "Opiskelija", driversLicense: true },
    { name: "Tomas Täkäläinen", age: 22, job: "Linja-autonkuljettaja", driversLicense: true }
];
const rivit = document.getElementById("rivit");
function luoRivit() {
    rivit.innerHTML = ""; 
    for(const henkilo of henkilot){
        const rivi = document.createElement("tr");

        
        const nimi = document.createElement("td");
        nimi.innerHTML = henkilo.name;
        const ika = document.createElement("td");
        if (henkilo.age >= 18) {
            ika.innerHTML = henkilo.age + " 🍺"; // "window + . " to add emoji
        } else {
            ika.innerHTML = henkilo.age;
        } 
        
        const tyo = document.createElement("td");
        if (henkilo.job === "Opiskelija") {
            tyo.innerHTML = henkilo.job + " 🎓";
        } else {
            tyo.innerHTML = henkilo.job;
        }
        
        
        const ajokortti = document.createElement("td");
        ajokortti.innerHTML = henkilo.driversLicense ? "Kyllä" : "Ei";

       
        rivi.append(nimi, ika, tyo, ajokortti);
        rivit.appendChild(rivi); 
    }
}
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


       
function lisaaHenkilo(event) {
    event.preventDefault();
    const nimi = capitalizeFirstLetter(document.getElementById("nimi").value);
    const ika = parseInt(document.getElementById("ika").value, 10);
    const tyo = capitalizeFirstLetter(document.getElementById("tyo").value);
    const ajokortti = document.getElementById("ajokortti").checked;

    if (ika < 0) {
        alert("Iän pitää olla positiivinen luku");
        return;
        }

            
    const uusiHenkilo = { name: nimi, age: ika, job: tyo, driversLicense: ajokortti };
    henkilot.push(uusiHenkilo);
    document.getElementById("nimi").value = ""; 
    document.getElementById("ika").value = ""; 
    document.getElementById("tyo").value = ""; 
    document.getElementById("ajokortti").checked = false;
    
    


    luoRivit();
    


}


luoRivit();
