// Chiedi un numero di 4 cifre
// all’utente e calcola la somma di tutte le cifre che compongono il numero.
// (questo potrebbe richiedere un minimo di ricerca)


// let sum = 0;
// let isValid = false;

// do {
//     let number = prompt('Insert a four digits number');
//     if (number.length === 4)
//         isValid = true;
//     while (number) {
    
//         sum += number % 10;
//         number = Math.floor(number / 10);
//     }
// }while(!isValid)
// console.log(sum);

let isValid = false;
while (!isValid) {
    let number = prompt('Insert a four digits number');
    if (number.length === 4) {
        isValid = true;
        let numberArray = Array.from(String(number), Number);
        let sum = 0;
        for (i = 0; i < numberArray.length; i++) {
            sum += numberArray[i];
        }
        console.log(sum);
    }
}

// let number = prompt('Insert a four digits number');
// let sum = 0;
// const numbers = number;
// for (const num of numbers) {
//     console.log(num);
//     sum += num;
    
// }
// console.log(sum);
