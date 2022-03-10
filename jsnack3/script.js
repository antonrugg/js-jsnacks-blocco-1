console.log('js ok');

// Chiedi un numero di 4 cifre
// all’utente e calcola la somma di tutte le cifre che compongono il numero.
// (questo potrebbe richiedere un minimo di ricerca)

let number = parseInt(prompt('Insert a four digits number'));
let sum = 0;

while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
}

console.log(sum);

// let number = prompt('Insert a four digits number');
// const numberArray = number;
// let sum = numberArray[0];
// for (i = 1; i < numberArray.length; i++){
//     sum += numberArray[i];
// }

// console.log(sum);