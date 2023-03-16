// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


const userChoice = prompt("Scegli pari o dispari")

const userNumber = parseInt(prompt("Dimmi un numero da 1 a 5"));
console.log(userNumber);

const userNumberHtml = document.createElement("p");
userNumberHtml.innerHTML = `Il numero dell'utente è: ${userNumber}`;
document.body.appendChild(userNumberHtml);

const computerNumber = getRndInteger(1, 5);
console.log(computerNumber);
const computerNumberHtml = document.createElement("p");
computerNumberHtml.innerHTML = `Il numero del computer è: ${computerNumber}`;
document.body.appendChild(computerNumberHtml);

// somma dei due num

let total = userNumber + computerNumber;
console.log(total);
const totalNumberHtml = document.createElement("p");
totalNumberHtml.innerHTML = `Il totle dei numeri è: ${total}`;
document.body.appendChild(totalNumberHtml);

// risultato =

const result = check(total);
console.log(result);

// decisione della vittora



//Dichiaro la funzione 
/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns il numero rando generato
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function check (win) {
    let message = "";
    if (total % 2 === 0 && total % 3 === 0) {
        message = "il numero è pari";
    } else {
        message = "il numero è dispari";
    }
    return message;

}

