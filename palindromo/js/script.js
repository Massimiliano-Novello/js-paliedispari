// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
let userWord = prompt("Inserisci una parola");
let control = palindroma(userWord);
console.log(control);



function palindroma() {
  let result = userWord.split("").reverse().join("");

  if (userWord === result) {
    return userWord + " è palindroma";
  }

  else {
    return userWord + " non è palindroma";
  }
}