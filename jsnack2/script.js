// Crea un array vuoto.Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.


const numbersArray = [];

for (i = 0; i < 6; i++){
    let number;
    while (isNaN(number)) {
        number = parseInt(prompt(`${i + 1}, inserisci un nuovo numero`));

    }
    if (number % 2 !== 0) {
        numbersArray.push(number);
    }
}

console.log(numbersArray);

