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
        ika.innerHTML = henkilo.age;
        const tyo = document.createElement("td");
        tyo.innerHTML = henkilo.job;
        const ajokortti = document.createElement("td");
        ajokortti.innerHTML = henkilo.driversLicense ? "Kyllä" : "Ei";

       
        rivi.append(nimi, ika, tyo, ajokortti);
        rivit.appendChild(rivi); 
    }
}


luoRivit();
