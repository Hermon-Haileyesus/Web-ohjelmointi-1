function satunais() {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("noppa").textContent = "Nopan tulos: " + diceRoll;
}

function drawLotto() {
    let lottoNumbers = [];
    while (lottoNumbers.length < 7) {
        let num = Math.floor(Math.random() * 40) + 1;
        if (!lottoNumbers.includes(num)) {
            lottoNumbers.push(num);
        }
    }
    document.getElementById("lotto").textContent = "Loton numerot: " + lottoNumbers.join(", ");
}
function convertToInt(input) {
    return parseInt(input.value);
}



document.getElementById("checkLotto").addEventListener("click", function() {
    let userNumbers = Array.from(document.querySelectorAll("#userNumbers input")).map(convertToInt).filter(num => !isNaN(num)); 
    let lottoNumbers = [];
    while (lottoNumbers.length < 7) {
        let num = Math.floor(Math.random() * 40) + 1;
        if (!lottoNumbers.includes(num)) {
            lottoNumbers.push(num);
        }
    }
    let correctGuesses = userNumbers.filter(num => lottoNumbers.includes(num)).length;
    document.getElementById("result").textContent = `Loton numerot: ${lottoNumbers.join(", ")} | Oikein arvattu: ${correctGuesses}`;
});